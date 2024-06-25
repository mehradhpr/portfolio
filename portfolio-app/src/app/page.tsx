import Degree from "@/components/degree";
import Hero from "@/components/hero";
import SQL from "@/components/sql";
import TA from "@/components/ta";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container mx-auto py-12 px-2 md:px-6 bg-">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Degree />
          <TA />
          <SQL />
        </div>
      </div>
    </main>
  );
}
