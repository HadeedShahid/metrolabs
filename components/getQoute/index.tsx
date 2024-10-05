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
import { filterObj } from "@/utils/constants";
import { getQouteCost } from "@/app/actions";
import { qouteFormSchema } from "@/utils/formSchema";

const GetQoute = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof qouteFormSchema>>({
    resolver: zodResolver(qouteFormSchema),
    defaultValues: {
      projectType: "",
      design: "",
      development: "",
      numOfPages: "",
      timeline: "",
      platformType: "",
      maintainanceAndSupport: "",
      budget: 200,
    },
  });

  async function onSubmit(values: z.infer<typeof qouteFormSchema>) {
    setIsLoading(true);
    const cost = await getQouteCost(values);
    console.log(cost);
    // setTimeout(() => {}, 2000);
    setIsLoading(false);
    // form.reset();
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
                    <FormLabel>{filterObj.projectType.label}</FormLabel>
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
                        {filterObj.projectType.options.map((item) => {
                          return (
                            <SelectItem key={item.value} value={item.value}>
                              {item.label}
                            </SelectItem>
                          );
                        })}
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
                      <FormLabel>{filterObj.design.label}</FormLabel>
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
                          {filterObj.design.options.map((item) => {
                            return (
                              <SelectItem key={item.value} value={item.value}>
                                {item.label}
                              </SelectItem>
                            );
                          })}
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
                      <FormLabel>{filterObj.development.label}</FormLabel>
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
                          {filterObj.development.options.map((item) => {
                            return (
                              <SelectItem key={item.value} value={item.value}>
                                {item.label}
                              </SelectItem>
                            );
                          })}
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
                      <FormLabel>{filterObj.numOfPages.label}</FormLabel>
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
                          {filterObj.numOfPages.options.map((item) => {
                            return (
                              <SelectItem key={item.value} value={item.value}>
                                {item.label}
                              </SelectItem>
                            );
                          })}
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
                      <FormLabel>{filterObj.timeline.label}</FormLabel>
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
                          {filterObj.timeline.options.map((item) => {
                            return (
                              <SelectItem key={item.value} value={item.value}>
                                {item.label}
                              </SelectItem>
                            );
                          })}
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
                  name="platformType"
                  render={({ field }) => (
                    <FormItem className="basis-1/2">
                      <FormLabel>{filterObj.platformType.label}</FormLabel>
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
                          {filterObj.platformType.options.map((item) => {
                            return (
                              <SelectItem key={item.value} value={item.value}>
                                {item.label}
                              </SelectItem>
                            );
                          })}
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
                      <FormLabel>
                        {filterObj.maintainanceAndSupport.label}
                      </FormLabel>
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
                          {filterObj.maintainanceAndSupport.options.map(
                            (item) => {
                              return (
                                <SelectItem key={item.value} value={item.value}>
                                  {item.label}
                                </SelectItem>
                              );
                            }
                          )}
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
                      <FormLabel>{filterObj.budget.label}</FormLabel>
                      <div>${value}</div>
                    </div>
                    <FormControl>
                      <Slider
                        min={filterObj.budget.min}
                        max={filterObj.budget.max}
                        step={filterObj.budget.step}
                        defaultValue={[value]}
                        onValueChange={(vals) => {
                          onChange(vals[0]);
                        }}
                      />
                    </FormControl>
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
