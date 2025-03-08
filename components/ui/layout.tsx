"use client";
import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button, ButtonProps } from "@/components/ui/button";
import { X } from "lucide-react";
import { IsMobile } from "@/hooks/is-mobile";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  triggerContent?: ReactNode;
  buttonProps?: ButtonProps;
  trigger?: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  showTrigger?: boolean;
}

const Layout = ({
  children,
  title,
  description,
  triggerContent,
  buttonProps = {},
  trigger,
  open,
  onOpenChange,
  showTrigger = true,
}: LayoutProps) => {
  const isMobile = IsMobile();
  return (
    <>
      {isMobile ? (
        <div>
          <Drawer open={open} onOpenChange={onOpenChange}>
            {showTrigger && (
              <DrawerTrigger asChild>
                {trigger || <Button {...buttonProps}>{triggerContent}</Button>}
              </DrawerTrigger>
            )}
            <DrawerContent className="fixed inset-x-0 bottom-0 max-h-[75%] bg-white p-6 shadow-lg rounded-t-lg space-y-4">
              {title && <DialogTitle>{title}</DialogTitle>}
              {description && (
                <DialogDescription>{description}</DialogDescription>
              )}
              <div>{children}</div>
            </DrawerContent>
          </Drawer>
        </div>
      ) : (
        <div>
          <Dialog open={open} onOpenChange={onOpenChange}>
            {showTrigger && (
              <DialogTrigger asChild>
                {trigger || <Button {...buttonProps}>{triggerContent}</Button>}
              </DialogTrigger>
            )}
            <DialogContent className="max-w-lg">
              <div className="flex justify-between items-center">
                {title && <DialogTitle>{title}</DialogTitle>}
                {/* <X
                  className="h-4 w-4 cursor-pointer hover:opacity-75"
                  onClick={() => onOpenChange?.(false)}
                /> */}
              </div>
              {description && (
                <DialogDescription>{description}</DialogDescription>
              )}
              <div>{children}</div>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </>
  );
};

export default Layout;
