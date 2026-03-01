import type { Algorithm } from "../types/algorithm";
import AlgorithmCard from "./AlgorithmCard";

type Props = {
    algorithms: Algorithm[];
}

export default function AlgorithmGrid({ algorithms }: Props) {
    return (
        <div>
            {algorithms.map((algo) => (
                <AlgorithmCard key={algo.id} algorithm={algo}/>
            ))}
        </div>
    );
}