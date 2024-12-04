import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Prestige() {
  return (
    <Card className="max-w-md mx-2 h-fit">
      <Image
        src="/prestige.png"
        width={400}
        height={300}
        alt="University of Saskatchewan, May to August 2023'"
        className="rounded-t-lg object-cover w-full aspect-[5/1]"
      />
      <CardHeader className="px-6 pt-6">
        <CardTitle className="flex flex-row justify-between">
          <p>Full-Stack Developer</p>
          <a target="_blank" href={"https://www.prestigelock.ca"}>
            <ExternalLink />
          </a>
        </CardTitle>
        <CardDescription>Sep 2024 to Present | Saskatoon, SK</CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Prestige Lock and Door | Startup</h3>
          <ul className="space-y-1 list-disc pl-5">
            <li>
              Worked in a small team to develop reusable software for inventory and employee
              management.
            </li>
            <li>
              Developed a job proposals module to increase efficiency and reduce redundancies of
              reoccurring details as much as possible.
            </li>
            <li>Built dynamically updated field components for certain database tables.</li>
            <li>TypeScript, React.js, Airtable, Next.js, ShadCN, Express.js</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
