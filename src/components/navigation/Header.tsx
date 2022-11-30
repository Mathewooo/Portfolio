import type {Component} from 'solid-js'
import {A} from "@solidjs/router"

import style from './styles/Header.module.sass'

const App: Component = () => {
    return (
        <header class={style.navigation}>
            <h1>Logo</h1>
            <nav class={style.list}>
                <ul>
                    <li><A href="/">Home</A></li>
                    <li><A href="/skills">Skills</A></li>
                    <li><A href="/projects">Projects</A></li>
                </ul>
            </nav>
        </header>
    );
};

export default App;