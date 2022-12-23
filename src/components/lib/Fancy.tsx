import Svg from "~/assets/title.svg"
import {styled} from "solid-styled-components"

interface Fancy {
    TITLE: string
}

const Title = styled("span")`
    background-image: url('${Svg}');
    background-size: 110% auto;
    background-position: center;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
`;

//TODO make changeable colours
const Fancy = (props: Fancy) => {
    return (
        <Title>
            {props.TITLE}
        </Title>
    )
}

export default Fancy