import {For, JSX} from 'solid-js'
import FarClouds from "../../assets/background/layers/far-clouds.png"
import FarMountains from "../../assets/background/layers/far-mountains.png"
import Mountains from "../../assets/background/layers/mountains.png"
import NearClouds from "../../assets/background/layers/near-clouds.png"
import Sky from "../../assets/background/layers/sky.png"
import Trees from "../../assets/background/layers/trees.png"

import style from "./styles/Background.module.sass"

const Background = () => {
    const LAYERS: string[] = [
        FarClouds,
        FarMountains,
        Mountains,
        NearClouds,
        Sky,
        Trees
    ]

    function getLayers(): JSX.Element {
        return (
            <For each={LAYERS}>
                {(layer) => (
                    <div class={style.layer}>
                        <img src={layer}/>
                    </div>
                )}
            </For>
        )
    }

    return (
        <div class={style.background}>
            {getLayers()}
        </div>
    );
};

export default Background
