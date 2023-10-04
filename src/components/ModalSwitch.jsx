
import { useLocation, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Gallery from './Gallery'
import ImageView from './ImageView'
import Modal from './Modal'
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'

export default function ModalSwitch() {
    let location = useLocation();
    let background = location.state && location.state.background;
 let useMatch=useRouteMatch()
 console.log(useMatch);
    console.log(background);
    return (
        <div>
            <Switch location={background || location}>
                <Route exact path="/" children={<Home />} />
                <Route path="/gallery" children={<Gallery />} />
                <Route path="/img/:id" children={<ImageView />} />
            </Switch>

            {/* Show the modal when a background page is set */}
            {background && <Route path="/img/:id" children={<Modal />} />}
        </div>
    )
}
