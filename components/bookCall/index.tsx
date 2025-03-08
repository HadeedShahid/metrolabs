"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { MouseEventHandler, useState } from "react";
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
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { countries } from "@/utils/constants";
import { createLead } from "@/lib/actions";
import FormLayout, { FeedbackData } from "../ui/form-layout";

const BookCall = ({
  buttonText = "Book a Call",
}: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  buttonText?: string;
  buttonClassname?: string;
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

  async function onSubmit(
    values: z.infer<typeof formSchema>,
    {
      onSuccess,
      onError,
    }: {
      onSuccess: (data: FeedbackData) => void;
      onError: (data: FeedbackData) => void;
    }
  ) {
    setIsLoading(true);
    const response = await createLead(values);
    if (response.success) {
      onSuccess({
        title: "Success",
        description: "Your message has been sent successfully",
      });
    } else {
    }
    setIsLoading(false);
    form.reset();
    setOpen(false);
  }

  return (
    <>
      <FormLayout
        title="Contact us"
        description="Book a call with us to discuss your project needs. We're here to assist with any inquiries and provide tailored solutions."
        triggerContent={buttonText}
        buttonProps={{
          variant: "secondary",
          size: "lg",
        }}
      >
        {({ onSuccess, onError }) => (
          <Form {...form}>
            <form
              id="contact-form"
              onSubmit={form.handleSubmit((values) =>
                onSubmit(values, { onSuccess, onError })
              )}
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
                        {countries.map((country) => (
                          <SelectItem key={country.value} value={country.value}>
                            {country.label}
                          </SelectItem>
                        ))}
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
        )}
      </FormLayout>
    </>
  );
};

export default BookCall;
