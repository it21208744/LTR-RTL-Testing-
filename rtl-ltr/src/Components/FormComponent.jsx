import React, { useState } from 'react'
import axios from 'axios'
import { useDirection } from './DirectionContext'
import '../css/FormComponent.css'
import { useTranslation } from 'react-i18next'

const FormComponent = () => {
  const { t } = useTranslation()
  const { direction, toggleDirection } = useDirection()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setResponse(null)
    setError(null)

    const formData = { name, email }

    try {
      const res = await axios.post('ExampleAPICALL', {
        name,
        email,
        response,
        error,
        lan: direction === 'ltr' ? 'en' : 'ar',
      })

      if (!res.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await res.json()
      setResponse(data)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div>
      {/* <h2>{direction === 'ltr' ? 'Submit Your Info' : 'أرسل معلوماتك'}</h2> */}
      <form onSubmit={handleSubmit}>
        <h1 className="formTitle">{t('formTitle')}</h1>
        <div>
          <label>{t('inputFieldName')}</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>{t('inputFieldEmail')}</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">{t('inputSubmit')}</button>
      </form>
      {response && (
        <div>
          <h3>Response from API:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
    </div>
  )
}

export default FormComponent
