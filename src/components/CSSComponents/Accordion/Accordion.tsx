import type { ReactNode } from "react";
import { cn } from "../../../consts";

interface SectionProps {
  title: string;
  className?: string;
  content: ReactNode;
  color?: string;
}

interface AccordionProps {
  className?: string;
  section: SectionProps[];
}

export const AccordionSection = ({
  title,
  content,
  color,
  className,
}: SectionProps) => {
  return (
    <details
      className={cn(
        "flex rounded-md overflow-hidden bg-[#00000010] border-l-[15px] border-solid border-[gray] p-4 mt-4 transition-all duration-1000 ease",
        className
      )}
    >
      <summary className="relative flex flex-row content-center justify-start text-[18px] text-[--color-title] p-5 cursor-pointer focus:outline outline-[3px] outline-[--highlight] open:font-bold">
        {title}
      </summary>
      <div>{content}</div>
    </details>
  );
};

export const Accordion = ({ className, section }: AccordionProps) => {
  return (
    <div className={cn(className)}>
      {section.map((s, i) => (
        <AccordionSection key={i} {...s} />
      ))}
    </div>
  );
};
