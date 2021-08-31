import {Router, RouteComponentProps} from "@reach/router";
import {Home} from './pages/home'



let HomePage = (props: RouteComponentProps) => <Home/>;

function App() {
    return (
        <>
            <Router>
                <HomePage path={"/"}/>
            </Router>

        </>
    );
}

export default App;
