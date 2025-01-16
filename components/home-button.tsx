"use client";

import { ChevronLeft } from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function HomeButton({ children, className, ...props }: ButtonProps) {
  const router = useRouter();
  return (
    <Button
      {...props}
      variant="ghost"
      className={cn("flex justify-center gap-1", className)}
      onClick={() => router.push("/")}
    >
      <ChevronLeft className="h-4 w-4" />
      {children}
    </Button>
  );
}
