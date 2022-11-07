import { SVGProps } from "react";

export type MenuItem = {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
};
