import {
  ContactDetails,
  ContactForm,
  Eyebrow,
  Footer,
  Header,
  imageUrls,
} from "@/components/site";

export default function Contact() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-[#3b2b0d] px-6 pb-24 pt-44 text-white lg:px-12 lg:pb-32">
          <div className="mx-auto max-w-[1440px]">
            <Eyebrow>Contact</Eyebrow>

            <h1 className="max-w-4xl font-serif text-6xl leading-[.98] lg:text-8xl">
              Let&apos;s talk about
              <br />
              <em className="font-normal text-[#f6c5af]">your space.</em>
            </h1>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-6 py-24 lg:px-12 lg:py-36">
          <div className="mx-auto grid max-w-[1440px] gap-16 md:grid-cols-12">
            {/* Contact Information */}
            <div className="md:col-span-4">
              <Eyebrow>Start here</Eyebrow>

              <h2 className="font-serif text-4xl leading-tight text-[#3b2b0d]">
                Tell us a little about what you&apos;re imagining.
              </h2>

              <p className="mt-6 text-sm leading-7 text-[#3b2b0d]/65">
                Whether you&apos;re starting from scratch or ready for a
                considered edit, we&apos;ll get back to you within three
                working days.
              </p>

              <div className="mt-10">
                <ContactDetails />
              </div>

              <div className="mt-16 hidden md:block">
                <img
                  src={'/esty-hero.png'}
                  alt="Calm bedroom interior with warm linen textures"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-7 md:col-start-6">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}