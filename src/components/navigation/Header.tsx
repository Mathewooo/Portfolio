import type {Component} from 'solid-js'
import {createSignal, Show, For, JSX} from 'solid-js'
import {A} from "@solidjs/router"
import './styles/Header.sass'

const TITLE: string = "Matt."

const LINKS: [string, string, boolean][] = [
    ["/", "Home", false],
    ["/skills", "Skills", false],
    ["/projects", "Projects", false],
    ["/", "Let's Connect!", true]
]

const pixelsUntilChange: number = 700

const Header: Component = () => {
    const checkWindowSize = (): boolean => {
        return window.innerWidth
            < pixelsUntilChange;
    }

    const [active, setActive] = createSignal(false)
    const [canChange, setCanChange] = createSignal(
        checkWindowSize()
    )

    onresize = () => {
        const isMobile: boolean =
            checkWindowSize()
        setCanChange(
            isMobile
        )
        if (active() && !isMobile) {
            setActive(!active())
        }
    }

    const handleMenu = () => setActive(
        !active()
    )

    function getLinks(
        mobile: boolean
    ): JSX.Element {
        return (
            <ul classList={{
                list: !mobile,
                mobileList: mobile, listAnim: mobile
            }}>
                <For each={LINKS}>
                    {(link) => (
                        <li classList={{
                            social: link[2],
                        }}>
                            <A href={link[0]}>{
                                link[1]
                            }</A>
                        </li>
                    )}
                </For>
            </ul>
        )
    }

    return (
        <header class='navigation'>
            <section>
                <h1>{TITLE.toUpperCase()}</h1>
                <nav>
                    <Show when={
                        !canChange()
                    } keyed>
                        {getLinks(false)}
                    </Show>
                    <Show when={canChange()} keyed>
                        <div classList={{
                            active: active(),
                            menu: true
                        }} onClick={handleMenu}>
                            <span/>
                        </div>
                    </Show>
                </nav>
            </section>
            <Show when={
                canChange() && active()
            } keyed>
                {getLinks(true)}
            </Show>
        </header>
    )
}

export default Header