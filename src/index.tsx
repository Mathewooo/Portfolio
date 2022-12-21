import {render} from 'solid-js/web'
import {Router} from "@solidjs/router"
import App from './components/App'
import './init/index.sass'

render(
    () => (
        <Router>
            <App/>
        </Router>
    ),
    document.getElementById("root") as HTMLElement
);