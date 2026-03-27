import Nav from "@/components/Nav";

export default function GetStartedPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-50">
      <Nav />
      <main className="flex-1">
        <section className="border-b border-neutral-800 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 pt-10 pb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400 mb-3">
              Get Started
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              Start Your Jiu-Jitsu Journey at Kaiju
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 max-w-3xl mb-4">
              At Kaiju Jiu Jitsu, we understand that everyone&apos;s journey begins
              differently&mdash;that&apos;s why we offer multiple trial options designed
              to fit your schedule, experience level, and goals. Whether you&apos;re
              stepping onto the mats for the very first time or looking to find a new
              academy to call home, we have a path that works for you.
            </p>
            <p className="text-sm sm:text-base text-neutral-300 max-w-3xl mb-4">
              To get started, simply submit your contact information through our form.
              Once we receive your details, a member of our team will reach out to you
              shortly to walk you through the available trial options, answer any
              questions, and help you choose the best fit.
            </p>
            <p className="text-sm sm:text-base text-neutral-300 max-w-3xl">
              We&apos;re excited to connect with you and help you take the first step
              in your Jiu Jitsu journey.
            </p>
          </div>
        </section>

        <section className="border-b border-neutral-800 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 py-10 grid gap-10 lg:grid-cols-[1.2fr_minmax(0,_1fr)]">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3">
                What to Expect for Your First Class
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 mb-4">
                On your first visit, we&apos;ll greet you, show you around the academy,
                and walk you through what to expect in class. You&apos;ll have time to
                ask questions and meet your coach before stepping on the mats.
              </p>
              <p className="text-sm sm:text-base text-neutral-300 mb-4">
                You don&apos;t need to be in shape or have prior martial arts
                experience to start. Many of our students begin with no background at
                all-your first class is all about learning the basics at your own
                pace.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-sm font-semibold mb-1">
                    What to wear
                  </h3>
                  <p className="text-sm text-neutral-300">
                    Comfortable athletic clothing is perfect for your first class
                    (e.g. t-shirt and shorts or leggings). If you already have a
                    gi, you&apos;re welcome to bring it.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1">
                    When to arrive
                  </h3>
                  <p className="text-sm text-neutral-300">
                    Please arrive 10-15 minutes early so we can help you get set up,
                    sign any necessary waivers, and introduce you to your coach and
                    training partners.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1">
                    After your first class
                  </h3>
                  <p className="text-sm text-neutral-300">
                    We&apos;ll check in with you, answer any remaining questions, and
                    go over membership options if you&apos;d like to continue training.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
              <h2 className="text-lg font-semibold mb-2">
                Get Started
              </h2>
              <p className="text-sm text-neutral-300 mb-4">
                Submit your information and a member of our team will reach out
                to walk you through your trial options.
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
                    <option>Homeschool Classes</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400 mb-1">
                    Preferred days &amp; times
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-50 placeholder:text-neutral-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                    placeholder="e.g. Mon/Wed evenings, Sat mornings"
                  />
                </div>
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center rounded-full bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 transition-colors"
                >
                  Submit
                </button>
                <p className="text-[11px] text-neutral-500">
                  We&apos;ll never spam you. We only use your information to help you
                  get started at Kaiju Jiu-Jitsu.
                </p>
              </form>
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-800 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 py-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3">
                Still Deciding If Jiu-Jitsu Is Right for You?
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 mb-4">
                It&apos;s normal to feel nervous before your first class. Many of our
                students felt the same way. After a few sessions, they discovered how
                welcoming the community is and how rewarding the training can be.
              </p>
              <p className="text-sm sm:text-base text-neutral-300 mb-4">
                Jiu-Jitsu can help you relieve stress, get in better shape, and build
                confidence in a way that few activities can match. The best way to
                find out if it&apos;s for you is to try a class.
              </p>
            </div>
            <div>
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
                <h3 className="text-base font-semibold mb-2">
                  Questions before you book?
                </h3>
                <p className="text-sm text-neutral-300 mb-4">
                  If you have questions about classes, memberships, or what to expect,
                  reach out and we&apos;ll be happy to help.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-4 py-2 text-sm font-semibold text-neutral-100 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
