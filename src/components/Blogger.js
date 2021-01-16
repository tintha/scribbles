import React, { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import { useParams } from "react-router-dom";
import { db } from "../firebase";

const Blogger = () => {
  const { userBlogPosts } = useContext(UserContext);
  let { id } = useParams();

  useEffect(() => {
    db.collection("posts")
      .where("userID", "==", id)
      .orderBy("postedOn", "desc")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, "=>", doc.data());
        });
      });
  }, [id]);

  return <div>{id}</div>;
};

export default Blogger;
