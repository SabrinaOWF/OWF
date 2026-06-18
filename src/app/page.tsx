import Link from "next/link";

export const metadata = {
  title: "Operation Workflow | Systems & Lead Conversion for Contractors",
  description: "Automated lead conversion systems built for residential contractors. Stop letting high-value inbound calls and web leads slip through the cracks.",
};

export default function HomePage() {
  return (
    <div className="max-w-[1100px] mx-auto px-5">
      {/* Hero Section */}
      <section className="text-center py-24 md:py-28" style={{ background: "radial-gradient(circle at top, #eff6ff 0%, #ffffff 70%)" }}>
        <h1 className="text-4xl md:text-[3.4rem] font-black tracking-[-0.03em] leading-tight mb-6">
          Automated Lead Conversion Systems Built for{" "}
          <span className="text-[#2563eb]">Residential Contractors.</span>
        </h1>
        <p className="text-lg md:text-[1.3rem] text-[#475569] max-w-[850px] mx-auto mb-10 font-normal">
          Stop letting high-value inbound calls and web leads slip through the cracks. We deploy custom communication workflows that instantly text back missed calls, unify your messaging, and secure your estimates.
        </p>
        <Link
          href="/optin"
          className="inline-block bg-[#f97316] text-white px-10 py-4 text-[1.15rem] font-bold rounded-lg shadow-[0_4px_14px_rgba(249,115,22,0.3)] transition-all duration-200 hover:bg-[#ea580c] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(249,115,22,0.4)]"
        >
          Schedule a 15-Minute System Demo
        </Link>
      </section>

      {/* Features Section */}
      <h2 className="text-center text-[2.2rem] font-extrabold mb-2">Built to Handle Your Customer Pipeline</h2>
      <p className="text-center text-[#475569] mb-12 text-[1.1rem]">
        A bulletproof operations layer deployed directly into your business.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10 mb-20">
        <div className="bg-[#f8fafc] p-9 rounded-xl border border-[#e2e8f0] transition-transform duration-200 hover:-translate-y-1 hover:border-[#2563eb]">
          <span className="text-3xl mb-4 block">⚡</span>
          <h3 className="text-[1.35rem] text-[#0f172a] font-bold mt-0">Instant Missed-Call Text-Back</h3>
          <p className="text-[#475569] mt-3">
            When you&apos;re out on a job or driving between sites, you miss calls. Our system immediately text-backs those hot leads via SMS to lock in the quote request before they dial a competitor.
          </p>
        </div>

        <div className="bg-[#f8fafc] p-9 rounded-xl border border-[#e2e8f0] transition-transform duration-200 hover:-translate-y-1 hover:border-[#2563eb]">
          <span className="text-3xl mb-4 block">📥</span>
          <h3 className="text-[1.35rem] text-[#0f172a] font-bold mt-0">The Unified Lead Inbox</h3>
          <p className="text-[#475569] mt-3">
            Consolidate your incoming texts, Google local leads, Facebook messages, and website quote requests into one single, lightning-fast mobile dashboard.
          </p>
        </div>

        <div className="bg-[#f8fafc] p-9 rounded-xl border border-[#e2e8f0] transition-transform duration-200 hover:-translate-y-1 hover:border-[#2563eb]">
          <span className="text-3xl mb-4 block">📋</span>
          <h3 className="text-[1.35rem] text-[#0f172a] font-bold mt-0">Mobile Estimates & Fast-Track Billing</h3>
          <p className="text-[#475569] mt-3">
            Generate professional digital quotes and send secure text-to-pay links directly to your customer&apos;s smartphone right from the field.
          </p>
        </div>
      </section>

      {/* Value Hook */}
      <section className="bg-[#2563eb] text-white rounded-2xl py-16 px-10 my-20 text-center shadow-[0_10px_30px_rgba(37,99,235,0.2)]">
        <h2 className="text-3xl md:text-[2.4rem] font-extrabold mt-0 mb-4">Custom Infrastructure. Zero Long-Term Contracts.</h2>
        <p className="text-lg md:text-[1.2rem] max-w-[700px] mx-auto mb-8 opacity-90">
          We build, host, and optimize your entire trade communication pipeline to match your exact dispatch flow. Cancel anytime with a simple 30-day notice.
        </p>
        <Link
          href="/optin"
          className="inline-block bg-white text-[#2563eb] px-9 py-4 text-[1.1rem] font-bold rounded-lg transition-colors duration-200 hover:bg-[#f1f5f9]"
        >
          Request a Custom System Quote
        </Link>
      </section>

      {/* Niches */}
      <section className="text-center py-16 bg-[#f8fafc] rounded-xl mb-16">
        <h2 className="text-[2.2rem] font-extrabold">Serving the Residential Trades</h2>
        <div className="flex justify-center gap-4 flex-wrap mt-8">
          <span className="bg-white text-[#0f172a] px-8 py-3.5 rounded-full font-bold border border-[#e2e8f0] shadow-[0_2px_4px_rgba(0,0,0,0.02)]">Plumbing & HVAC</span>
          <span className="bg-white text-[#0f172a] px-8 py-3.5 rounded-full font-bold border border-[#e2e8f0] shadow-[0_2px_4px_rgba(0,0,0,0.02)]">Roofing Companies</span>
          <span className="bg-white text-[#0f172a] px-8 py-3.5 rounded-full font-bold border border-[#e2e8f0] shadow-[0_2px_4px_rgba(0,0,0,0.02)]">Asphalt & Sealcoating</span>
        </div>
      </section>

      {/* Booking Section */}
      <section className="text-center py-20 pb-6" id="setup">
        <h2 className="text-[2.2rem] font-extrabold">Claim Your Demonstration Slot</h2>
        <p className="text-[#475569] mt-4 mb-10">See our custom trade workflows live in action and claim your setup slot.</p>
        <div className="bg-[#f8fafc] border-2 border-dashed border-[#cbd5e1] rounded-xl max-w-[600px] mx-auto p-10 mb-8">
          <p className="text-[#475569] font-semibold mb-6">Ready to see it in action?</p>
          <Link
            href="/optin"
            className="inline-block bg-[#f97316] text-white px-10 py-4 text-[1.15rem] font-bold rounded-lg shadow-[0_4px_14px_rgba(249,115,22,0.3)] transition-all duration-200 hover:bg-[#ea580c] hover:-translate-y-0.5"
          >
            Schedule a 15-Minute System Demo
          </Link>
        </div>
        <p className="text-xs text-[#94a3b8] max-w-[600px] mx-auto leading-relaxed px-4">
          By scheduling a demo, you consent to receive transactional and promotional text messages from 1451358 B.C. Ltd. at the phone number provided. Message &amp; data rates may apply. Message frequency varies. Reply STOP to opt out. View our{" "}
          <Link href="/privacy-policy" className="text-[#2563eb] hover:underline">Privacy Policy</Link>{" "}and{" "}
          <Link href="/terms" className="text-[#2563eb] hover:underline">Terms and Conditions</Link>.
        </p>
      </section>
    </div>
  );
}
