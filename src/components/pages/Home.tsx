import type {Component} from 'solid-js';
import {createSignal, createEffect, onCleanup} from "solid-js";

import style from '../../styles/Home.module.css'

enum State {
    Typing,
    Deleting
}

function sleep(ms: number) {
    return new Promise(
        (resolve) => setTimeout(resolve, ms)
    );
}

const GREETS: string = "Hello I am Matt!"
const INTERVAL: number = 100

const Home: Component = () => {
    const [mainTitle, setMainTitle] = createSignal('')
    const [typing, setTyping] = createSignal(State.Typing);

    const interval: number = setInterval(() => {
        switch (typing()) {
            case State.Typing:
                if (mainTitle() !== GREETS) {
                    setMainTitle(
                        GREETS.slice(0, mainTitle().length + 1)
                    );
                } else {
                    sleep(2000).then(() => {
                        setTyping(
                            State.Deleting
                        )
                    })
                }
                break;
            case State.Deleting:
                setMainTitle(
                    GREETS.slice(0, mainTitle().length - 1)
                );
                if (mainTitle().length <= 1) {
                    setTyping(
                        State.Typing
                    )
                }
                break;
        }
    }, INTERVAL);

    onCleanup(() => clearInterval(interval));

    return (
        <main class={style.home}>
            <article>
                <h2 class={style.mainTitle}>{mainTitle()}</h2>
            </article>
        </main>
    );
};

export default Home;
