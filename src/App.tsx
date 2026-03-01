import rawAlgorithms from "./data/pll.json";
import AlgorithmGrid from "./components/AlgorithmGrid";
import type { Algorithm } from "./types/algorithm";

const algorithms = rawAlgorithms satisfies Algorithm[];

function App() {
  return (
    <div>
      <h1>CubeAtlas</h1>
      <AlgorithmGrid algorithms={algorithms} />
    </div>
  );
}

export default App;