import type {Component} from 'solid-js'
import style from './styles/Home.module.sass'
import TypeWriter from '../generic/TypeWriter'

const Home: Component = () => {
    return (
        <main class={style.home}>
            <article>
                <TypeWriter GREETS={
                    "Hi I'm Matt!"
                } INTERVAL={125} DELETION_DELAY={3000} />
            </article>
        </main>
    );
};

export default Home;
