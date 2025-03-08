"use client";
import React, { ReactNode, useState } from "react";
import { ButtonProps } from "@/components/ui/button";
import Layout from "./layout";
import Lottie from "lottie-react";
import successLottie from "@/public/successLottie.json";
import { IsMobile } from "@/hooks/is-mobile";
import { cx } from "class-variance-authority";

interface FormLayoutProps {
  children: ReactNode | ((handlers: FormHandlers) => ReactNode);
  title?: string;
  description?: string;
  triggerContent?: ReactNode;
  buttonProps?: ButtonProps;
  trigger?: ReactNode;
}

interface FormHandlers {
  onSuccess: (data: FeedbackData) => void;
  onError: (data: FeedbackData) => void;
}

export interface FeedbackData {
  title: string;
  description: string;
}

const FormLayout = ({
  children,
  title,
  description,
  triggerContent,
  buttonProps,
  trigger,
}: FormLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedBackData, setFeedBackData] = useState<FeedbackData | null>(null);
  const isMobile = IsMobile();

  const handleSuccess = (data: FeedbackData) => {
    setIsOpen(false);
    setFeedBackData(data);
  };

  const handleError = (data: FeedbackData) => {
    setIsOpen(false);
    setFeedBackData(data);
  };

  return (
    <>
      <Layout
        title={title}
        description={description}
        triggerContent={triggerContent}
        buttonProps={buttonProps}
        trigger={trigger}
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        {typeof children === "function"
          ? children({ onSuccess: handleSuccess, onError: handleError })
          : children}
      </Layout>

      {feedBackData && (
        <Layout
          open={true}
          onOpenChange={() => {
            setFeedBackData(null);
          }}
        >
          <div className="flex flex-col items-center space-y-4">
            <Lottie
              className={cx("mx-auto", isMobile ? "w-24 h-24" : "w-32 h-32")}
              animationData={successLottie}
              loop={true}
              autoplay={true}
            />
            <h2 className="heading">{feedBackData.title}</h2>
            <p className="body-base">{feedBackData.description}</p>
          </div>
        </Layout>
      )}
    </>
  );
};

export default FormLayout;
