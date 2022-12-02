import type {Component} from 'solid-js'
import {createSignal, Show, For} from 'solid-js'
import {A} from "@solidjs/router"
import './styles/Header.sass'

const TITLE: string = "Matt."

const LINKS: [string, string][] = [
    ["/", "Home"],
    ["/skills", "Skills"],
    ["/projects", "Projects"],
]

const pixelsUntilChange: number = 650;

const App: Component = () => {
    const checkWindowSize = (): boolean => {
        return window.innerWidth
            < pixelsUntilChange;
    }

    const [active, setActive] = createSignal(false)
    const [canChange, setCanChange] = createSignal(
        checkWindowSize()
    )

    onresize = () => {
        setCanChange(
            checkWindowSize()
        )
    };

    const handleMenu = () => setActive(
        !active()
    )

    return (
        <header class='navigation'>
            <h1>{TITLE.toUpperCase()}</h1>
            <nav>
                <ul classList={{
                    mobileList: canChange(),
                    list: !canChange()
                }}>
                    <For each={LINKS}>
                        {(link) => (
                            <li>
                                <A href={link[0]}>{
                                    link[1]
                                }</A>
                            </li>
                        )}
                    </For>
                </ul>
                <Show when={canChange()} keyed>
                    <div classList={{
                        active: active(),
                        menu: true
                    }} onClick={handleMenu}>
                        <div>
                            <span/>
                        </div>
                    </div>
                </Show>
            </nav>
        </header>
    );
};

export default App;