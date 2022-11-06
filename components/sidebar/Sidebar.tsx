import React from 'react';
import Image from "next/image";
import SidebarRow from "./SidebarRow";
import {BellIcon, BookmarkIcon, EnvelopeIcon, HashtagIcon, HomeIcon, QueueListIcon} from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div>
      <Image src="/logo-twitter.png" alt="twitter logo" width={40} height={40}/>
      <SidebarRow Icon={HomeIcon} title="Home"/>
      <SidebarRow Icon={HashtagIcon} title="Explore"/>
      <SidebarRow Icon={BellIcon} title="Notification"/>
      <SidebarRow Icon={EnvelopeIcon} title="Messages"/>
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks"/>
      <SidebarRow Icon={QueueListIcon} title="Lists"/>
    </div>
  );
};

export default Sidebar;


