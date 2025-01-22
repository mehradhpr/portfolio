import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Link } from "lucide-react";
import Image from "next/image";

export default function TA142() {
  return (
    <Card className="max-w-md mx-2 h-fit">
      <Image
        src="/TA_CMPT142.png"
        width={600}
        height={300}
        alt="University of Saskatchewan, May to August 2023'"
        className="rounded-t-lg object-cover w-full aspect-[2/1]"
      />
      <CardHeader className="px-6 pt-6">
        <div className="flex justify-between space-x-2">
        <CardTitle>Teaching Assistant | CMPT 142</CardTitle>
        <a href="https://catalogue.usask.ca/CMPT-142" className="text-sm hover:underline">
          <Link size="24" />
        </a>
        </div>
        <CardDescription>Fall 2024 | University of Saskatchewan</CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Computer Science for Engineers</h3>
            <a href="https://www.cs.usask.ca/people/faculty%20profiles/jeff-long.php" className="text-sm hover:underline">
              Under Professor Jeffery Long
            </a>
          <ul className="space-y-1 list-disc pl-5">
            <li>Python & Matplotlib</li>
            <li>Arrays, lists and nodes</li>
            <li>Algorithms and Recursion</li>
          </ul>
        </div>
        <p>
          Assisted over <b>20 students</b> in achieving a 50% improvement in their grades.
          Facilitated learning for freshman engineers by teaching Python programming and data
          visualization techniques.
        </p>
      </CardContent>
    </Card>
  );
}
