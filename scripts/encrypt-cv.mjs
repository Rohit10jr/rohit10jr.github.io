#!/usr/bin/env node
// Encrypts a private CV fragment into public/cv.enc.
//
// Run locally only. The passphrase is never written to disk and never leaves
// this machine; only the ciphertext is committed.
//
//   npm run cv:encrypt -- --source ../rohit-private/cv.html
//   CV_PASSWORD=... npm run cv:encrypt          (non-interactive)

import { webcrypto as crypto } from 'node:crypto'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { createInterface } from 'node:readline'
import { dirname, resolve } from 'node:path'
import process from 'node:process'

const ITERATIONS = 600_000
const SALT_BYTES = 16
const IV_BYTES = 12
const OUTPUT = 'public/cv.enc'

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`)
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback
}

async function prompt(question) {
  const rl = createInterface({ input: process.stdin, output: process.stdout })
  // hide typed characters
  const onData = (char) => {
    if (['\n', '\r', '\u0004'].includes(char.toString())) return
    process.stdout.write('\u001b[2K\u001b[200D' + question + '*'.repeat(rl.line.length))
  }
  process.stdin.on('data', onData)
  try {
    return await new Promise((r) => rl.question(question, r))
  } finally {
    process.stdin.off('data', onData)
    rl.close()
    process.stdout.write('\n')
  }
}

async function deriveKey(password, salt) {
  const material = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey'],
  )
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: ITERATIONS, hash: 'SHA-256' },
    material,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt'],
  )
}

const b64 = (buf) => Buffer.from(buf).toString('base64')

async function main() {
  const source = resolve(arg('source', process.env.CV_SOURCE ?? 'private/cv.html'))

  let html
  try {
    html = await readFile(source, 'utf8')
  } catch {
    console.error(`Cannot read CV source: ${source}`)
    console.error('Pass --source <path> or set CV_SOURCE.')
    process.exit(1)
  }

  const password = process.env.CV_PASSWORD ?? (await prompt('CV passphrase: '))
  if (!password || password.length < 12) {
    console.error('Refusing to encrypt: passphrase must be at least 12 characters.')
    console.error('This file is public once pushed and can be attacked offline forever.')
    process.exit(1)
  }

  const salt = crypto.getRandomValues(new Uint8Array(SALT_BYTES))
  const iv = crypto.getRandomValues(new Uint8Array(IV_BYTES))
  const key = await deriveKey(password, salt)
  const ct = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv }, key, new TextEncoder().encode(html),
  )

  const payload = {
    v: 1,
    alg: 'AES-GCM',
    kdf: 'PBKDF2-SHA256',
    iterations: ITERATIONS,
    salt: b64(salt),
    iv: b64(iv),
    ct: b64(ct),
  }

  await mkdir(dirname(OUTPUT), { recursive: true })
  await writeFile(OUTPUT, JSON.stringify(payload), 'utf8')

  console.log(`Encrypted ${(html.length / 1024).toFixed(1)} KB -> ${OUTPUT} ` +
              `(${(JSON.stringify(payload).length / 1024).toFixed(1)} KB)`)
}

main()
