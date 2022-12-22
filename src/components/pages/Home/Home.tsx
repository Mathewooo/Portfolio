import style from './Home.module.sass'
import TypeWriter from './addons/TypeWriter'
import PowerUp from "./addons/PowerUp";
import {Page} from '../../Page'

class Home extends Page {
    article = () => {
        return (
            <article class={style.container}>
                <section class={style.item}>
                    <cite>Digital craftsman.</cite>
                    <div class={style.greets}>
                        <TypeWriter GREETS={
                            "Hi I'm Matt!"
                        } INTERVAL={125} DELETION_DELAY={3000}/>
                    </div>
                    <p>
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
                        model
                        text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                        Various
                        versions have evolved over the years, sometimes by accident, sometimes on purpose.
                    </p>
                </section>
                <section class={style.item}>
                    {PowerUp}
                </section>
            </article>
        )
    }

    content = () => {
        return (
            <article>
                <section>
                    <h1>Something about me</h1>
                </section>
            </article>
        )
    }
}

export default new Home()
    .buildPage()