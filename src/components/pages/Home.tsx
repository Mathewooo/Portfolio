import type {Component} from 'solid-js'
import style from './styles/Home.module.sass'
import TypeWriter from '../generic/TypeWriter'

const Home: Component = () => {
    return (
        <main class={style.home}>
            <article>
                <div class={style.greets}>
                    <TypeWriter GREETS={
                        "Hi I'm Matt!"
                    } INTERVAL={125} DELETION_DELAY={3000} />
                </div>
            </article>
        </main>
    );
};

export default Home;
