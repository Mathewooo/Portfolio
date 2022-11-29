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

const Home: Component = () => {
    const greetings: string = "Hello I am Matt!"
    const [mainTitle, setMainTitle] = createSignal("")
    const [typing, setTyping] = createSignal(State.Typing);

    const interval: number = setInterval(() => {
        if (typing() === State.Typing && mainTitle() !== greetings) {
            setMainTitle(
                greetings.slice(0, mainTitle().length + 1)
            );
        } else if (mainTitle() === greetings
            && typing() === State.Typing
        ) {
            sleep(2000).then(() => {
                setTyping(
                    State.Deleting
                )
            })
        } else if ((mainTitle() === greetings && typing() === State.Deleting)
            || typing() === State.Deleting
        ) {
            setMainTitle(
                greetings.slice(0, mainTitle().length - 1)
            );
            if (mainTitle().length <= 2) {
                setTyping(
                    State.Typing
                )
            }
        }
    }, 100);

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
