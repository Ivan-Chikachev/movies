import './App.css';
import Page from "./components/Page";
import {PageState} from "./context/Page/PageState";

function App() {
    return (
        <div className="wrapper">
            <PageState>
                <Page/>
            </PageState>
        </div>
    );
}

export default App;
