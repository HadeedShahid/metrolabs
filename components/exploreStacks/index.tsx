import { IconStack } from "@/icons";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import Image from "next/image";

const ExploreStacks = () => {
  return (
    <div className="mt-48 min-h-[530px]">
      <div className="absolute w-full left-0 right-0 bg-secondary py-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-3.5 mb-10">
          <IconStack />
          <h2 className="subtitle text-primary">Explore our Stacks</h2>
        </div>
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
          className="mx-auto"
        />
      </div>
    </div>
  );
};

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

export default ExploreStacks;
