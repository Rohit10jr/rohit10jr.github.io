import { useState, type FormEvent } from 'react'
import { LockKeyhole, Printer } from 'lucide-react'

type Payload = {
  v: number
  iterations: number
  salt: string
  iv: string
  ct: string
}

type Status = 'locked' | 'unlocking' | 'unlocked' | 'error'

// Backed by a real ArrayBuffer so it satisfies WebCrypto's BufferSource.
function fromBase64(value: string): Uint8Array<ArrayBuffer> {
  const binary = atob(value)
  const bytes = new Uint8Array(new ArrayBuffer(binary.length))

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index)
  }

  return bytes
}

async function decryptCv(password: string, payload: Payload): Promise<string> {
  const material = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(password),
    'PBKDF2',
    false,
    ['deriveKey'],
  )

  const key = await crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: fromBase64(payload.salt),
      iterations: payload.iterations,
      hash: 'SHA-256',
    },
    material,
    { name: 'AES-GCM', length: 256 },
    false,
    ['decrypt'],
  )

  // AES-GCM authenticates the ciphertext, so a wrong password throws here
  // rather than returning plausible-looking rubbish.
  const plaintext = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: fromBase64(payload.iv) },
    key,
    fromBase64(payload.ct),
  )

  return new TextDecoder().decode(plaintext)
}

export function PrivateResume() {
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState<Status>('locked')
  const [message, setMessage] = useState('')
  const [content, setContent] = useState('')

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (!password || status === 'unlocking') {
      return
    }

    setStatus('unlocking')
    setMessage('')

    let payload: Payload
    try {
      const response = await fetch('/cv.enc', { cache: 'no-store' })
      if (!response.ok) {
        throw new Error(String(response.status))
      }
      payload = await response.json()
    } catch {
      setStatus('error')
      setMessage('Could not load the encrypted file. Try again later.')
      return
    }

    try {
      setContent(await decryptCv(password, payload))
      setPassword('')
      setStatus('unlocked')
    } catch {
      setStatus('error')
      setMessage('Incorrect password.')
    }
  }

  if (status === 'unlocked') {
    return (
      <section className="cv-block cv-unlocked" aria-labelledby="cv-title">
        <h2 id="cv-title" className="visually-hidden">
          Resume
        </h2>
        <div className="cv-toolbar">
          <button
            className="button secondary-button"
            type="button"
            onClick={() => window.print()}
          >
            <Printer aria-hidden="true" size={17} />
            Print
          </button>
        </div>
        <div className="cv-content" dangerouslySetInnerHTML={{ __html: content }} />
      </section>
    )
  }

  return (
    <section className="cv-block cv-gate" aria-labelledby="cv-title">
      <h1 id="cv-title">Resume</h1>

      <form className="cv-form" onSubmit={handleSubmit}>
        <label className="cv-label" htmlFor="cv-password">
          Password
        </label>
        <div className="cv-form-row">
          <input
            id="cv-password"
            className="cv-input"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            disabled={status === 'unlocking'}
            aria-describedby="cv-message"
          />
          <button
            className="button primary-button"
            type="submit"
            disabled={status === 'unlocking' || !password}
          >
            <LockKeyhole aria-hidden="true" size={17} />
            {status === 'unlocking' ? 'Unlocking…' : 'Unlock'}
          </button>
        </div>
        <p className="cv-message" id="cv-message" role="status">
          {status === 'unlocking'
            ? 'Deriving key, this takes a moment…'
            : message}
        </p>
      </form>
    </section>
  )
}
