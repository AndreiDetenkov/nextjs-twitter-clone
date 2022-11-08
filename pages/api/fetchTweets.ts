import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { DateTime } from "groq-js/src/values/utils";
import { sanityClient } from "../../sanity";

type Image = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};

type TweetBody = {
  image: Image;
  profileImage: string;
  text: string;
  username: string;
};

export interface Tweet extends TweetBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: "tweet";
  _updatedAt: DateTime;
  blockTweet: boolean;
}

type Data = {
  tweets: Tweet[];
};

const feedQuery = groq`
  *[_type == "tweet" && !blockTweet] {
    _id,
    ...
  } | order(_updatedAt desc)
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const tweets: Tweet[] = await sanityClient.fetch(feedQuery);
  res.status(200).json({ tweets });
}
