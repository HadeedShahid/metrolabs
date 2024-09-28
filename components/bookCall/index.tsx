"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { MouseEventHandler, useState } from "react";
import { Modal } from "antd";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import Link from "next/link";
import { Textarea } from "../ui/textarea";
const BookCall = ({
  onClick = () => {},
}: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }).max(50),
    email: z.string().min(1, { message: "Email is required" }).email(),
    country: z.string().min(1, { message: "Country is required" }),
    message: z.string().min(1, { message: "Message is required" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      country: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // setIsLoading(true);
    console.log(values);
    // setTimeout(() => {}, 2000);
    // setIsLoading(false);
    form.reset();
  }

  return (
    <>
      <Dialog
        onOpenChange={(e) => {
          if (!e) {
            form.reset();
          }
        }}
      >
        <DialogTrigger asChild>
          <Button onClick={onClick} variant={"secondary"}>
            Book a Call
          </Button>
        </DialogTrigger>
        <DialogContent className="w-full ">
          <DialogHeader>
            <DialogTitle>Contact us</DialogTitle>
            <DialogDescription>
              Book a call with us to discuss your project needs. We're here to
              assist with any inquiries and provide tailored solutions.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              id="contact-form"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            className="text-slate-500"
                            placeholder="Select your country"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="m@example.com">
                          m@example.com
                        </SelectItem>
                        <SelectItem value="m@google.com">
                          m@google.com
                        </SelectItem>
                        <SelectItem value="m@support.com">
                          m@support.com
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Leave a message" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button loading={isLoading} type="submit">
                  Save changes
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookCall;
