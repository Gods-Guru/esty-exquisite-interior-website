import {
  ArrowLink,
  Eyebrow,
  Footer,
  Header,
  imageUrls,
} from "@/components/site";

export default function About() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-[#3b2b0d] px-6 pb-24 pt-44 text-white lg:px-12 lg:pb-36">
          <div className="mx-auto max-w-[1440px]">
            <Eyebrow>About Esty</Eyebrow>

            <h1 className="max-w-4xl font-serif text-6xl leading-[.98] lg:text-8xl">
              A studio for{" "}
              <em className="font-normal text-[#f6c5af]">
                living well.
              </em>
            </h1>
          </div>
        </section>

        {/* Studio Introduction */}
        <section className="px-6 py-24 lg:px-12 lg:py-36">
          <div className="mx-auto grid max-w-[1440px] gap-14 md:grid-cols-12">
            <div className="md:col-span-5">
              <img
                src={'/esty-hero.png'}
                alt="Textural neutral interior with a curved sofa"
                className="w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center md:col-span-6 md:col-start-7">
              <Eyebrow>Our point of view</Eyebrow>

              <h2 className="font-serif text-4xl leading-tight text-[#3b2b0d] lg:text-6xl">
                The spaces we make are calm, but never quiet.
              </h2>

              <p className="mt-8 text-sm leading-7 text-[#3b2b0d]/65">
                We believe interiors should have a point of view and a pulse.
                Esty brings a refined, architectural eye to the everyday,
                balancing clean lines with tactile materials, and restraint
                with a little surprise.
              </p>

              <p className="mt-5 text-sm leading-7 text-[#3b2b0d]/65">
                From first sketch to final object, we work collaboratively
                and with intention. Every decision is made to support the
                way a space is lived in.
              </p>
            </div>
          </div>
        </section>

        {/* The Esty Way */}
        <section className="bg-[#f6c5af]/30 px-6 py-24 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1440px]">
            <Eyebrow>The Esty way</Eyebrow>

            <div className="grid gap-12 border-t border-[#3b2b0d]/20 pt-8 md:grid-cols-3">
              <div>
                <h3 className="font-serif text-3xl text-[#3b2b0d]">
                  Start with listening.
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#3b2b0d]/65">
                  Your rituals, rhythms and references are the real brief.
                  We begin by understanding what makes a place yours.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-3xl text-[#3b2b0d]">
                  Edit with purpose.
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#3b2b0d]/65">
                  We value considered choices over more choices. The result
                  is a home that feels collected, not decorated.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-3xl text-[#3b2b0d]">
                  Make it last.
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#3b2b0d]/65">
                  Beautiful materials, thoughtful craftsmanship and a
                  little room to evolve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-6 py-24 text-center lg:px-12 lg:py-32">
          <Eyebrow>Work with us</Eyebrow>

          <h2 className="mx-auto max-w-2xl font-serif text-5xl text-[#3b2b0d] lg:text-7xl">
            Let&apos;s make something lasting.
          </h2>

          <div className="mt-10">
            <ArrowLink href="/contact">Get in touch</ArrowLink>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}