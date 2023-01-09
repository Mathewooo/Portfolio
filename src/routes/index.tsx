import {
    Article, Content,
    PowerUp, TypeWriter
} from "~/components/pages/Home/Home"
import Page from '~/components/Page'
import Fancy from "~/components/lib/Fancy"
import Paragraph from "~/components/lib/Paragraph";
import FramedImg from "~/components/lib/FramedImg";
import {Mtb, Ski} from "~/assets/sports/Sports"

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
                    <PowerUp/>
                </section>
            </article>
        )
    }

    content = () => {
        return (
            <article>
                <h1 class={Content.title}>
                    Something about me:
                </h1>
                <div class={Content.container}>
                    <section class={Content.item}>
                        <div class={Content.interests}>
                            <h2>
                                My Interests
                            </h2>
                            <Paragraph isTruthy={false}>
                                I have many interests to which I could appeal, but those which hold a special place in
                                my heart are chiefly those of sport. The ones that I really like and in which I would
                                like to advance in the near future are Mountain Biking and FreeStyle Skiing.
                            </Paragraph>
                        </div>
                    </section>
                    <section class={Content.item}>
                        <div class={Content.imageStack}>
                            <FramedImg CLASS={Content.mtb}
                                       SRC={Mtb}
                                       ALT={"Mountain Biking"}
                            />
                            <FramedImg CLASS={Content.ski}
                                       SRC={Ski}
                                       ALT={"Alpine Skiing"}
                            />
                        </div>
                    </section>
                </div>
            </article>
        )
    }
}

export default () => {
    return (
        new Home().buildPage()
    )
}
