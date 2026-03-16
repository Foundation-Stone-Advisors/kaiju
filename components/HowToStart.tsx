export default function HowToStart() {
  return (
    <section
      id="how-to-start"
      className="border-b border-neutral-800 bg-neutral-950"
    >
      <div className="max-w-6xl mx-auto px-4 py-14 grid gap-10 lg:grid-cols-[1.2fr_minmax(0,_1fr)]">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
            How to Get Started
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-8">
            Getting started at Kaiju Jiu-Jitsu is simple and low-pressure. Follow
            these three steps and we&apos;ll guide you every step of the way.
          </p>

          <ol className="space-y-6">
            <li className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-semibold">
                1
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1">
                  Choose your program
                </h3>
                <p className="text-sm text-neutral-300">
                  Pick the class that fits you or your child: Kids, Ladies,
                  Fundamentals, Advanced, or Boxing.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-semibold">
                2
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1">
                  Request your first class
                </h3>
                <p className="text-sm text-neutral-300">
                  Fill out a short form so we can match you with the right class
                  time, answer questions, and confirm your visit.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-semibold">
                3
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1">
                  Show up and train
                </h3>
                <p className="text-sm text-neutral-300">
                  Arrive a few minutes early, meet your coach, and experience a
                  safe, structured class where you&apos;ll be guided step by
                  step.
                </p>
              </div>
            </li>
          </ol>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
          <h3 className="text-lg font-semibold mb-2">
            New Member Intro Request
          </h3>
          <p className="text-sm text-neutral-300 mb-4">
            Tell us a bit about you and we&apos;ll reach out to confirm your
            first class and walk you through membership options.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400 mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-50 placeholder:text-neutral-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                placeholder="Your name"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
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
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400 mb-1">
                Who is training?
              </label>
              <select className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-50 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500">
                <option>Myself</option>
                <option>My child</option>
                <option>Multiple family members</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400 mb-1">
                Program of interest
              </label>
              <select className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-50 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500">
                <option>Kids Jiu-Jitsu</option>
                <option>Ladies Jiu-Jitsu</option>
                <option>Fundamentals Jiu-Jitsu</option>
                <option>Advanced Jiu-Jitsu</option>
                <option>Boxing</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400 mb-1">
                Preferred days
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-50 placeholder:text-neutral-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                placeholder="e.g. Mon/Wed evenings"
              />
            </div>
            <button
              type="button"
              className="w-full inline-flex items-center justify-center rounded-full bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 transition-colors"
            >
              Request My First Class
            </button>
            <p className="text-[11px] text-neutral-500">
              We respect your time and privacy. We use your info only to help you
              get started at Kaiju Jiu-Jitsu.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
