import Nav from "@/components/Nav";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-50">
      <Nav />
      <main className="flex-1">
        <section className="border-b border-neutral-800 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 pt-10 pb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400 mb-3">
              About Kaiju Jiu-Jitsu
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              A Safe, Supportive Place to Learn and Grow Through Jiu-Jitsu
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 max-w-3xl">
              Our mission at Kaiju Jiu-Jitsu is to provide a safe and supportive
              environment where individuals of all ages can learn and excel in the
              art of Jiu-Jitsu, while improving physical fitness and mental well-being.
            </p>
          </div>
        </section>

        <section className="border-b border-neutral-800 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 py-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3">
                Jiu-Jitsu as a Way of Life
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 mb-4">
                We believe that Jiu-Jitsu is more than just a martial art. It&apos;s a
                way of life that teaches discipline, respect, perseverance, and
                humility-values that extend beyond the mats and into everyday life.
              </p>
              <p className="text-sm sm:text-base text-neutral-300 mb-4">
                At Kaiju Jiu-Jitsu, we strive to create a positive and empowering
                community where students can develop their skills, build confidence,
                and forge lifelong friendships. Training here means becoming part of
                a team that supports your growth on and off the mats.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3">
                Our Core Values
              </h2>
              <ul className="space-y-3 text-sm text-neutral-300">
                <li>
                  <span className="font-semibold text-neutral-100">
                    Discipline:
                  </span>{" "}
                  Show up, put in the work, and stay consistent in your training.
                </li>
                <li>
                  <span className="font-semibold text-neutral-100">
                    Respect:
                  </span>{" "}
                  Treat training partners, coaches, and yourself with respect at all
                  times.
                </li>
                <li>
                  <span className="font-semibold text-neutral-100">
                    Perseverance:
                  </span>{" "}
                  Learn to push through challenges, setbacks, and plateaus-on and off
                  the mats.
                </li>
                <li>
                  <span className="font-semibold text-neutral-100">
                    Humility:
                  </span>{" "}
                  Stay open to learning, regardless of rank or experience.
                </li>
                <li>
                  <span className="font-semibold text-neutral-100">
                    Community:
                  </span>{" "}
                  Support and encourage one another so everyone can grow together.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-800 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 py-10 grid gap-10 lg:grid-cols-[minmax(0,_1.1fr)_minmax(0,_1fr)] items-start">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3">
                Meet Your Instructor
              </h2>
              <h3 className="text-base font-semibold text-neutral-200 mb-2">
                Coach Elijah - Head Instructor &amp; First Degree Black Belt
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 mb-4">
                Coach Elijah has dedicated many years to training and teaching
                Jiu-Jitsu. He combines deep technical knowledge with a calm,
                supportive coaching style that helps students feel comfortable while
                pushing their limits.
              </p>
              <p className="text-sm sm:text-base text-neutral-300 mb-4">
                He is committed to meeting each student where they are-whether they&apos;re
                stepping onto the mats for the first time, looking for a challenging
                new hobby, or preparing for competition.
              </p>
              <p className="text-sm sm:text-base text-neutral-300 mb-4">
                Classes under Coach Elijah focus on building strong fundamentals,
                smart strategy, and solid conditioning while reinforcing discipline,
                respect, and perseverance.
              </p>
            </div>

            <div>
              <div className="relative mx-auto h-64 w-full max-w-xs overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-br from-red-900/60 via-neutral-900 to-black">
                <div className="absolute inset-0 opacity-40 mix-blend-screen bg-[radial-gradient(circle_at_20%_0,_rgba(248,113,113,0.9),transparent_60%),_radial-gradient(circle_at_80%_100%,_rgba(239,68,68,0.8),transparent_55%)]" />
                <div className="relative h-full w-full flex flex-col items-center justify-center text-center px-6">
                  <div className="h-20 w-20 rounded-full border-2 border-red-400/70 bg-neutral-950/70 mb-4" />
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-300 mb-1">
                    Head Instructor
                  </div>
                  <div className="text-lg font-semibold mb-2">Coach Elijah</div>
                  <p className="text-xs text-neutral-200">
                    Black belt Jiu-Jitsu instructor dedicated to helping students of
                    all ages build confidence, skill, and resilience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-800 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 py-10 grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3">
                Who Trains at Kaiju Jiu-Jitsu?
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 mb-4">
                Our students include kids, teens, and adults from all walks of life:
                parents looking for a positive outlet for their children, busy
                professionals seeking stress relief and fitness, and dedicated
                practitioners preparing for competition.
              </p>
              <p className="text-sm sm:text-base text-neutral-300 mb-4">
                Whether you&apos;re brand new to martial arts or have years of
                experience, you&apos;ll find a place here. We tailor training
                opportunities for beginners, hobbyists, and serious competitors alike.
              </p>
            </div>
            <div>
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
                <h3 className="text-base font-semibold mb-2">
                  Ready to Join the Kaiju Family?
                </h3>
                <p className="text-sm text-neutral-300 mb-4">
                  Take the first step and experience a class at Kaiju Jiu-Jitsu. No
                  long-term commitment is required to start-just show up, train, and
                  see how Jiu-Jitsu can impact your life.
                </p>
                <a
                  href="/get-started"
                  className="inline-flex items-center justify-center rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 transition-colors"
                >
                  Get Started - Book Your First Class
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
