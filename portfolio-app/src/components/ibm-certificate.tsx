import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function SQL() {
  return (
    <Card className="max-w-md mx-2 h-fit">
      <Image
        src="/sql.png"
        width={600}
        height={300}
        alt="IBM SQL Certificate"
        className="rounded-lg object-cover w-full aspect-[2/1]"
      />
      <CardHeader className="px-6 pt-6">
        <CardTitle>IBM SQL Certificate</CardTitle>
        <CardDescription>2022 | www.edx.org</CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-6 space-y-4">
        <p>
          Passed the exam and obtaied the IBM SQL Certificate on EdX, subjects covered were
          structured query language, relational databases, and IBM cloud data services.
        </p>
      </CardContent>
    </Card>
  );
}
