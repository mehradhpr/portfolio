import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
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
          <CardTitle>Career Essentials in Software Development</CardTitle>
        </CardHeader>
        <CardContent className="px-6 pb-6 space-y-4">
          The core concepts and structure of programming languages and learn how they are applied.
          <br></br>
          By <b>Microsoft</b> and <b>Linkedin</b>
        </CardContent>
      </Card>
    </>
  );
}
