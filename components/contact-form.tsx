"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const userSchema = z.object({
  firstName: z.string().min(1, { message: "Please enter a first name" }),
  lastName: z.string().min(1, { message: "Please enter a last name" }),
  email: z
    .string()
    .min(1, { message: "Please enter an email address" })
    .email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Please enter a subject" }),
  message: z.string().min(1, { message: "Please enter a message" }),
  serverError: z.void(),
});
type User = z.infer<typeof userSchema>;

export function ContactForm() {
  const successNotify = () =>
    toast("Thank you! Your message has been sent successfully.", {
      icon: "🔥",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<User>({
    resolver: zodResolver(userSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data: User) => {
    const templateParams = {
      from_name: `${data.firstName}&nbsp;${data.lastName}`,
      from_email: data.email,
      to_name: "Natnael Haile",
      subject: data.subject,
      message: data.message,
    };
    emailjs
      .send(
        "service_94qhwmk",
        "template_18f6zsf",
        templateParams,
        "user_eZV3e0rLSAkwzx3Pvay2V"
      )
      .then(() => {
        reset();
        successNotify();
      })
      .catch(() => {
        setError("serverError", {
          type: "server",
          message: "Unable to send message. Please try again.",
        });
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="name" className="font-mono">
            First Name
          </Label>
          <Input
            id="name"
            placeholder="First name"
            {...register("firstName")}
            required
            className="bg-background/50 backdrop-blur-sm"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="name" className="font-mono">
            Last Name
          </Label>
          <Input
            id="name"
            placeholder="Last name"
            {...register("lastName")}
            required
            className="bg-background/50 backdrop-blur-sm"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email" className="font-mono">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Your email"
            {...register("email")}
            required
            className="bg-background/50 backdrop-blur-sm"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="subject" className="font-mono">
            Subject
          </Label>
          <Input
            id="subject"
            placeholder="Subject"
            {...register("subject")}
            required
            className="bg-background/50 backdrop-blur-sm"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="message" className="font-mono">
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Your message"
            {...register("message")}
            rows={5}
            required
            className="bg-background/50 backdrop-blur-sm"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full font-mono"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
