/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zKNdQ55TjWC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
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
              Accomplished developer with a Bachelor&apos;s degree in Computer Science, specializing
              in modern web technologies and AI-driven solutions.
            </p>
          </div>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
