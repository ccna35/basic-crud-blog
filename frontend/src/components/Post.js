import React from "react";
import { Link } from "react-router-dom";

function Post({ post }) {
  return (
    <article>
      <Link to={`/post/${post._id}`}>{post.title}</Link>
      <p>{post.body}</p>
    </article>
  );
}

export default Post;
