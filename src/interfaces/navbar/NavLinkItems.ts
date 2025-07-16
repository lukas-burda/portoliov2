import type { ReactNode } from "react";

export interface NavLinkItem {
  href?: string;
  text: string;
  className?: string;
  children?: ReactNode;
  subLinks?: NavLinkItem[];
}