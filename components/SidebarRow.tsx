import React, {SVGProps} from "react";

type Props = {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
};

const SidebarRow = ({ Icon, title }: Props) => {
  return (
    <div className="flex items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 cursor-pointer transition-all duration-200">
      <Icon className="w-6 h-6" />
      <p>{title}</p>
    </div>
  );
};

export default SidebarRow;
