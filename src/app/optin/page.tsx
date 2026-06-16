import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact - Operation Workflow",
  description: "Schedule your 15-minute system demo with Operation Workflow. Get in touch with our team.",
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

      {/* Contact Card */}
      <div className="mt-16 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </div>
  );
}
