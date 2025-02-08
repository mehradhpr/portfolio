'use client'

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send("service_00684bv", "template_d6lxr7y", {from_name: formData.name, from_company: formData.company, from_email: formData.email, message: formData.message}, "M-2x4Hijy0thAbE1C")
      .then(() => {
        setStatus("Message Sent! ✅, I will get back to you as soon as possible.");
        setFormData({ name: "", company: "", email: "", message: "" });
      })
      .catch((error) => setStatus("Failed to send. Try again! ❌" + error.text));
  };

  return (
    <div className="w-full py-16 md:py-24 lg:py-32 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 p-4 md:p-8">
      <div className="flex items-center justify-center">
        <Image src="/about.png" width="520" height="100" alt="Profile" priority className="aspect-square object-cover rounded-3xl" />
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" name="company" value={formData.company} onChange={handleChange} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
          {status && <p className="text-center">{status}</p>}
        </form>
      </div>
    </div>
  );
}
