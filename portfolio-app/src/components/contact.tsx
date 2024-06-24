/**
 * v0 by Vercel.
 * @see https://v0.dev/t/B1KyCjRTdlA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 p-4 md:p-8">
      <div className="flex items-center justify-center">
        <Image
          src="/about.png"
          width={380}
          height={380}
          alt="Profile"
          priority={true}
          className="aspect-square object-cover rounded-xl"
        />
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have a question or want to work together? Fill out the form below and we&apos;ll get
            back to you as soon as possible.
          </p>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Enter your message" className="min-h-[100px]" />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
