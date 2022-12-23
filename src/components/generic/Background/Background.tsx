import {For, JSX, Component} from 'solid-js'
import {
    FarClouds, FarMountains, Mountains,
    NearClouds, Sky, Trees
} from "~/assets/background/Background";
import "./Background.sass"

interface Background {
    ARTICLE: Component,
    CONTENT: Component
}

export default function Background(props: Background) {
    const LAYERS: [string, number][] = [
        [Sky, -6],
        [FarClouds, -5],
        [NearClouds, -4],
        [FarMountains, -3],
        [Mountains, -2],
        [Trees, -1]
    ]

    function getLayers(): JSX.Element {
        return (
            <For each={LAYERS}>
                {(layer, i) => (
                    <div class={
                        `layer ${"layer_" + (i() + 1)}`
                    } style={{
                        "background-image": `url('${layer[0]}')`,
                        "z-index": `${layer[1] - 1}`
                    }}/>
                )}
            </For>
        )
    }

    const Article = props.ARTICLE,
        Content = props.CONTENT

    return (
        <main class="background">
            {getLayers()}
            <Article/>
            <div class="cover">
                <Content/>
            </div>
        </main>
    );
};