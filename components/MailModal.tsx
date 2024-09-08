"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import { cn } from "@/utils/cn";
import { Textarea } from "./ui/Textarea";
import { sendEmail } from "@/app/actions";
import { useModal } from "@/components/ui/AnimatedModal";

const Modal = dynamic(
  () => import("@/components/ui/AnimatedModal").then((mod) => mod.Modal),
  { ssr: false }
);

const ModalBody = dynamic(
  () => import("@/components/ui/AnimatedModal").then((mod) => mod.ModalBody),
  { ssr: false }
);

const ModalContent = dynamic(
  () => import("@/components/ui/AnimatedModal").then((mod) => mod.ModalContent),
  { ssr: false }
);

const ModalTrigger = dynamic(
  () => import("@/components/ui/AnimatedModal").then((mod) => mod.ModalTrigger),
  { ssr: false }
);

const MailModel = () => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const { setOpen } = useModal();

  const handleSubmit = async (formData: FormData) => {
    setIsSending(true);
    const response = await sendEmail(formData);
    if (response.ok) {
      setIsSending(false);
      setOpen(false); // Close the modal
    } else {
      setIsSending(false);
      console.error("Error sending email:", response.message);
    }
  };

  return (
    <>
      <ModalTrigger>
        <MagicButton
          title={"Let's get in touch"}
          icon={<FaLocationArrow />}
          position="right"
        />
      </ModalTrigger>
      <ModalBody>
        <div className="w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input dark:bg-black bg-gradient-to-r from-[#04071D] to-[#0C0E23]">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Let&apos;s Geek Out Together!
          </h2>

          <form
            className="my-8"
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              await handleSubmit(formData);
            }}
          >
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Tyler"
                  type="text"
                  required
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Durden"
                  type="text"
                  required
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                placeholder="yourname@mail.com"
                type="email"
                required
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Subject</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="What's on your mind?"
                type="text"
                required
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="message">Message</Label>
              <Textarea
                style={{ minHeight: "80px", maxHeight: "150px" }}
                id="message"
                name="message"
                placeholder="Type your message here...!"
                required
              />
            </LabelInputContainer>

            <div className="flex items-center justify-center">
              <MagicButton title={isSending ? "Email Sending..." : "Send Email"} type="submit" />
            </div>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          </form>
        </div>
      </ModalBody>
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default MailModel;
