import Link from "next/link";

const bookingUrl = "https://calendar.app.google/gcW88adJ1NekJZFHA";

export const metadata = {
  title: "Operation Workflow | Practical Solutions for Growing Businesses",
  description: "Managed follow-up and revenue recovery, plus practical business coaching and operational advisory. Less chasing. Less chaos. More room to grow.",
};

function BookingButton({ label = "Book a Free 10-Minute Call", light = false }: { label?: string; light?: boolean }) {
  return <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold transition hover:-translate-y-0.5 ${light ? "bg-[#F8F2E9] text-[#284537] hover:bg-white" : "bg-[#345945] text-white hover:bg-[#264333]"}`}>{label} <span aria-hidden="true" className="ml-3">↗</span></a>;
}

export default function HomePage() {
  return (
    <main className="bg-[#F8F3EB] text-[#293D32]">
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pb-28 md:pt-28">
        <div className="max-w-4xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#9B704E]">Practical solutions. Real business progress.</p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.1] tracking-[-0.045em] md:text-7xl">Less chasing. Less chaos. <span className="text-[#9B704E]">More room to grow.</span></h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#59675C] md:text-xl">You worked hard to build your business. You shouldn't have to chase every opportunity or solve every challenge alone.</p>
          <p className="mb-9 mt-4 max-w-2xl text-base leading-relaxed text-[#59675C]">Operation Workflow brings together fully managed follow-up systems and practical, hands-on business guidance—so you can focus on what matters most.</p>
          <BookingButton label="Let's Talk About Your Business" />
          <p className="mt-4 text-sm text-[#7B8177]">A free, no-pressure 10-minute conversation.</p>
        </div>
      </section>

      <section id="solutions" className="bg-[#EEE9DF] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9B704E]">Two ways we can help</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">Whatever is slowing you down, let's find a better way forward.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-[28px] bg-[#FFFCF7] p-8 shadow-sm md:p-11">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9B704E]">01 / Fully managed program</p>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">Good opportunities shouldn't disappear.</h3>
              <p className="mt-6 leading-relaxed text-[#5D695F]">A missed call during a busy day. A promising inquiry that never gets a reply. An estimate that goes quiet. These everyday gaps can add up to lost business.</p>
              <div className="my-7 h-px bg-[#E5DDD1]" />
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#9B704E]">The solution</p>
              <p className="mt-3 leading-relaxed text-[#5D695F]">We build and manage a reliable follow-up system that helps keep your business in touch with potential and past customers. Setup, monitoring, and ongoing maintenance are handled for you—not added to your to-do list.</p>
              <div className="mt-8"><BookingButton label="Explore the Managed Program" /></div>
            </article>
            <article className="rounded-[28px] bg-[#DFE5D9] p-8 md:p-11">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8E664B]">02 / Coaching & operational advisory</p>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">You don't need more advice. You need progress.</h3>
              <p className="mt-6 leading-relaxed text-[#4F6154]">When you're the person everyone turns to, it's hard to find the time and perspective to work on the business instead of constantly working in it.</p>
              <div className="my-7 h-px bg-[#C6D0C1]" />
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#8E664B]">The solution</p>
              <p className="mt-3 leading-relaxed text-[#4F6154]">Work directly with an experienced, hands-on operator to untangle challenges, make decisions, strengthen day-to-day operations, and turn ideas into action. From a focused coaching call to more involved operational support, the approach fits the challenge.</p>
              <div className="mt-8"><BookingButton label="Discuss Coaching & Advisory" /></div>
            </article>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_1.2fr] md:py-28">
        <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9B704E]">Our approach</p><h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">No fluff. No complicated playbook. Just what moves the business forward.</h2></div>
        <div className="space-y-5 text-lg leading-relaxed text-[#59675C]"><p>We believe good business support should feel straightforward, personal, and useful. We listen, identify what's getting in the way, and focus on practical next steps.</p><p>Whether we're managing your follow-up behind the scenes or helping you tackle a bigger operational challenge, our work is grounded in real-world execution—not theory for theory's sake.</p><p className="font-semibold text-[#293D32]">A capable partner in your corner. A little less on your shoulders.</p></div>
      </section>

      <section className="bg-[#345945] px-6 py-20 text-center text-white md:py-24">
        <div className="mx-auto max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E6C5A8]">Let's get started</p><h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">Tell us what's keeping you up at night.</h2><p className="mx-auto mb-8 mt-6 max-w-2xl text-lg leading-relaxed text-[#E1E9E0]">We'll listen, ask a few useful questions, and see whether Operation Workflow is the right fit. No pressure, no long presentation.</p><BookingButton light label="Book Your Free 10-Minute Call" /></div>
      </section>
      <footer className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-9 text-sm text-[#69756B] md:flex-row md:items-center md:justify-between"><p>© {new Date().getFullYear()} Operation Workflow · 1451358 B.C. Ltd.</p><div className="flex gap-6"><Link className="hover:underline" href="/privacy-policy">Privacy Policy</Link><Link className="hover:underline" href="/terms">Terms</Link><Link className="hover:underline" href="/optin">Contact</Link></div></footer>
    </main>
  );
}
