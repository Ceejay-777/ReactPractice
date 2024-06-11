import Renderprop from "./Projects/RenderProp/Renderprop";
import JustAButtonWithCounter from "./Projects/HigherOrderComps/JustAButton";
import ErrorUseTypes from "./Projects/ErrorBoundaries/ErrorUseTypes";
import UseReducerExample from "./Projects/HookUseReducer/UseReducerExample";
import Counter from "./Projects/Redux/features/counter/Counter";
import PostsList from "./Projects/Redux/features/posts/PostsList";
import AddPostForm from "./Projects/Redux/features/posts/AddPostForm";

function App() {
  return (
    <>
      {/* <Renderprop /> */}
      {/* <JustAButtonWithCounter /> */}
      {/* <ErrorUseTypes /> */}
      {/* <UseReducerExample /> */}
      {/* <Counter /> */}
      <AddPostForm />
      <PostsList />
    </>
  );
}

export default App;
            