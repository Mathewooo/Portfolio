import type {Component} from 'solid-js';
import {lazy} from "solid-js";
import {Routes, Route} from "@solidjs/router"

import Header from './navigation/Header'

const Home = lazy(() => import("./pages/Home"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));

const App: Component = () => {
    return <>
        <Header/>
        <Routes>
            <Route path="/" component={Home}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/projects" component={Projects}/>
        </Routes>
    </>
};

export default App;
