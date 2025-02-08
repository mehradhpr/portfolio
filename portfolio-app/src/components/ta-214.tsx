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
        <CardTitle className="flex justify-between items-center">Programming TA Leader
          <a target="_blank"><Link size={24}></Link></a>
        </CardTitle>
        <CardDescription className="flex flex-row justify-between">
        <span className="block">Summer 2023</span>
        <span className="block">University of Saskatchewan, SK</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Programming Principles</h3>
          <ul className="space-y-1 list-disc pl-5">
            <li>C Language, memory management, pointers, makefiles</li>
            <li>Linux operating system</li>
            <li>Bash scripting, version control with Git</li>
          </ul>
        </div>
        <p>
        Mentored 40+ students in a computer science course, teaching <strong>C programming</strong>, memory management, pointer
        manipulation, and <strong>Linux-based development workflows</strong>.
        </p>
      </CardContent>
    </Card>
  );
}
