import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <div className="container mx-auto px-2 py-20 md:px-6 lg:py-32">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h1>
        <p className="mt-4 text-muted-foreground md:text-xl">
          Check out some of my latest projects.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Sask AI</CardTitle>
            <CardDescription>Fine Tuned Web AI Chatbot for Usask</CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    src="/projects/saskai/saskai.png"
                    alt="University Campus"
                    width={600}
                    height={600}
                    className="mx-auto overflow-hidden rounded-lg object-cover sm:w-full"
                    priority
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
            <p>
              A full-stack web-based AI chatbot to assist students with their academic inquiries
              from the University of Saskatchewan.
            </p>
            <ul className="space-y-1 list-disc pl-5">
              <li>React, Tailwind, Typescript</li>
              <li>Framework: Next.js</li>
              <li>Open AI GPT-3 API</li>
            </ul>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Gate Keeper</CardTitle>
            <CardDescription>Web Authentication Solution</CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    src="/projects/gate-keeper/gk.gif"
                    alt="University Campus"
                    width={600}
                    height={600}
                    className="mx-auto overflow-hidden rounded-lg object-cover sm:w-full"
                    priority
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
            <p>
              A full-stack Dynamic Role-based Access Control (RBAC) system for web applications.
            </p>
            <ul className="space-y-1 list-disc pl-5">
              <li>React, Tailwind, Typescript, Prisma, PostgreSQL, Neon.tech</li>
              <li>Framework: Next.js</li>
              <li>JSON Web Tokens (JWT) as HTTP-only Cookies</li>
              <li>Password Hashing with bcrypt</li>
            </ul>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Menu Search Optimization</CardTitle>
            <CardDescription>UX/UI Survey Research on Optimal Menu Depth</CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    src="/projects/menu-search/mso.gif"
                    alt="University Campus"
                    width={600}
                    height={600}
                    className="mx-auto overflow-hidden rounded-lg object-cover sm:w-full"
                    priority
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/projects/menu-search/mso1.png"
                    alt="University Campus"
                    width={600}
                    height={600}
                    className="mx-auto overflow-hidden rounded-lg object-cover sm:w-full"
                    priority
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <p>
              Research project to find the optimal depth of menu systems to reduce visual search
              time.
            </p>
            <ul className="space-y-1 list-disc pl-5">
              <li>Conducted a survey with a few participants</li>
              <li>Implemented with Processing</li>
              <li>Five different menu depths and configurations</li>
              <li>Data analysis via Python and matplotlib</li>
            </ul>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Chat Cafe</CardTitle>
            <CardDescription>Channel-based chat website</CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    src="/projects/chat-cafe/cc1.png"
                    alt="University Campus"
                    width={600}
                    height={600}
                    className="mx-auto overflow-hidden rounded-lg object-cover sm:w-full"
                    priority
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/projects/chat-cafe/cc2.png"
                    alt="University Campus"
                    width={600}
                    height={600}
                    className="mx-auto overflow-hidden rounded-lg object-cover sm:w-full"
                    priority
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/projects/chat-cafe/cc3.png"
                    alt="University Campus"
                    width={600}
                    height={600}
                    className="mx-auto overflow-hidden rounded-lg object-cover sm:w-full"
                    priority
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <p>
              A full-stack web-based platform for creating channels and engaging in real-time
              discussions featuring likes, dislikes, replies and search functionalities.
            </p>
            <ul className="space-y-1 list-disc pl-5">
              <li>Node.js, React, MySQL</li>
              <li>RESTful principles</li>
              <li>Responsive and dynamic</li>
            </ul>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Morax Calendar</CardTitle>
            <CardDescription>Planner and Productivity</CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    src="/projects/morax-calendar/mc1.png"
                    alt="University Campus"
                    width={600}
                    height={600}
                    className="mx-auto overflow-hidden rounded-lg object-cover sm:w-full"
                    priority
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/projects/morax-calendar/mc4.png"
                    alt="University Campus"
                    width={600}
                    height={600}
                    className="mx-auto overflow-hidden rounded-lg object-cover sm:w-full"
                    priority
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <p>
              A Desktop application for scheduling, setting up meetings and tracking productivity.
            </p>
            <ul className="space-y-1 list-disc pl-5">
              <li>Java, JavaFX, MySQL</li>
              <li>Model-View-Controller Architecture</li>
              <li>Teamwork and Agile Methodologies</li>
              <li>Object Oriented Design</li>
            </ul>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </div>
  );
}
