import Renderprop from "./Projects/RenderProp/Renderprop";
import JustAButtonWithCounter from "./Projects/HigherOrderComps/JustAButton";
import FallBackUI from "./Projects/ErrorBoundaries/FallBackUI";
import ExampleApplication from "./Projects/ErrorBoundaries/ExampleApplication";
import ErrorUseTypes from "./Projects/ErrorBoundaries/ErrorUseTypes";
import { ErrorBoundary } from "react-error-boundary";
// import ErrorFallback from './Projects/ErrorBoundaries/FallBackUI'

function Greeting({ subject }) {
  return <div>Hello {subject.toUpperCase()}</div>;
}

function Farewell({ subject }) {
  return <div>Goodbye {subject.toUpperCase()}</div>;
}

function App() {
  return (
    <>
      {/* <Renderprop /> */}
      {/* <JustAButtonWithCounter /> */}
      {/* <FallBackUI /> */}
      <ErrorUseTypes />
      {/* <ErrorBoundary FallbackComponent={FallBackUI}>
      </ErrorBoundary> */}
      {/* <ExampleApplication /> */}
    </>
  );
}

export default App;
