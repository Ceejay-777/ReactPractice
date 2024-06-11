import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const emojis = {
  thumbsUp: "👍",
  heart: "❤️",
  wow: "😮",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();
  
  return (
    <div className="flex gap-4 mt-2">
      {Object.entries(emojis).map(([name, emoji]) => {
        return (
          <div
            key={name}
            className="p-2 rounded-full border-2 border-blue-600"
            onClick={() => dispatch(reactionAdded({postId : post.id, reaction : name}))}
          >
            {emoji} {post.reactions[name]}
          </div>
        );
      })}
    </div>
  );
};

export default ReactionButtons;
