import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { allPosts, postAdded } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector(allPosts);
  const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-8">Posts</h2>
      {orderedPosts.map((post) => {
        return (
          <article
            key={post.id}
            className="w-full max-w-[600px] border-2 p-6 rounded-3xl my-4 border-black mx-auto"
          >
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-lg">{post.content.substring(0, 100)}</p>
            <PostAuthor userId={post.userId}/>
            <ReactionButtons post={post}/>
            <TimeAgo timestamp={post.date}/>
          </article>
        );
      })}
    </section>
  );
};

export default PostsList;
