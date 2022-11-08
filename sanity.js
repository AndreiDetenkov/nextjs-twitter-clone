import { createClient } from "next-sanity";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2022-11-08",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);
