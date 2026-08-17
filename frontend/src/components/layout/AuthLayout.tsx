import Link from "next/link";
import { Logo } from "@/components/brand/Logo";

export default function AuthLayout({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Centered Split Card */}
      <div className="relative z-10 w-full max-w-[1000px] bg-card rounded-3xl lg:rounded-[2.5rem] shadow-2xl shadow-primary/5 ring-1 ring-border/50 flex flex-col lg:flex-row overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-1000">
        
        {/* Left Side: Brand & Theme */}
        <div className="hidden lg:flex flex-col justify-between w-[45%] bg-muted/30 p-12 relative border-r border-border/50">
          <Link href="/" className="inline-block w-fit transition-opacity hover:opacity-80">
            <Logo />
          </Link>
          
          <div className="mt-16 mb-20">
            <h1 className="text-3xl font-bold tracking-tight text-foreground leading-[1.2]">
              Forge your ideas into finished work.
            </h1>
            <p className="mt-4 text-[1.05rem] text-muted-foreground leading-relaxed">
              ThoughtForge is your contextual thinking partner. From the first spark to the final draft, keep your knowledge connected and your workflow continuous.
            </p>
          </div>

          <div className="text-sm text-muted-foreground font-medium">
            &copy; {new Date().getFullYear()} ThoughtForge.
          </div>
        </div>

        {/* Right Side: Auth Form */}
        <div className="flex-1 p-6 sm:p-10 lg:p-16 flex items-center justify-center bg-card">
          <div className="w-full max-w-[340px] space-y-6 sm:space-y-8 animate-in fade-in duration-700 delay-300 fill-mode-both">
            {/* Mobile Logo */}
            <div className="lg:hidden mb-6 flex justify-center sm:justify-start">
              <Link href="/" className="inline-block transition-opacity hover:opacity-80">
                <Logo />
              </Link>
            </div>

            <div className="flex flex-col text-center sm:text-left">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                {title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {subtitle}
              </p>
            </div>

            <div className="mt-8 sm:mt-10">
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
