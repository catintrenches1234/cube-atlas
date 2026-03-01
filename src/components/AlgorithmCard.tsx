import type { Algorithm } from "../types/algorithm";

type Props = {
    algorithm: Algorithm;
};

export default function AlgorithmCard({ algorithm }: Props) {
    return (
        <div>
            <h3>{algorithm.name}</h3>
            <img src={algorithm.image}/>
            <p>{algorithm.algorithm}</p>
        </div>
    );
}