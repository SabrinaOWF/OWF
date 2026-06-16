import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Operation Workflow | Systems & Lead Conversion for Contractors",
  description: "Automated lead conversion systems built for residential contractors. Stop letting high-value inbound calls and web leads slip through the cracks.",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#0f172a]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="border-b-2 border-[#e2e8f0]">
      <div className="max-w-[1100px] mx-auto px-5 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <Image
            src="/owf.png"
            alt="Operation Workflow"
            width={52}
            height={52}
            className="rounded-lg"
            priority
          />
          <div>
            <div className="text-[1.3rem] font-black tracking-[-0.04em] text-[#0f172a] leading-none">
              OPERATION <span className="text-[#2563eb]">WORKFLOW</span>
            </div>
            <div className="text-[10px] text-[#475569] tracking-wide mt-0.5">
              1451358 B.C. Ltd. DBA Operation Workflow
            </div>
          </div>
        </Link>
        <nav className="flex gap-8 items-center">
          <Link href="/optin" className="text-sm text-[#475569] hover:text-[#2563eb] transition-colors font-medium">
            Contact
          </Link>
          <Link href="/privacy-policy" className="text-sm text-[#475569] hover:text-[#2563eb] transition-colors font-medium">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-[#475569] hover:text-[#2563eb] transition-colors font-medium">
            Terms and Conditions
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 bg-[#0f172a] text-white">
      <div className="max-w-[1100px] mx-auto px-5 py-14 text-center">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/logo.svg"
            alt="Operation Workflow"
            width={48}
            height={48}
            className="rounded-lg mb-4"
          />
          <div className="text-lg font-black tracking-[-0.04em]">
            OPERATION <span className="text-[#2563eb]">WORKFLOW</span>
          </div>
          <div className="text-sm text-gray-400 mt-2">
            1451358 B.C. Ltd. DBA Operation Workflow
          </div>
        </div>

        <div className="mb-8 text-sm text-gray-400 space-y-1">
          <div>33791 Apps Court, Mission, BC, V2V6Z8, Canada</div>
          <div>sabrina@operationworkflow.com · +1 604-418-4798</div>
        </div>

        <p className="text-sm text-gray-400 mb-2">
          <Link href="/privacy-policy" className="underline hover:text-white mx-2">Privacy Policy</Link>
          |
          <Link href="/terms" className="underline hover:text-white mx-2">Terms and Conditions</Link>
          |
          <Link href="/optin" className="underline hover:text-white mx-2">Contact</Link>
        </p>

        <p className="text-xs text-gray-500 max-w-[800px] mx-auto mt-6 opacity-90 leading-relaxed">
          No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
        </p>

        <p className="text-xs text-gray-500 mt-4">
          Operation Workflow is owned and operated by 1451358 B.C. Ltd. © 2026 All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
