// .tag {
//     display: inline-block;
//     border-radius: 3px;
//     padding: .2em .5em .3em;
//     border-radius: 2px;
//     background: var(--tag-bg);
//     color: var(--text-color);
//     font-weight: 600;
//     margin: .25em .1em
// }

import type { ReactNode } from "react";
import { cn } from "../../../consts";

export const Tag = ({ link, color, backgroundColor, children, classNames }: { link?: string, color?: string, backgroundColor?: string, children: ReactNode, classNames?: string }) => (
  <a href={link}>
    <span className={cn("inline-block rounded-xl px-2 py-0 font-medium mx-1 my-4 border border-yellow-400", classNames)} style={{color, backgroundColor}}>{children}</span>
  </a>
);
