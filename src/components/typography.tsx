import type { ReactNode } from "react";
import { cn } from "../consts";

const title1 = "md:text-40 md:leading-48 text-28 leading-32 font-title";

const title2 = "md:text-32 text-28 leading-tight font-sans font-title";

const title3 = "md:text-28 text-24 leading-tight font-sans font-title";

const textBodyLarge =
  "md:text-20 md:leading-28 text-16 leading-22 font-sans";

const textBody = "text-16 leading-22 font-sans";

const textBodyUppercase = "uppercase text-16 leading-20 font-sans";

export const textBodyNoe = "text-16 font-noe leading-2";

export const textBodyUppercaseSmall = "uppercase text-14 leading-18 font-sans";

export const textBodySmall = "text-14 leading-20 font-sans";

export const textCaption = "text-12 leading-16 font-sans";

export const textUppercaseBig = "uppercase text-20 leading-24 font-sans";

export const textUppercaseCaption = "uppercase text-12 leading-16 font-sans";

export interface TypographyProps {
  children: ReactNode;
  classNames?: string;
}

export const h1Heading = ({ children, classNames }: TypographyProps) => {
  return <h1 className={cn(title1, classNames)}>{children}</h1>;
};

export const h2Heading = ({ children, classNames }: TypographyProps) => {
  return <h2 className={cn(title2, classNames)}>{children}</h2>;
};

export const h3Heading = ({ children, classNames }: TypographyProps) => {
  return <h3 className={cn(title3, classNames)}>{children}</h3>;
};

export const largeP = ({ children, classNames }: TypographyProps) => {
  return <p className={cn(textBodyLarge, classNames)}>{children}</p>;
};

export const Np = ({ children, classNames }: TypographyProps) => {
  return <p className={cn(textBody, classNames)}>{children}</p>;
};

export const upperP = ({ children, classNames }: TypographyProps) => {
  return <p className={cn(textBodyUppercase, classNames)}>{children}</p>;
};
