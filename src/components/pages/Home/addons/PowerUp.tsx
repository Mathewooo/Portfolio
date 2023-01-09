import {styled} from "solid-styled-components"
import {
    Standing, Transition, Stance_0,
    Stance_1, SSBK_0, SSBK_1
} from "~/assets/power-up/PowerUp"

export default function PowerUp() {
    const Image = styled.img`
        width: 11rem;
        filter: drop-shadow(
            40px 40px 0 rgba(17, 12, 46, 0.15)
        );
    `;

    return (
        <Image src={Standing}/>
    )
}

