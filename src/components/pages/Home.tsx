import type {Component} from 'solid-js'
import style from './styles/Home.module.sass'
import TypeWriter from '../generic/TypeWriter'

const Home: Component = () => {
    return (
        <article class={style.row}>
            <section class={style.col}>
                <h1>Welcome to my portfolio!</h1>
                <div class={style.greets}>
                    <TypeWriter GREETS={
                        "Hi I'm Matt!"
                    } INTERVAL={125} DELETION_DELAY={3000}/>
                </div>
                <p>
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                    versions have evolved over the years, sometimes by accident, sometimes on purpose.
                </p>
            </section>
        </article>
    );
};

export default Home;