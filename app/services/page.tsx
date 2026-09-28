import {
  ArrowLink,
  Eyebrow,
  Footer,
  Header,
  ProjectCard,
  imageUrls,
} from "@/components/site";

export default function Services() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-[#fff]/30 px-6 pb-20 pt-44 lg:px-12 lg:pb-28">
          <div className="mx-auto max-w-[1440px]">
            <Eyebrow>Services & projects</Eyebrow>

            <h1 className="max-w-5xl font-serif text-6xl leading-[.98] text-[#3b2b0d] lg:text-8xl">
              Designed around
              <br />
              <em>your everyday.</em>
            </h1>

            <p className="mt-8 max-w-md text-sm leading-7 text-[#fff]/65">
              From a single room to a complete interior, we create spaces
              that are deeply personal and beautifully resolved.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-6 py-24 lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12">
            <Eyebrow>What we do</Eyebrow>

            <div className="md:col-span-8 md:col-start-4">
              <div className="divide-y divide-[#3b2b0d]/20 border-t border-[#3b2b0d]/20">
                {[
                  [
                    "01",
                    "Residential interiors",
                    "Full-service design for homes with soul and staying power.",
                  ],
                  [
                    "02",
                    "Commercial interiors",
                    "Thoughtful environments for hospitality, work and gathering.",
                  ],
                  [
                    "03",
                    "Space planning",
                    "Clear, considered layouts that make every square foot count.",
                  ],
                  [
                    "04",
                    "Styling & consultation",
                    "The finishing layer — objects, art, colour and considered edits.",
                  ],
                ].map(([num, title, desc]) => (
                  <div
                    key={num}
                    className="grid gap-4 py-7 sm:grid-cols-[80px_1fr_1.1fr]"
                  >
                    <span className="font-serif text-2xl text-[#c29071]">
                      {num}
                    </span>

                    <h2 className="font-serif text-3xl text-[#3b2b0d]">
                      {title}
                    </h2>

                    <p className="text-sm leading-6 text-[#c29071]/85">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work Section */}
        <section className="bg-[#3b2b0d] px-6 py-24 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1440px]">
            <Eyebrow>Selected work</Eyebrow>

            <h2 className="mb-12 font-serif text-5xl text-white lg:text-7xl">
              Rooms with a rhythm.
            </h2>

            <div className="grid gap-12 md:grid-cols-3">
              <ProjectCard
                src={'/image3.jpg'}
                title="Park Avenue"
                category="Residential · New York"
              />

              <ProjectCard
                src={'/image2.jpg'}
                title="House of Light"
                category="Residential · Hudson Valley"
              />

              <ProjectCard
                src={'/image1.jpg'}
                title="The Still House"
                category="Hospitality · Brooklyn"
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-6 py-24 text-center lg:px-12">
          <Eyebrow>Have a project?</Eyebrow>

          <h2 className="mx-auto max-w-xl font-serif text-5xl text-[#3b2b0d]">
            We&apos;d love to hear about it.
          </h2>

          <div className="mt-8">
            <ArrowLink href="/contact">Start a conversation</ArrowLink>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}