import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stop Losing Leads | Operation Workflow",
  description:
    "Recover missed opportunities with managed follow-up, missed-call text-back, lead reactivation, and automated customer follow-ups.",
};

const bookingUrl = "https://calendar.app.google/gcW88adJ1NekJZFHA";

const services = [
  {
    title: "Missed-Call Text-Back",
    description:
      "When your team misses a call, an automatic text helps keep the opportunity alive.",
  },
  {
    title: "Immediate Lead Response",
    description:
      "Respond quickly to new inquiries so potential customers aren't left waiting.",
  },
  {
    title: "Estimate & Consultation Follow-Ups",
    description:
      "Keep following up automatically after estimates or consultations have been sent.",
  },
  {
    title: "Old Lead Reactivation",
    description:
      "Reconnect with previous inquiries that never became customers.",
  },
  {
    title: "Past-Customer Reactivation",
    description:
      "Stay in touch with previous customers and encourage repeat business.",
  },
  {
    title: "Fully Managed Service",
    description:
      "We handle setup, monitoring, maintenance, and monthly reporting.",
  },
];

function BookButton({ label = "Book Your Free 10-Minute Call" }: { label?: string }) {
  return (
    <a
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full bg-[#315D48] px-8 py-4 text-center font-semibold text-white transition hover:bg-[#244735]"
    >
      {label} →
    </a>
  );
}

export default function LandingPage() {
  return (
    <main className="bg-[#F8F3EB] text-[#293D32]">
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[#9B704E]">
          Revenue Recovery & Managed Follow-Up
        </p>
        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          You're Getting Leads.
          <span className="block text-[#9B704E]">
            Are You Losing Them?
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#59675C]">
          Missed calls. Unanswered inquiries. Estimates that never get
          followed up. Every missed opportunity could be revenue walking
          away from your business.
        </p>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed">
          Operation Workflow puts managed follow-up systems in place so
          opportunities don't disappear simply because your team is busy.
        </p>
        <div className="mt-9">
          <BookButton />
          <p className="mt-3 text-sm text-[#68776B]">
            A simple, no-pressure conversation. Just 10 minutes.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 font-semibold uppercase tracking-widest text-[#9B704E]">
            Sound familiar?
          </p>
          <h2 className="max-w-3xl text-4xl font-bold">
            You work hard to bring in customers. Don't let the follow-up
            be where you lose them.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              "A potential customer calls while you're busy.",
              "An estimate gets sent, but nobody follows up.",
              "Past customers forget to call you again.",
            ].map((problem) => (
              <div
                key={problem}
                className="rounded-2xl border border-[#E8E4DC] bg-[#F8F3EB] p-7 text-lg"
              >
                {problem}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-4 font-semibold uppercase tracking-widest text-[#9B704E]">
          What we handle
        </p>
        <h2 className="text-4xl font-bold">
          The follow-up your business needs. Managed for you.
        </h2>
        <p className="mt-5 max-w-3xl text-lg text-[#59675C]">
          No more relying on someone remembering to send the next message.
          We build, maintain, and monitor the automated follow-up systems
          that support your existing team.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-[#E5DED3] bg-white p-7"
            >
              <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
              <p className="leading-relaxed text-[#59675C]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#EDE4D7] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold">
            You run your business. We keep the follow-up running.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed">
            Your team continues handling customer conversations, estimates,
            bookings, and delivering the work. We handle the automated
            follow-up systems behind the scenes.
          </p>
          <div className="mt-9">
            <BookButton label="Let's Talk About Your Business" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="mb-4 font-semibold uppercase tracking-widest text-[#9B704E]">
          Ready to recover more opportunities?
        </p>
        <h2 className="text-4xl font-bold md:text-5xl">
          Stop letting good leads go quiet.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-[#59675C]">
          Find out how Operation Workflow can help your service business
          stay connected to potential and past customers.
        </p>
        <div className="mt-9">
          <BookButton />
        </div>
      </section>
    </main>
  );
}
