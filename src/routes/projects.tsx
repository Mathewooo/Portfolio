import Page from '~/components/Page'

class Projects extends Page {
    article = () => {
        return (
            <article>

            </article>
        )
    }

    content = () => {
        return (
            <article>

            </article>
        )
    }
}

export default () => {
    return (
        new Projects().buildPage()
    )
}
