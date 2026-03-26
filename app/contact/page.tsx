import Nav from "@/components/Nav";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-50">
      <Nav />
      <main className="flex-1">
        <section className="border-b border-neutral-800 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 pt-10 pb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400 mb-3">
              Contact
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              Contact Kaiju Jiu-Jitsu
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 max-w-3xl mb-6">
              Have questions about classes, memberships, or scheduling? Reach out and
              we&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </section>

        <section className="border-b border-neutral-800 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 py-10 grid gap-10 lg:grid-cols-[minmax(0,_1.1fr)_minmax(0,_1fr)]">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3">
                Send us a message
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-50 placeholder:text-neutral-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-50 placeholder:text-neutral-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-50 placeholder:text-neutral-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                    placeholder="(555) 555-5555"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400 mb-1">
                    How can we help?
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-50 placeholder:text-neutral-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                    placeholder="Ask about classes, memberships, or anything else."
                  />
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3">
                Visit the academy
              </h2>
              <p className="text-sm text-neutral-300 mb-2">
                Kaiju Jiu-Jitsu
              </p>
              <p className="text-sm text-neutral-300 mb-4">
                Middleburg, FL<br />
                (Replace with full address here)
              </p>
              <p className="text-sm text-neutral-300 mb-2">
                Phone: (XXX) XXX-XXXX
              </p>
              <p className="text-sm text-neutral-300 mb-6">
                (Replace with actual phone and contact details.)
              </p>
              <p className="text-xs text-neutral-500">
                Add an embedded map here in the future for directions and parking
                information.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
