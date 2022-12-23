import {Suspense} from "solid-js"
import {
    Body,
    ErrorBoundary,
    FileRoutes,
    Head,
    Html,
    Meta,
    Routes,
    Scripts,
    Title,
} from "solid-start"
import Header from "~/components/generic/Header/Header"
import Footer from "~/components/generic/Footer/Footer"
import "./init/root.sass"

export default function Root() {
    return (
        <Html lang="en">
            <Head>
                <Title>Matt</Title>
                <Meta charset="utf-8"/>
                <Meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Body>
                <Suspense>
                    <ErrorBoundary>
                        <Header/>
                        <Routes>
                            <FileRoutes/>
                        </Routes>
                        <Footer/>
                    </ErrorBoundary>
                </Suspense>
                <Scripts/>
            </Body>
        </Html>
    )
}
