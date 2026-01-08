import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const SectionContainer = ({ children, className, id }: SectionContainerProps) => {
  return (
    <section id={id} className={cn("section-container py-24 md:py-32 lg:py-40", className)}>
      {children}
    </section>
  );
};

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export const SectionHeader = ({ 
  label, 
  title, 
  description, 
  className,
  align = "left" 
}: SectionHeaderProps) => {
  return (
    <div className={cn(
      "max-w-4xl mb-16 md:mb-20",
      align === "center" && "mx-auto text-center",
      className
    )}>
      {label && (
        <span className="label-text text-terracotta mb-4 block opacity-0 animate-fade-in">
          {label}
        </span>
      )}
      <h2 className="headline-section text-foreground mb-6 opacity-0 animate-fade-in-up delay-100">
        {title}
      </h2>
      {description && (
        <p className="body-large text-muted-foreground opacity-0 animate-fade-in-up delay-200">
          {description}
        </p>
      )}
    </div>
  );
};
