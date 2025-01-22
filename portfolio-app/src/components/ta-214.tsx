import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Link } from "lucide-react";
import Image from "next/image";

export default function TA214() {
  return (
    <Card className="max-w-md mx-2 h-fit">
      <Image
        src="/ta.jpg"
        width={600}
        height={300}
        alt="University of Saskatchewan, May to August 2023'"
        className="rounded-t-lg object-cover w-full aspect-[2/1]"
      />
      <CardHeader className="px-6 pt-6">
        <CardTitle className="flex justify-between items-center">Teaching Assistant | CMPT 214
          <a target="_blank"><Link size={24}></Link></a>
        </CardTitle>
        <CardDescription>Summer 2023 | University of Saskatchewan</CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Programming Principles and Practice</h3>
          <ul className="space-y-1 list-disc pl-5">
            <li>C Language, memory management, pointers, makefiles</li>
            <li>Linux operating system</li>
            <li>Bash scripting, version control with Git</li>
          </ul>
        </div>
        <p>
          Served as a teaching assistant leader, introduced students to Linux-based development workflows and debugging techniques. Led weekly discussion sections, addressed student
          inquiries, and provided one-on-one tutoring.
        </p>
      </CardContent>
    </Card>
  );
}
