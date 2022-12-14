import React from "react";
import { MenuItem } from "./types";

const SidebarRow = ({ Icon, title }: MenuItem) => {
  return (
    <div className="group flex items-center max-w-fit space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 cursor-pointer transition-all duration-200 group">
      <Icon className="h-6 w-6" />
      <p className="group-hover:text-twitter hidden md:inline-flex text-base font-light lg:text-xl">
        {title}
      </p>
    </div>
  );
};

export default SidebarRow;
