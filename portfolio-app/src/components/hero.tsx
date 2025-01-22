import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-12 lg:py-16">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <Image
          src="/hero.png"
          width="550"
          height="550"
          alt="Developer"
          priority={true}
          className="mx-auto overflow-hidden rounded-3xl object-cover sm:w-full"
        />
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Mehrad Hassanpour
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Full-stack developer with a bachelor&apos;s degree in computer science, building
              software solutions for individuals and businesses.
            </p>
          </div>
          <div className="flex gap-5">
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 min-w-fit"
              prefetch={false}
            >
              Get in Touch
            </Link>
            <Link
              href="/projects"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-full"
              prefetch={false}
            >
              See Projects
            </Link>
          </div>
          <div className="flex flex-row sm:gap-10 sm:pt-10 pt-2 justify-start gap-4">
            <a target="_blank" href="https://github.com/mehradhpr">
              <Github className="text-primary lg:size-24 size-10" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/mehradhpr/">
              <Linkedin className="text-primary lg:size-24 size-10" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
