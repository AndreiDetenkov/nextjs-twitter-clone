import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

const Widgets = () => {
  return (
    <div className="mt-2 px-2 col-span-2 hidden lg:inline">
      <div className="flex items-center space-x-2 mt-2 p-3 rounded-full bg-gray-100">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="flex-1 bg-transparent outline-none"
        />
      </div>
    </div>
  );
};

export default Widgets;
