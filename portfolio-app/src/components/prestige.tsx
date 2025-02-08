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
        <CardTitle className="flex flex-row justify-between items-center">
          <p>Full-Stack Software Engineer</p>
          <a target="_blank" href={"https://www.prestigelock.ca"}>
            <Link />
          </a>
        </CardTitle>
        <CardDescription className="flex flex-row justify-between">
        <span className="block">Sep. 2024 - Jan. 2025</span>
        <span className="block">Prestige, SK, Canada</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-6 space-y-4">
        <div className="space-y-2">
          <ul className="space-y-1 list-disc pl-5">
            <li>
            Designed and engineered a full-stack job proposals feature in a startup environment, utilizing <strong>React, TypeScript,
            and the Next.js</strong> framework for the front end, and <strong>Express.js</strong> for the back end, which effectively reduced
            proposal creation time by 30% and streamlined the process.
            </li>
            <li>
            Built <strong>5+ reusable RESTful APIs using Express.js, JWT, and CORS</strong>, improving client-server response time
            by 25%. Ensured robustness with thorough endpoint validation using <strong>Jest unit tests and Postman</strong>.
            </li>
            <li>Revamped <strong>10+ React.js components with ShadCN</strong>, reducing UI-related user errors by 50%.</li>
            <li>Integrated <strong>CI/CD pipelines</strong> by GitHub Actions, and collaborated in <strong>Agile workflows</strong>.</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
