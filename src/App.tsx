import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Global } from "@emotion/react";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
