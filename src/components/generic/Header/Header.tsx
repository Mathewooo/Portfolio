import {createSignal, Show, For, JSX, onMount} from 'solid-js'
import {A} from "solid-start"
import {WindowEventListener} from "@solid-primitives/event-listener";
import './Header.sass'

const TITLE: string = "Matt."

const LINKS: [string, string, boolean][] = [
    ["/", "Home", false],
    ["/skills", "Skills", false],
    ["/projects", "Projects", false],
    ["/", "Let's Connect!", true]
]

const pixelsUntilChange: number = 720

export default function Header() {
    const breakPoint = (): boolean => {
        return window.innerWidth
            <= pixelsUntilChange;
    }

    const handleMenu = () => setActive(
        !active()
    )

    const [active, setActive] = createSignal(false)
    const [canChange, setCanChange] = createSignal()

    const listener = (): JSX.Element => {
        return <WindowEventListener onResize={
            () => {
                setCanChange(breakPoint)
                if (!breakPoint && active()) {
                    setActive(!active())
                }
            }
        }/>
    }

    function getLinks(
        mobile: boolean
    ): JSX.Element {
        return (
            <menu classList={{
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
            </menu>
        )
    }

    return <>
        {listener()}
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
    </>
}

