import React, { useState } from "react";
import Image from "next/image";
import {
  PhotoIcon,
  MagnifyingGlassCircleIcon,
  FaceSmileIcon,
  CalendarIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const TweetBox = () => {
  const [tweet, setTweet] = useState<string>("");

  return (
    <div className="flex space-x-2 p-5">
      <Image
        src="/user.png"
        alt="user icon"
        width={56}
        height={56}
        className="mt-4 h-14 w-14 rounded-full object-cover"
      />

      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            type="text"
            placeholder="What's Happening?"
            className="w-full h-24 outline-none text-xl placeholder:text-xl"
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
          />
          <div className="flex items-center">
            <div className="flex flex-1 space-x-2 text-twitter">
              <PhotoIcon className="w-5 h-5 cursor-pointer transition-transform duration-150 ease-out" />
              <MagnifyingGlassCircleIcon className="w-5 h-5" />
              <FaceSmileIcon className="w-5 h-5" />
              <CalendarIcon className="w-5 h-5" />
              <MapPinIcon className="w-5 h-5" />
            </div>

            <button
              disabled={!tweet}
              className="rounded-full px-5 py-2 font-bold text-white bg-twitter disabled:bg-gray-300"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TweetBox;
