import Degree from "@/components/degree";
import Hero from "@/components/hero";
import SQL from "@/components/ibm-certificate";
import LinkedInCertificate from "@/components/linkedin-certificate";
import Prestige from "@/components/prestige";
import TA142 from "@/components/ta-142";
import TA214 from "@/components/ta-214";
import Image from "next/image";
import Project from "./projects/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container mx-auto px-2 md:px-6 -mb-10">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Experience & Education</h1>
        <p className="mt-4 text-muted-foreground md:text-xl">
          Check out my qualifications and past experiences.
        </p>
      </div>
        <div className="sm:grid flex flex-col items-center md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Prestige />
          <Degree />
          <TA142 />
          <SQL />
          <TA214 />
          <LinkedInCertificate />
          <
        </div>
      </div>
      <Project></Project>
    </main>
  );
}
