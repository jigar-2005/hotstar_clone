import React from 'react'
import Player from './Player/Player';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from './Homepage/Homepage';
import Header from './Header/Header';
import SingleCategoryVideo from './SingleCategoryVideo/SingleCategoryVideo';
import SearchResult from './SearchResult/SearchResult';


function Routing() {
    return (
        <div style={{overflowX:"hidden"}}>
        <Router>
            <Route exact path="/">
                <div style={{backgroundColor:"#0C111B"}}>
                    <Homepage />
                </div>
            </Route>
            <Route exact path="/player">
                <div>
                    <Player />
                </div>
            </Route>
            <Route exact path="/search_result">
                <div>
                    <Header />
                    <SearchResult />
                </div>
            </Route>
            <Route exact path="/single_category">
                <div>
                    <Header />
                    <SingleCategoryVideo />
                </div>
            </Route>
        </Router>
        </div>
    );
}
export default Routing;
