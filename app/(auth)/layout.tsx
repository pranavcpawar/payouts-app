import { HomeButton } from "@/components/home-button";
import { Geist, Unbounded } from "next/font/google";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex flex-col items-start justify-center h-dvh p-2 w-full mx-auto ${unbounded.variable} ${geist.variable}`}
    >
      <HomeButton className="rounded-full font-[family-name:var(--font-geist-sans)] font-semibold">
        Home
      </HomeButton>
      <div className="p-2 max-w-lg mx-auto w-full h-full">{children}</div>
    </div>
  );
}
