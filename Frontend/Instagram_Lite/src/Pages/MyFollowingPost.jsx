import React from "react";
import Feed from "../Components/Feed/Feed";
import { useOutletContext } from "react-router-dom";

export default function MyFollowingPost() {
  const { newPost, updateNewPost } = useOutletContext();

  return (
    <>
      <Feed newPost={newPost} updateNewPost={updateNewPost}></Feed>
    </>
  );
}
