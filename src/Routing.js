import React from 'react'
import Player from './Player/Player';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from './Homepage/Homepage';
import Header from './Header/Header';
import SingleCategoryVideo from './SingleCategoryVideo/SingleCategoryVideo';
import SearchResult from './SearchResult/SearchResult';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import SingleVideo from './SingleVideo/SingleVideo';


function Routing() {
    return (
        <div style={{ overflowX: "hidden" }}>
            <Router>
                <Route exact path="/">
                    <Header />
                    <div style={{ backgroundColor: "#0C111B" }}>
                        <Homepage />
                        <Footer />
                    </div>
                </Route>
                {/* <Route exact path="/player">
                    <div>
                        <Player />
                    </div>
                </Route> */}
                <Route exact path="/search_result">
                    <Header />
                    <div style={{ backgroundColor: "#192133" }}>
                        <SearchResult />
                        <Footer />
                    </div>
                </Route>
                <Route exact path="/single_category">
                    <Header />
                    <div style={{ backgroundColor: "#192133" }}>
                        <SingleCategoryVideo />
                        <Footer />
                    </div>
                </Route>
                <Route exact path="/login">
                    <Header />
                    <div style={{ backgroundColor: "#192133", height:"100vh", overflow:"hidden" }}>
                        <Login />
                    </div>
                </Route>
                <Route exact path="/single_video">
                    <Header />
                    <div style={{ backgroundColor: "#192133" }}>
                        <SingleVideo />
                        <Footer />
                    </div>
                </Route>
            </Router>
        </div>
    );
}
export default Routing;
