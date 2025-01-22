import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Degree() {
  return (
    <Card className="max-w-md mx-2 h-fit">
      <Image
        src="/usask.jpg"
        alt="University Campus"
        width={600}
        height={300}
        className="rounded-t-lg object-cover w-full h-48"
      />
      <CardHeader className="px-6 pt-6">
        <CardTitle>Bachelor of Computer Science</CardTitle>
        <CardDescription>2020 to 2024 | A Member of U15</CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-6 space-y-4">
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">B.Sc. from University of Saskatchewan</h4>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center gap-2">
              <AwardIcon className="w-5 h-5 text-primary" />
              <span>Graduated with Great Distinction</span>
            </li>
            <li className="flex items-center gap-2">
              <GraduationCapIcon className="w-5 h-5 text-primary" />
              <span>Four-year Degree</span>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <li className="flex items-center gap-2">
            <span className=" text-sm text-muted-foreground">CMPT370</span>
            <span className="text-foreground">Intermediate Software Engineering</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">CMPT353</span>
            <span className="text-foreground">Full Stack Web Programming</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">CMPT360</span>
            <span className="text-foreground">Algorithm Design and Analysis</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">CMPT332</span>
            <span className="text-foreground">Operating Systems Concepts</span>
          </li>
        </div>
      </CardContent>
    </Card>
  );
}

function AwardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  );
}

function GraduationCapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}
