import type {Component} from 'solid-js';
import {A} from "@solidjs/router"

import style from '../styles/Header.module.css'

const App: Component = () => {
    return (
        <header class={style.navigation}>
            <h1>Logo</h1>
            <nav class={style.list}>
                <ul>
                    <li><A href="/">Home</A></li>
                    <li><A href="/about">About</A></li>
                    <li><A href="/contact">Contact</A></li>
                </ul>
            </nav>
        </header>
    );
};

export default App;