import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact - Operation Workflow",
  description: "Contact Operation Workflow to learn about our managed follow-up services and business advisory. Book a free 10-minute conversation.",
};

export default function OptinPage() {
  return (
    <div className="max-w-[760px] mx-auto px-5 py-16">
      <div className="mb-12">
        <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-[#2563eb] mb-4">
          Get In Touch
        </span>
        <h1 className="text-4xl md:text-[2.8rem] font-extrabold text-[#0f172a] leading-tight">
          Connect With Our Team
        </h1>
        <p className="mt-4 text-[#475569]">
          Fill out the form below and a member of our team will be in touch shortly.
        </p>
      </div>

      <ContactForm />

      
      {/* Business Contact */}
      <div className="mt-16 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-8 text-center">
        <h2 className="text-xl font-semibold text-[#293D32]">
          Contact Operation Workflow
        </h2>
        <p className="mt-3 text-[#475569]">
          Prefer email? Reach us at{" "}
          <a
            href="mailto:sabrina@operationworkflow.com"
            className="font-semibold text-[#345945] underline"
          >
            sabrina@operationworkflow.com
          </a>
        </p>
      </div>

    </div>
  );
}
