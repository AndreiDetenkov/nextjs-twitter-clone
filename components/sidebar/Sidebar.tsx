import React, { useMemo } from "react";
import Image from "next/image";
import SidebarRow from "./SidebarRow";
import {
  BellIcon,
  BookmarkIcon,
  EnvelopeIcon,
  HashtagIcon,
  HomeIcon,
  QueueListIcon,
  UserIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { MenuItem } from "./types";

const Sidebar = () => {
  const menu: MenuItem[] = useMemo(
    () => [
      { Icon: HomeIcon, title: "Home" },
      { Icon: HashtagIcon, title: "Explore" },
      { Icon: BellIcon, title: "Notification" },
      { Icon: EnvelopeIcon, title: "Messages" },
      { Icon: BookmarkIcon, title: "Bookmarks" },
      { Icon: QueueListIcon, title: "Lists" },
      { Icon: UserIcon, title: "Sign In" },
      { Icon: EllipsisHorizontalIcon, title: "More" },
    ],
    []
  );

  return (
    <div className="flex flex-col col-span-2 items-center md:items-start px-4">
      <Image
        src="/logo-twitter.png"
        alt="twitter logo"
        width={40}
        height={40}
        className="m-3"
      />

      {menu &&
        menu.map(({ Icon, title }) => (
          <SidebarRow key={title} Icon={Icon} title={title} />
        ))}
    </div>
  );
};

export default Sidebar;
