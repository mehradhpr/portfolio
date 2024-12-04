import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function TA142() {
  return (
    <Card className="max-w-md mx-2 h-fit">
      <Image
        src="/ta-142.jpg"
        width={600}
        height={300}
        alt="University of Saskatchewan, May to August 2023'"
        className="rounded-t-lg object-cover w-full aspect-[2/1]"
      />
      <CardHeader className="px-6 pt-6">
        <CardTitle>Teaching Assistant | CMPT 142</CardTitle>
        <CardDescription>Fall 2024 | University of Saskatchewan</CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Computer Science for Engineers</h3>
          <ul className="space-y-1 list-disc pl-5">
            <li>Python</li>
            <li>Matplotlib</li>
            <li>Data Structures</li>
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
