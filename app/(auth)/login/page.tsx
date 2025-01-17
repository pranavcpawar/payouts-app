import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { LoginForm } from "@/app/(auth)/login/login-form";

export const metadata = {
  title: "Login",
};

export default async function Login() {
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
            Log in to Payouts
          </CardTitle>
          <CardDescription className="font-[family-name:var(--font-geist-sans)] ml-1">
            Enter your email to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="font-[family-name:var(--font-geist-sans)]">
          <LoginForm />
        </CardContent>
        <CardFooter className="ml-1">
          <p className="text-center text-sm font-[family-name:var(--font-geist-sans)]">
            By signing in, you agree to our{" "}
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
