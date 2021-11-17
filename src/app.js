import { Counter } from "./components/Counts";
import { RepositoryList } from "./components/RepositoryList";
import "./styles/global.scss";
import "./styles/repository.scss";

export function App() {
  return (
    // fragment
    <>
      <RepositoryList />
      <Counter />
    </>
  );
}
