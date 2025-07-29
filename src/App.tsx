import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Global, ThemeProvider } from "@emotion/react";
import GlobalStyles from "./styles/GlobalStyles";
import variables from "./styles/Variables";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense, useDeferredValue, useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const deferredReady = useDeferredValue(isReady);

  const skipLoading = sessionStorage.getItem("skipLoading");

  useEffect(() => {
    if (!skipLoading) {
      const timer = setTimeout(() => setIsReady(true), 1300);
      return () => clearTimeout(timer);
    } else {
      setIsReady(true);
      sessionStorage.removeItem("skipLoading");
    }
  }, [skipLoading]);

  return (
    <ThemeProvider theme={variables}>
      <Global styles={GlobalStyles} />
      <ErrorBoundary FallbackComponent={Error}>
        <Suspense fallback={<Loading />}>
          {!deferredReady ? (
            <Loading size="big" phrase="Please wait..." />
          ) : (
            <RouterProvider router={router} />
          )}
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
