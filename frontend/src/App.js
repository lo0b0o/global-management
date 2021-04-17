import './App.css';
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import OrderScreen from "./screens/OrderScreen";
import Footer from "./components/Footer";
import {Container} from "react-bootstrap";
import {BrowserRouter as Router, Route} from "react-router-dom"


function App() {
    return (
        <>
            <Router>
                <Header/>
                <main>
                    <Container>
                        <Route path='/products' component={ProductScreen}/>
                        <Route path='/orders' component={OrderScreen}/>
                        <Route path='/' component={HomeScreen} exact/>
                    </Container>
                </main>
                <Footer/></Router>

        </>
    );
}

export default App;
