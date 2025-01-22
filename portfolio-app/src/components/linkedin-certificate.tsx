import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

export default function LinkedInCertificate() {
  return (
    <>
      <Card className="max-w-md mx-2 h-fit">
        <Image
          src={"/LinkedIn.png"}
          width={400}
          height={200}
          alt="Career Essentials Certificate"
          className="rounded-lg object-cover w-full aspect-[3/2]"
        />
        <CardHeader className="px-6 pt-6">
          <CardTitle>Career Essentials in Software Development Certificate</CardTitle>
          <CardDescription>2024 | www.linkedin.com</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col px-6 pb-6 space-y-4">
          <a className="w-full" target="_blank" href="https://www.linkedin.com/learning/certificates/95c58bd792953ae730ae35daa82644b28f6e93907046fea2647546b590c919f9"><Button size="sm" className="w-full">View the Original Document</Button></a>
          <p>The core concepts and structure of programming languages and learn how they are applied.
          <br></br>
          By <b>Microsoft</b> and <b>Linkedin</b></p>
        </CardContent>
      </Card>
    </>
  );
}
