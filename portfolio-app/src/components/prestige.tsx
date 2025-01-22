import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Link } from "lucide-react";
import Image from "next/image";

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
            <Link />
          </a>
        </CardTitle>
        <CardDescription>Fall 2024 | Saskatoon, SK | 4 Months Internship</CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Prestige Lock and Door | Startup</h3>
          <ul className="space-y-1 list-disc pl-5">
            <li>
              Developed a job proposals module in a startup environment using Agile methodologies to improve operational efficiency by 30%.
            </li>
            <li>
              Collaborated with cross-functional teams to integrate backend services via Next.js API calls and Airtable, ensuring seamless data retrieval.
            </li>
            <li>Built dynamically updated field components for certain database tables.</li>
            <li>Stack: Typescript, React.js, Next.js, ShadCN, Express.js, Airtable, Softr</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
