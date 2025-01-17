import { OAuthForm } from "@/components/oauth-form";
import { CredsLoginForm as CredsForm } from "@/app/(auth)/login/cred-login";

export function LoginForm() {
  return (
    <div className="flex flex-col w-full gap-4">
      <CredsForm />
      <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
        <span className="relative z-10 bg-background px-2 text-muted-foreground">
          Or continue with
        </span>
      </div>
      <OAuthForm title="Login" />
    </div>
  );
}
