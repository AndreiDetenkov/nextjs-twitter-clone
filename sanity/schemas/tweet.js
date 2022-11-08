export default {
  name: "tweet",
  title: "Tweet",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Text in Tweet",
      type: "text",
    },
    {
      name: "blockTweet",
      title: "Block Tweet",
      description: "ADMIN Controls",
      type: "boolean",
    },
    {
      name: "username",
      title: "Username",
      type: "string",
    },
    {
      name: "profileImage",
      title: "Profile image",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
};
