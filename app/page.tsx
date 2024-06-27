import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center bg-sky-400 ">
      <div className="space-y-6">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          Task Manager
        </h1>
        <p className="text-white text-lg">
          A simple task manager site made to be used by friends
        </p>
        <div>
          <LoginButton>
            <Button variant={"secondary"}>Sign in</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
