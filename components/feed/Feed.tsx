import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import TweetBox from "../tweet/TweetBox";
import { Tweet } from "../../pages/api/fetchTweets";

interface FeedProps {
  tweetList: Tweet[];
}

const Feed = ({ tweetList }: FeedProps) => {
  console.log(tweetList);
  return (
    <div className="col-span-7 lg:col-span-5 border-x">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <ArrowPathIcon className="h-6 w-6 mr-5 mt-5 cursor-pointer text-twitter transition-all duration-300 ease-out hover:rotate-180 active:scale-125" />
      </div>

      <TweetBox />
    </div>
  );
};

export default Feed;
