export const metadata = {
  title: "Terms and Conditions - Operation Workflow",
  description: "Terms and Conditions for Operation Workflow (1451358 B.C. Ltd.). SMS program terms, opt-out instructions, and legal disclosures.",
};

export default function TermsPage() {
  return (
    <div className="max-w-[760px] mx-auto px-5 py-16">
      <div className="mb-12">
        <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-[#2563eb] mb-4">Legal</span>
        <h1 className="text-4xl md:text-[2.8rem] font-extrabold text-[#0f172a] leading-tight">Terms and Conditions</h1>
        <p className="mt-4 text-[#475569]">Last Updated: May 2026</p>
      </div>

      <Section label="SMS TERMS &amp; CONDITIONS">
        <h2>SMS Terms &amp; Conditions</h2>
        <p>1. Program Description: Operation Workflow uses text messaging to interact with businesses regarding operational assessments. 2. Opt-Out: You can cancel the SMS service at any time by texting <strong>STOP</strong>. 3. Help: Reply with <strong>HELP</strong> for assistance. 4. Rates: Message and data rates may apply. Message frequency varies.</p>
      </Section>

      <Section label="Business Information">
        <h2>1451358 B.C. Ltd.</h2>
        <p>OWF - Operation Workflow<br />33791 Apps Court, Mission, BC, V2V6Z8, Canada<br />sabrina@operationworkflow.com · +1 604-418-4798</p>
      </Section>

      <Section label="SMS Program">
        <h2>Program Description</h2>
        <p>By providing your phone number and checking the consent boxes on our form, you agree to receive text messages from 1451358 B.C. Ltd. at the number provided. Our messaging program includes service updates, appointment confirmations, and marketing promotions where you have provided secondary consent. This program is designed to ensure optimal customer support and to respond to service-related inquiries. Consent is not a condition of any purchase.</p>
      </Section>

      <Section label="Opt-Out">
        <h2>How to Stop Messages</h2>
        <HighlightBox>
          You can cancel the SMS service at any time. Just text <strong>STOP</strong> to +1 604-418-4798. After you send the SMS message STOP to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again.
        </HighlightBox>
      </Section>

      <Section label="Support">
        <h2>Getting Help</h2>
        <HighlightBox>
          If you are experiencing issues with the messaging program, you can reply with the keyword <strong>HELP</strong> for more assistance, or contact us at sabrina@operationworkflow.com or +1 604-418-4798.
        </HighlightBox>
      </Section>

      <Section label="Rates & Liability">
        <h2>Costs and Delivery</h2>
        <p>Message and data rates may apply. Message frequency varies based on your interactions with our service. Carriers are not liable for delayed or undelivered messages.</p>
      </Section>

      <Section label="Eligibility">
        <h2>Age Requirement</h2>
        <p>By using this service, you represent and warrant that you are at least 18 years of age. If you are under 18 years old, you may not use or access our services or opt into our messaging program.</p>
      </Section>

      <Section label="Privacy">
        <h2>Privacy Policy</h2>
        <p>If you have any questions regarding privacy, please read our privacy policy: <a href="/privacy-policy" className="text-[#2563eb] hover:underline">operationworkflow.com/privacy-policy</a></p>
      </Section>

      <Section label="Governing Law">
        <h2>Jurisdiction</h2>
        <p>These terms are governed by the laws of British Columbia, Canada. Any disputes shall be resolved in the courts of British Columbia.</p>
      </Section>

      <Section label="Contact" last>
        <h2>Reach Us</h2>
        <p><strong>1451358 B.C. Ltd.</strong><br />
        33791 Apps Court, Mission, BC, V2V6Z8, Canada<br />
        +1 604-418-4798<br />
        sabrina@operationworkflow.com</p>
      </Section>
    </div>
  );
}

function Section({ label, children, last = false }: { label: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div className={`mb-12 pb-12 ${!last ? 'border-b border-[#e2e8f0]' : ''}`}>
      <span className="block text-[10px] font-semibold tracking-[2.5px] uppercase text-[#2563eb] mb-3">{label}</span>
      {children}
    </div>
  );
}

function HighlightBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white border border-[#e2e8f0] border-l-[3px] border-l-[#2563eb] rounded-r-lg p-5 md:p-6 my-6 text-sm text-[#475569] leading-relaxed">
      {children}
    </div>
  );
}
