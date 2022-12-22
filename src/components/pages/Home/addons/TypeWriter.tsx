import {createSignal, onCleanup} from "solid-js"
import {styled} from "solid-styled-components"

interface TypeWrite {
    GREETS: string
    INTERVAL: number
    DELETION_DELAY: number
}

const Title = styled("h2")`
    &::after {
        content: "|";
        animation: blink 1s step-end infinite;
    }

    @keyframes blink {
        from,
        to {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }
`;

const TypeWriter = (props: TypeWrite) => {
    enum State {
        Typing,
        Deleting
    }

    const [mainTitle, setMainTitle] = createSignal('')
    const [typing, setTyping] = createSignal(
        State.Typing
    )

    function titleLength(): number {
        return mainTitle().length
    }

    const interval: number = setInterval(() => {
        switch (typing()) {
            case State.Typing:
                if (mainTitle() !== props.GREETS) {
                    setMainTitle(
                        props.GREETS.slice(
                            0, titleLength() + 1
                        )
                    )
                } else {
                    new Promise(
                        (resolve) => setTimeout(
                            resolve, props.DELETION_DELAY
                        )
                    ).then(() =>
                        setTyping(
                            State.Deleting
                        )
                    )
                }
                break
            case State.Deleting:
                if (titleLength() != 0) {
                    setMainTitle(
                        props.GREETS.slice(
                            0, titleLength() - 1
                        )
                    )
                } else setTyping(
                    State.Typing
                )
                break
        }
    }, props.INTERVAL)

    onCleanup(() => clearInterval(interval))

    return (
        <Title textContent={mainTitle()} title={mainTitle()} />
    )
}

export default TypeWriter