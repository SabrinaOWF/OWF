'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    consentTransactional: false,
    consentMarketing: false
  })
  const [status, setStatus] = useState<null | 'loading' | 'success' | 'error'>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setFormData({
          firstName: '', lastName: '', email: '',
          phone: '', company: '', website: '',
          consentTransactional: false, consentMarketing: false
        })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-wrap">
      <div className="form-row">
        <div className="form-group">
          <label>First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="John"
          />
        </div>
        <div className="form-group">
          <label>Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Smith"
          />
        </div>
      </div>

      <div className="form-group">
        <label>Business Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="john@yourcompany.com"
        />
      </div>

      <div className="form-group">
        <label>Business Phone *</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="(604) 555-5555"
        />
      </div>

      <div className="form-group">
        <label>Company Name *</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
          placeholder="ABC Plumbing Inc."
        />
      </div>

      <div className="form-group">
        <label>Website <span className="optional-tag">(optional)</span></label>
        <input
          type="url"
          name="website"
          value={formData.website}
          onChange={handleChange}
          placeholder="https://yourwebsite.com"
        />
      </div>

      {/* A2P COMPLIANCE CHECKBOX 1 - NON-MARKETING */}
      <div className="checkbox-group">
        <input
          type="checkbox"
          name="consentTransactional"
          id="consentTransactional"
          checked={formData.consentTransactional}
          onChange={handleChange}
        />
        <label htmlFor="consentTransactional">
          I consent to receive non-marketing text messages from 1451358 B.C. Ltd. about appointment confirmations, service updates, and setup logistics. Message frequency may vary, message &amp; data rates may apply. Text HELP for assistance, reply STOP to opt out.
        </label>
      </div>

      {/* A2P COMPLIANCE CHECKBOX 2 - MARKETING */}
      <div className="checkbox-group">
        <input
          type="checkbox"
          name="consentMarketing"
          id="consentMarketing"
          checked={formData.consentMarketing}
          onChange={handleChange}
        />
        <label htmlFor="consentMarketing">
          I consent to receive marketing text messages, about special offers, discounts, and service updates, from 1451358 B.C. Ltd. at the phone number provided. Message frequency may vary. Message &amp; data rates may apply. Text HELP for assistance, reply STOP to opt out.
        </label>
      </div>

      <div className="form-footer">
        By providing your phone number, you agree to receive text messages from Operation Workflow. Message and data rates may apply. Message frequency varies. You can opt-out at any time by replying STOP. View our{" "}
        <a href="/privacy-policy">Privacy Policy</a>{" "}and{" "}
        <a href="/terms">Terms of Service</a>{" "}below.
      </div>

      <button
        type="submit"
        className="btn-submit"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Submitting...' : 'Schedule a 15-Minute System Demo'}
      </button>

      {status === 'success' && (
        <p className="success-msg">
          ✅ Thank you! We&apos;ll be in touch shortly.
        </p>
      )}
      {status === 'error' && (
        <p className="error-msg">
          ❌ Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
