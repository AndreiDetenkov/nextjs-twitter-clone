export default {
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    {
      name: "comment",
      title: "Comment",
      type: "string",
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
      name: "tweet",
      title: "Tweet",
      description: "Reference the Tweet to the comment with associated to:",
      type: "reference",
      to: { type: "tweet" },
    },
  ],
};
