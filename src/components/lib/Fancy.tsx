import Svg from "~/assets/title.svg"
import {styled} from "solid-styled-components"

interface Fancy {
    TITLE: string
    INVERT: string
}

const Fancy = (props: Fancy) => {
    const Title = styled.span`
        background-image: url('${Svg}');
        background-size: 110% auto;
        background-position: center;
        color: transparent;
        -webkit-background-clip: text;
        filter: invert(${props.INVERT});
        text-transform: uppercase;
    `;

    return (
        <Title>
            {props.TITLE}
        </Title>
    )
}

export default Fancy