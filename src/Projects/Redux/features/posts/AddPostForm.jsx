import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { allUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState(""); 
  const dispatch = useDispatch();
  const users = useSelector(allUsers)

  const savePostHandler = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
    }

    setTitle("");
    setContent("");
  };
 
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const userOptions = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    )
  })

  return (
    <section className="p-8 mx-auto w-fit">
      <h2 className="text-2xl font-bold mb-8">Add a post</h2>
      <form>
        <div className="flex flex-col w-fit mb-8">
          <label htmlFor="postTitle" className="text-lg font-semibold mb-4">
            Post Title:
          </label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            className="border-2 p-2 px-4 rounded-full border-black text-xl w-96"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="mb-8 flex flex-col w-min">
          <label htmlFor="postTitle" className="text-lg font-semibold mb-4">
            Author:
          </label>
          <select id="postAuthor" value={userId} onChange={(event) => setUserId(event.target.value)} className="border-2 border-black p-2 rounded-xl ">
            <option value=""></option>
            {userOptions}
          </select>
        </div>

        <div className="flex flex-col w-fit mb-8">
          <label htmlFor="postContent" className="text-lg font-semibold mb-4">
            Content:
          </label>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            className="border-2 w-96 h-48 border-black rounded-xl p-8"
          />
        </div>

        <button
          type="button"
          onClick={savePostHandler}
          className="border-2 rounded-full px-4 text-lg border-black py-2 hover:scale-105"
          disabled={!canSave}
        >
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
