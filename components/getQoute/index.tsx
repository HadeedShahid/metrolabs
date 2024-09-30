"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
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
import { Slider } from "../ui/slider";
const GetQoute = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    projectType: z.string().min(1, { message: "Select a project type" }),
    design: z.string().min(1, { message: "Select design option" }),
    development: z.string().min(1, { message: "Select development option" }),
    numOfPages: z.string().min(1, { message: "Select number of pages" }),
    timeline: z.string().min(1, { message: "Select a project timeline" }),
    targetAudience: z
      .string()
      .min(1, { message: "Select your target audience" }),
    maintainanceAndSupport: z
      .string()
      .min(1, { message: "Select a maintainance plan" }),
    budget: z.number().min(1, { message: "Select the project budget" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectType: "",
      design: "",
      development: "",
      numOfPages: "",
      timeline: "",
      targetAudience: "",
      maintainanceAndSupport: "",
      budget: 200,
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
          <Button>Get a Qoute</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Get a Qoute</DialogTitle>
            <DialogDescription>
              Enter your project details to get an instant quote. Our calculator
              provides a personalized estimate just for you.
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
                name="projectType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Type</FormLabel>
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            className="text-slate-500"
                            placeholder="Select project type"
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
              <div className="flex justify-between gap-10">
                <FormField
                  control={form.control}
                  name="design"
                  render={({ field }) => (
                    <FormItem className="basis-1/2">
                      <FormLabel>Design</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              className="text-slate-500"
                              placeholder="Select design option"
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
                  name="development"
                  render={({ field }) => (
                    <FormItem className="basis-1/2">
                      <FormLabel>Development</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              className="text-slate-500"
                              placeholder="Select development"
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
              </div>

              <div className="flex justify-between gap-10">
                <FormField
                  control={form.control}
                  name="numOfPages"
                  render={({ field }) => (
                    <FormItem className="basis-1/2">
                      <FormLabel>No. of pages</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              className="text-slate-500"
                              placeholder="Select option"
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
                  name="timeline"
                  render={({ field }) => (
                    <FormItem className="basis-1/2">
                      <FormLabel>Timeline</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              className="text-slate-500"
                              placeholder="Select option"
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
              </div>

              <div className="flex justify-between gap-10">
                <FormField
                  control={form.control}
                  name="targetAudience"
                  render={({ field }) => (
                    <FormItem className="basis-1/2">
                      <FormLabel>Target Audience</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              className="text-slate-500"
                              placeholder="Select option"
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
                  name="maintainanceAndSupport"
                  render={({ field }) => (
                    <FormItem className="basis-1/2">
                      <FormLabel>Maintenance and Support</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              className="text-slate-500"
                              placeholder="Select option"
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
              </div>

              <FormField
                control={form.control}
                name="budget"
                render={({ field: { value, onChange } }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel>Budget</FormLabel>
                      <div>${value}</div>
                    </div>
                    <FormControl>
                      <Slider
                        min={200}
                        max={10000}
                        step={100}
                        defaultValue={[value]}
                        onValueChange={(vals) => {
                          onChange(vals[0]);
                        }}
                      />
                    </FormControl>
                    <FormDescription>
                      This is a description for the price.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button variant={"secondary"} loading={isLoading} type="submit">
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

export default GetQoute;
