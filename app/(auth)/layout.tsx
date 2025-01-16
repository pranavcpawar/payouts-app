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
      className={`flex flex-col items-start justify-center h-dvh w-full mx-auto ${unbounded.variable} ${geist.variable}`}
    >
      <div className="mt-2 max-w-md mx-auto w-full h-full">{children}</div>
    </div>
  );
}
