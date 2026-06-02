import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, company, website, consentTransactional, consentMarketing } = body

    // Consent checkboxes are optional per A2P 10DLC guidelines.
    // Form submission proceeds regardless of consent selections.

    const token = process.env.GHL_PRIVATE_TOKEN
    if (!token) {
      return NextResponse.json(
        { error: 'Server configuration error: GHL_PRIVATE_TOKEN not set' },
        { status: 500 }
      )
    }

    // GHL v2 API via Private Integration Token (PIT)
    const response = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        companyName: company,
        website,
        tags: ['Landing Page Lead'],
        source: 'Website Opt-in Form',
      })
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: 'GHL API error', details: data },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, contact: data })

  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: 'Server error', details: message },
      { status: 500 }
    )
  }
}
