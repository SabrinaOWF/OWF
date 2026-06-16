export const metadata = {
  title: "Privacy Policy - Operation Workflow",
  description: "Privacy Policy for Operation Workflow (1451358 B.C. Ltd.). Data collection, SMS messaging, opt-out instructions, and security practices.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-[760px] mx-auto px-5 py-16">
      <div className="mb-12">
        <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-[#2563eb] mb-4">Legal</span>
        <h1 className="text-4xl md:text-[2.8rem] font-extrabold text-[#0f172a] leading-tight">Privacy Policy</h1>
        <p className="mt-4 text-[#475569]">Last Updated: May 2026</p>
      </div>

      <Section label="Business Information">
        <h2>About 1451358 B.C. Ltd.</h2>
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-7 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#2563eb]">Legal Name</span>
            <span className="text-sm text-[#475569]">1451358 B.C. Ltd.</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#2563eb]">Operating As</span>
            <span className="text-sm text-[#475569]">OWF - Operation Workflow</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#2563eb]">Address</span>
            <span className="text-sm text-[#475569]">33791 Apps Court, Mission, BC, V2V6Z8, Canada</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#2563eb]">Contact</span>
            <span className="text-sm text-[#475569]">
              sabrina@operationworkflow.com
              <br />
              +1 604-418-4798
            </span>
          </div>
        </div>
      </Section>

      <Section label="Data Collection">
        <h2>Information We Collect</h2>
        <p>We collect information you provide directly to us including your name, phone number, and email address when filling out our forms or contacting us through our website at operationworkflow.com.</p>
      </Section>

      <Section label="Data Usage">
        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to send appointment confirmations, reminders, and responses to service inquiries. We also send marketing messages only where you have provided explicit secondary consent via a separate checkbox on our opt-in form.</p>
        <p>We do not sell, rent, or trade your personal information or contact lists to any third party for their own marketing purposes.</p>
      </Section>

      <Section label="SMS Messaging">
        <h2>Text Message Communications</h2>
        <HighlightBox>
          No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
        </HighlightBox>
        <p>Users opt in to receive SMS messages from 1451358 B.C. Ltd. by visiting operationworkflow.com and manually checking one or both of two distinct, non-pre-selected checkboxes on our contact/booking form - one for transactional messages (appointment confirmations and service responses) and one for marketing messages. Message frequency averages 3 to 5 messages per month. You may opt out at any time by replying STOP.</p>
        <p>Message frequency varies. Message and data rates may apply. By opting into our SMS services, you represent that you are at least 18 years of age.</p>
      </Section>

      <Section label="Your Rights">
        <h2>Opt-Out Instructions</h2>
        <p>You may opt out of receiving text messages at any time by replying <strong>STOP</strong> to any message. After sending STOP you will receive one final confirmation and no further messages will be sent. For help reply <strong>HELP</strong> or contact us at sabrina@operationworkflow.com.</p>
      </Section>

      <Section label="Children's Privacy">
        <h2>COPPA Compliance</h2>
        <p>This website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately at sabrina@operationworkflow.com so we can delete it.</p>
      </Section>

      <Section label="Cookies & Tracking">
        <h2>Cookie & Tracking Technologies</h2>
        <p>We use cookies and similar tracking technologies to improve your experience on operationworkflow.com. This may include analytics tools (such as Google Analytics) that collect anonymized data about site usage, such as pages visited and time spent on site. You may disable cookies through your browser settings, though some features of the site may not function properly as a result.</p>
      </Section>

      <Section label="Security">
        <h2>Data Security</h2>
        <p>We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, use, or disclosure. All form submissions are protected using SSL encryption. We retain your information only as long as necessary to fulfill the purposes outlined in this policy.</p>
      </Section>

      <Section label="Terms">
        <h2>Related Policies</h2>
        <p>Your use of our services is also governed by our <a href="/terms" className="text-[#2563eb] hover:underline">Terms and Conditions</a>. Please review them carefully.</p>
      </Section>

      <Section label="Contact" last>
        <h2>Questions About This Policy</h2>
        <p>If you have any questions please contact us at sabrina@operationworkflow.com or by mail at 33791 Apps Court, Mission, BC, V2V6Z8, Canada.</p>
        <div className="mt-6">
          <p><strong>1451358 B.C. Ltd.</strong><br />
          33791 Apps Court, Mission, BC, V2V6Z8, Canada<br />
          +1 604-418-4798<br />
          sabrina@operationworkflow.com</p>
        </div>
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
