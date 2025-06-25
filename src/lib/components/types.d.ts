import { ReactNode } from "react";

export interface SvgProps extends Partial<SVGProps<SVGSVGElement>> {
  fillColor?: string | null;
}
export interface ProvidersProps {
  children: ReactNode;
}
export interface TruncatedTextProps {
  text: string;
  maxWords: number;
}
