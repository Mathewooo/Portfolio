import {Article, Content, PowerUp, TypeWriter} from "~/components/pages/Home/Home"
import Page from '~/components/Page'
import Fancy from "~/components/lib/Fancy"
import Paragraph from "~/components/lib/Paragraph";

class Home extends Page {
    article = () => {
        return (
            <article class={Article.container}>
                <section class={Article.item}>
                    <Fancy
                        TITLE={
                            "Digital craftsman."
                        } INVERT={"0.75"}
                    />
                    <div class={Article.greets}>
                        <TypeWriter GREETS={
                            "Hi I'm Matt!"
                        } INTERVAL={125} DELETION_DELAY={3000}/>
                    </div>
                    <Paragraph isTruthy={true}>
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                        text, and a search for 'lorem ipsum' will uncover many web sites still in their
                        infancy.
                    </Paragraph>
                </section>
                <section class={Article.item}>
                    {PowerUp}
                </section>
            </article>
        )
    }

    content = () => {
        return (
            <article class={Content.container}>
                <section>
                    <h2>Something about me</h2>
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
