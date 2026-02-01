import { useUserData } from "./hooks/useUserData";
import { LoadingScreen } from "./components/ui/LoadingScreen";
import { ErrorScreen } from "./components/ui/ErrorScreen";
import { Scene } from "./components/three/Scene";

function App() {
  const { isLoading, error } = useUserData();

  return (
    <>
      <Scene />
      {isLoading && <LoadingScreen />}
      {error && <ErrorScreen message={error.message} />}
    </>
  );
}

export default App;
