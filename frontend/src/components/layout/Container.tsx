import { cn } from "@/lib/utils";
import { type ComponentProps } from "react";

type ContainerProps = ComponentProps<"div">;

export default function Container({
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1400px] px-5 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
