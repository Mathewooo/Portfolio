import {Style, PowerUp, TypeWriter} from "~/components/pages/Home/Home"
import Page from '~/components/Page'
import Fancy from "~/components/lib/Fancy"

class Home extends Page {
    article = () => {
        return (
            <article class={Style.container}>
                <section class={Style.item}>
                    <Fancy TITLE={"Digital craftsman."}/>
                    <div class={Style.greets}>
                        <TypeWriter GREETS={
                            "Hi I'm Matt!"
                        } INTERVAL={125} DELETION_DELAY={3000}/>
                    </div>
                    <div class={Style.introduction}>
                        <p>
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
                            model
                            text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                        </p>
                    </div>
                </section>
                <section class={Style.item}>
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

export default () => {
    return (
        new Home().buildPage()
    )
}
