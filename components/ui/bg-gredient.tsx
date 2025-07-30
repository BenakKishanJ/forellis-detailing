import { cn } from "@/lib/utils";

export const Component = ({
  className,
  gradientFrom = "#f2f4f3",
  gradientTo = "#81adc8",
  gradientSize = "125% 125%",
  gradientPosition = "50% 10%",
  gradientStop = "40%",
}: {
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
  gradientSize?: string;
  gradientPosition?: string;
  gradientStop?: string;
}) => {
  return (
    <div
      className={cn("absolute inset-0 w-full h-full -z-10 bg-white", className)}
      style={{
        background: `radial-gradient(${gradientSize} at ${gradientPosition}, ${gradientFrom} ${gradientStop}, ${gradientTo} 100%)`,
      }}
    />
  );
};
