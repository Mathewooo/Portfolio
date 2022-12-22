import type {Component, JSX} from 'solid-js'
import Background from "./generic/Background/Background"

export abstract class Page {
    abstract article: Component
    abstract content: Component

    public buildPage(): Component {
        return <Background
            ARTICLE={this.article}
            CONTENT={this.content}
        /> as (props: {}) => JSX.Element
    }
}