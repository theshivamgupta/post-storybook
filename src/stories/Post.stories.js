import React from "react";
import { Post } from "./Post";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Prototype/Post",
  component: Post,
};

const Template = (args) => <Post {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
