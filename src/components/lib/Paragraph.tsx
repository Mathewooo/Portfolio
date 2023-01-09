import {styled} from "solid-styled-components"

const Paragraph = (props: any) => {
    const backdrop_blur: string
        = "backdrop-filter: blur(0.15em) saturate(70%);"

    const Paragraph = styled.p`
        color: white;
        ${props.isTruthy ? backdrop_blur : ""}
        padding: 0.6em;
        border-radius: 0.5em;
        overflow: hidden;
        box-shadow: rgb(33 33 33 / 70%) 0 50px 100px 0;
    `;

    return (
        <Paragraph>
            {props.children}
        </Paragraph>
    )
}

export default Paragraph