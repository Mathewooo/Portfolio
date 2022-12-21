import type {Component} from 'solid-js'
import {lazy} from "solid-js"
import {Routes, Route} from "@solidjs/router"

import Header from './navigation/Header'
import Footer from "./navigation/Footer"

const Home = lazy(() => import("./pages/Home"))
const Skills = lazy(() => import("./pages/Skills"))
const Projects = lazy(() => import("./pages/Projects"))

//TODO make default component using tag `main` with optional centering (taking up 100% height)

const App: Component = () => {
    return <>
        <Header/>
        <Routes>
            <Route path="/" component={Home}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/projects" component={Projects}/>
        </Routes>
        <Footer/>
    </>
}

export default App;
