import type {Component} from 'solid-js'
import {createSignal, Show, For, JSX} from 'solid-js'
import {A} from "@solidjs/router"
import {makeMediaQueryListener, createMediaQuery} from "@solid-primitives/media";
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
    const breakPoint = createMediaQuery(
        `(max-width: ${pixelsUntilChange}px)`
    )

    const change = makeMediaQueryListener(
        `(max-width: ${pixelsUntilChange}px)`, e => {
            console.log(e.matches);
            if (active()) {
                setActive(!active())
            }
        })

    const [active, setActive] = createSignal(false)

    const handleMenu = () => setActive(
        !active()
    )

    change()

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
                        !breakPoint()
                    } keyed>
                        {getLinks(false)}
                    </Show>
                    <Show when={breakPoint()} keyed>
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
                breakPoint() && active()
            } keyed>
                {getLinks(true)}
            </Show>
        </header>
    )
}

export default Header