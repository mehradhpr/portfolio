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
    <div className="container mx-auto px-4 py-20 md:px-6 lg:py-32">
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
                <CarouselItem></CarouselItem>
                <CarouselItem>...</CarouselItem>
                <CarouselItem>...</CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
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
                    width={1000}
                    height={1000}
                    className="rounded-lg w-full h-[280px]"
                  />
                </CarouselItem>
                <CarouselItem>...</CarouselItem>
                <CarouselItem>...</CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
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
                    width={800}
                    height={800}
                    className="rounded-lg w-full h-[280px]"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/projects/menu-search/mso1.png"
                    alt="University Campus"
                    width={800}
                    height={800}
                    className="rounded-lg w-full h-[280px]"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
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
                    width={800}
                    height={800}
                    className="rounded-lg w-full h-[200px]"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/projects/chat-cafe/cc2.png"
                    alt="University Campus"
                    width={800}
                    height={800}
                    className="rounded-lg w-full h-[150px]"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/projects/chat-cafe/cc3.png"
                    alt="University Campus"
                    width={800}
                    height={800}
                    className="rounded-lg w-full h-[250px]"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
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
                    width={800}
                    height={800}
                    className="rounded-lg w-full h-[250px]"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/projects/morax-calendar/mc3.png"
                    alt="University Campus"
                    width={800}
                    height={800}
                    className="rounded-lg w-full h-[250px]"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/projects/morax-calendar/mc4.png"
                    alt="University Campus"
                    width={800}
                    height={800}
                    className="rounded-lg w-full h-[250px]"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </div>
  );
}
