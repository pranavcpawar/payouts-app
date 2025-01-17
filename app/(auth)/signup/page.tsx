import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { SignUpForm } from "@/app/(auth)/signup/signup-form";

export const metadata = {
  title: "Sign up",
};

export default async function Signup() {
  return (
    <main className="w-full p-2">
      <Card className="w-full">
        <CardHeader>
          <Image
            priority
            className="dark:invert"
            src="/payouts.svg"
            alt="payouts"
            width={48}
            height={48}
          />
          <CardTitle className="text-3xl font-bold font-[family-name:var(--font-unbounded)]">
            Welcome to Payouts
          </CardTitle>
          <CardDescription className="font-[family-name:var(--font-geist-sans)] ml-1">
            Create an account and start using payouts now.
          </CardDescription>
        </CardHeader>
        <CardContent className="font-[family-name:var(--font-geist-sans)]">
          <SignUpForm />
        </CardContent>
        <CardFooter className="ml-1">
          <p className="text-center text-sm font-[family-name:var(--font-geist-sans)]">
            By signing up, you agree to our{" "}
            <span className="hover:cursor-pointer font-semibold text-tnc">
              Terms
            </span>{" "}
            and{" "}
            <span className="hover:cursor-pointer font-semibold text-tnc">
              Conditions.
            </span>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}
