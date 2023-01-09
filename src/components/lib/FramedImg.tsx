import {styled} from "solid-styled-components"

interface Image {
    SRC: string
    ALT: string
    CLASS: string
}

const FramedImg = (props: Image) => {
    const padding: string = "10px"
    const color: string = "white"

    const Image = styled.img`
        padding: ${padding};
        border: calc(2 * ${padding}) solid #0000;
        background: conic-gradient(
                from 90deg at 1px 1px, #0000 25%, ${color} 0
        );
    `;

    return (
        <Image class={props.CLASS}
               src={props.SRC}
               alt={props.ALT}
        />
    )
}

export default FramedImg