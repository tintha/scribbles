import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { useParams } from "react-router-dom";

const Blogger = () => {
  const { userBlogPage, userBlogPosts } = useContext(UserContext);
  let { id } = useParams();
  userBlogPage(id);
  console.log(userBlogPosts);
  return <div>{id}</div>;
};

export default Blogger;
