import './App.css';
import Page from "./components/Page";
import {PageState} from "./context/Page/PageState";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "./components/About";
import {AboutState} from "./context/Comments/AboutState";

function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <PageState>
                    <AboutState>
                        <Switch>
                            <Route path={'/'} exact component={Page}/>
                            <Route path={'/film'} exact component={About}/>
                        </Switch>
                    </AboutState>
                </PageState>
            </BrowserRouter>
        </div>
    );
}

export default App;
