import {render} from 'solid-js/web'
import {Router} from "@solidjs/router"
import App from './components/App'
import Background from "./components/generic/Background"
import './init/index.sass'

render(
    () => (
        <Router>
            <Background/>
            {/* <App/> */}
        </Router>
    ),
    document.getElementById("root") as HTMLElement
);