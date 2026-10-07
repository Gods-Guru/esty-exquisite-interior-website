import {
  ArrowLink,
  Eyebrow,
  Footer,
  Header,
  ProjectCard,
  imageUrls,
} from "@/components/site";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-[720px] items-end overflow-hidden bg-[#3b2b0d] px-6 pb-16 pt-32 lg:min-h-[820px] lg:px-12 lg:pb-24">
          <img
            src={'/esty-hero.png'}
            alt="Warm modern living room with sculptural furniture"
            className="absolute inset-0 size-full object-cover opacity-70"
          />

          <div className="absolute inset-0 bg-[#211806]/35" />

          <div className="relative z-10 mx-auto w-full max-w-[1440px]">
            <p className="mb-7 max-w-xs text-[10px] uppercase tracking-[0.24em] text-[#f6c5af]">
              Interior architecture · Abuja
            </p>

            <h1 className="max-w-3xl font-serif text-5xl leading-[0.98] text-white sm:text-7xl lg:text-8xl">
              Spaces that feel
              <br />
              <em className="font-normal text-[#f6c5af]">like you.</em>
            </h1>

            <div className="mt-9 flex flex-wrap gap-7">
              <ArrowLink href="/services" light>
                View our work
              </ArrowLink>

              <ArrowLink href="/contact" light>
                Get in touch
              </ArrowLink>
            </div>
          </div>

          <span className="absolute bottom-7 right-6 text-[10px] uppercase tracking-[0.2em] text-white/60 lg:right-12">
            Scroll to explore ↓
          </span>
        </section>

        {/* Studio Section */}
        <section className="px-6 py-24 lg:px-12 lg:py-36 bg-[#ffffff]">
          <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12">
            <Eyebrow>01 / The studio</Eyebrow>

            <div className="md:col-span-7 md:col-start-4">
              <p className="font-serif text-4xl leading-[1.1] text-[#3b2b0d] lg:text-6xl">
                Thoughtful interiors, <em>quietly distinctive.</em>
              </p>

              <p className="mt-8 max-w-lg text-sm leading-7 text-[#3b2b0d]/65">
                Esty is an interior design studio creating warm, considered
                spaces for living, working and gathering. We bring together
                natural materials, honest details and a clear point of view.
              </p>

              <div className="mt-8">
                <ArrowLink href="/about">Meet the studio</ArrowLink>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work Section */}
        <section className="bg-[#f6c5af]/30 px-6 py-24 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <Eyebrow>02 / Selected work</Eyebrow>

                <h2 className="font-serif text-4xl text-[#3b2b0d] lg:text-6xl">
                  A few favourites.
                </h2>
              </div>

              <div className="hidden sm:block">
                <ArrowLink href="/services">All projects</ArrowLink>
              </div>
            </div>

            <div className="grid gap-10 md:grid-cols-3">
              <ProjectCard
                src={"/int1.jpeg"}
                title="Park Avenue"
                category="Residential · New York"
              />

              <ProjectCard
                src={"/int2.jpeg"}
                title="House of Light"
                category="Residential · Hudson Valley"
              />

              <ProjectCard
                src={"/int3.jpeg"}
                title="The Still House"
                category="Hospitality · Brooklyn"
              />
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="px-6 py-24 lg:px-12 lg:py-36">
          <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12">
            <Eyebrow>03 / Our approach</Eyebrow>

            <div className="md:col-span-8 md:col-start-4">
              <h2 className="font-serif text-4xl leading-[1.08] text-[#fff] lg:text-6xl">
                Good design is felt before it is noticed.
              </h2>

              <div className="mt-12 grid gap-8 border-t border-[#c29071]/20 pt-6 sm:grid-cols-3">
                <div>
                  <p className="font-serif text-2xl text-[#c29071]">01</p>

                  <p className="mt-4 text-sm leading-6 text-[#c29071]/65">
                    Listen closely to how you want your space to live.
                  </p>
                </div>

                <div>
                  <p className="font-serif text-2xl text-[#c29071]">02</p>

                  <p className="mt-4 text-sm leading-6 text-[#c29071]/65">
                    Make a thoughtful plan for every material and detail.
                  </p>
                </div>

                <div>
                  <p className="font-serif text-2xl text-[#c29071]">03</p>

                  <p className="mt-4 text-sm leading-6 text-[#c29071]/65">
                    Bring it all together with warmth, clarity and care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-[#3b2b0d] px-6 py-24 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1440px] text-center">
            <Eyebrow>Let&apos;s make room</Eyebrow>

            <h2 className="mx-auto max-w-3xl font-serif text-5xl leading-[1.05] text-white lg:text-7xl">
              Have a space in mind?
            </h2>

            <div className="mt-10">
              <ArrowLink href="/contact" light>
                Start a conversation
              </ArrowLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}