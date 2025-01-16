"use client";

import { FaGoogle, FaGithub } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

type LoginButtonProps = {
  title: string;
  className?: string;
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  icon: IconType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function LoginButton({
  title,
  className,
  icon: Icon,
  ...props
}: LoginButtonProps) {
  return (
    <Button title={title} className={className} {...props}>
      <Icon size={24} height={16} width={16} />
      <span>{title}</span>
    </Button>
  );
}

export function OAuthForm({ title }: { title: string }) {
  return (
    <div className="flex flex-row w-full gap-4 font-[family-name:var(--font-geist-sans)]">
      <LoginButton
        title={`${title} with Google`}
        variant="default"
        icon={FaGoogle}
        className="w-full h-10"
      />
      <LoginButton
        title={`${title} with GitHub`}
        variant="default"
        icon={FaGithub}
        className="w-full h-10"
      />
    </div>
  );
}
