"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X, Camera, Mail, Phone } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services & Projects" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 lg:px-12">
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="flex size-9 items-center justify-center border border-white/50 text-sm text-white">
            E
          </span>

          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white">
            Esty Exquisite
            <br />
            Interior Designs
          </span>
        </Link>

        <nav
          className="hidden items-center gap-9 md:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] uppercase tracking-[0.16em] text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden border border-white/60 px-5 py-3 text-[10px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-[#3b2b0d] md:block"
        >
          Start a project
        </Link>

        <button
          className="text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav
          className="flex flex-col gap-6 bg-[#3b2b0d] px-6 pb-8 pt-4 md:hidden"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-xs uppercase tracking-[0.18em] text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#3b2b0d] px-6 py-14 text-white lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="mb-6 text-[11px] uppercase tracking-[0.2em] text-[#f6c5af]">
            Esty Exquisite Interior Designs
          </p>

          <p className="max-w-sm font-serif text-2xl leading-tight">
            Spaces with a sense of place, made for the way you live.
          </p>
        </div>

        <div>
          <p className="mb-5 text-[10px] uppercase tracking-[0.18em] text-white/50">
            Explore
          </p>

          <div className="flex flex-col gap-3 text-sm text-white/80">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-5 text-[10px] uppercase tracking-[0.18em] text-white/50">
            Connect
          </p>

          <div className="flex flex-col gap-3 text-sm text-white/80">
            <a href="mailto:aigbedionesther97@gmail.com">
              aigbedionesther97@gmail.com
            </a>

            <a href="tel:+2349139688339">+234 913 9688 339</a>

            <a href="#instagram" className="flex items-center gap-2">
              Instagram
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1440px] justify-between border-t border-white/15 pt-5 text-[10px] uppercase tracking-[0.14em] text-white/45">
        <span>© 2026 Esty Exquisite Interior Designs</span>
        <span>Abuja · Everywhere</span>
      </div>
    </footer>
  );
}

export function Eyebrow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.24em] text-[#c29071]">
      {children}
    </p>
  );
}

export function ArrowLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 border-b pb-3 text-[11px] uppercase tracking-[0.18em] transition-colors ${
        light
          ? "border-white/50 text-white hover:border-white"
          : "border-[#3b2b0d]/40 text-[#3b2b0d] hover:border-[#3b2b0d]"
      }`}
    >
      {children}

      <ArrowUpRight
        size={15}
        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </Link>
  );
}

export const imageUrls = {
  living: "/esty-hero.png",
  dining: "/int1.jpeg",
  detail: "/int2.jpeg",
  bedroom: "/int3.jpeg",
};

export function ContactForm() {
  return (
    <form
      className="flex flex-col gap-7"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid gap-7 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.16em] text-[#3b2b0d]/70">
          Name

          <input
            required
            name="name"
            className="border-b border-[#3b2b0d]/25 bg-transparent py-3 text-base normal-case tracking-normal outline-none focus:border-[#3b2b0d]"
          />
        </label>

        <label className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.16em] text-[#3b2b0d]/70">
          Email

          <input
            required
            type="email"
            name="email"
            className="border-b border-[#3b2b0d]/25 bg-transparent py-3 text-base normal-case tracking-normal outline-none focus:border-[#3b2b0d]"
          />
        </label>

        <label className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.16em] text-[#3b2b0d]/70">
          Phone

          <input
            name="phone"
            className="border-b border-[#3b2b0d]/25 bg-transparent py-3 text-base normal-case tracking-normal outline-none focus:border-[#3b2b0d]"
          />
        </label>

        <label className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.16em] text-[#3b2b0d]/70">
          Project type

          <select
            name="type"
            className="border-b border-[#3b2b0d]/25 bg-transparent py-3 text-base normal-case tracking-normal outline-none"
          >
            <option>Residential interior</option>
            <option>Commercial interior</option>
            <option>Styling & consultation</option>
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.16em] text-[#3b2b0d]/70">
        Tell us about your project

        <textarea
          required
          name="message"
          rows={4}
          className="resize-none border-b border-[#3b2b0d]/25 bg-transparent py-3 text-base normal-case tracking-normal outline-none focus:border-[#3b2b0d]"
        />
      </label>

      <button
        type="submit"
        className="mt-2 self-start bg-[#3b2b0d] px-7 py-4 text-[10px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-black"
      >
        Send enquiry
      </button>
    </form>
  );
}

export function ContactDetails() {
  return (
    <div className="flex flex-col gap-5 text-sm text-[#3b2b0d]/75">
      <a
        className="flex items-center gap-3"
        href="mailto:aigbedionesther97@gmail.com"
      >
        <Mail size={16} />
        aigbedionesther97@gmail.com
      </a>

      <a
        className="flex items-center gap-3"
        href="tel:+2349139688339"
      >
        <Phone size={16} />
        +234 913 968 8339
      </a>

      <a className="flex items-center gap-3" href="#instagram">
        <Camera size={16} />
        @estyinteriordesigns
      </a>
    </div>
  );
}

export function ProjectCard({
  src,
  title,
  category,
  className = "",
}: {
  src: string;
  title: string;
  category: string;
  className?: string;
}) {
  return (
    <article className={className}>
      <div className="group overflow-hidden">
        <img
          src={src}
          alt={title}
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex justify-between gap-4 pt-4">
        <div>
          <h3 className="font-serif text-xl text-[#fff]">
            {title}
          </h3>

          <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#c29071]/55">
            {category}
          </p>
        </div>

        <span className="text-xs text-[#c29071]">
          {title === "Park Avenue"
            ? "01"
            : title === "House of Light"
              ? "02"
              : "03"}
        </span>
      </div>
    </article>
  );
}