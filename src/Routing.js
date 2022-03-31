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
import ConfirmOTP from './Login/ConfirmOTP';
import TrailersPlayer from './TrailersPlayer/TrailersPlayer';
import MovieCategoryVideo from './MovieCategory/MovieCategory';


function Routing() {
    const BASEURL = "http://178.237.56.73:5000"
    return (
        <div style={{ overflowX: "hidden" }}>
            <Router>
                <Route exact path="/single_video/:single_video_id">
                    <Header BaseUrl = {BASEURL} />
                    <div style={{ backgroundColor: "#192133" }}>
                        <SingleVideo BaseUrl = {BASEURL} />
                    </div>
                </Route>
                <Route exact path="/player/:single_video_id">
                    <Header BaseUrl = {BASEURL} />
                    <div style={{ backgroundColor: "#192133" }}>
                        <Player BaseUrl = {BASEURL} />
                    </div>
                </Route>
                <Route exact path="/trailer_player/:single_video_id">
                    <Header BaseUrl = {BASEURL} />
                    <div style={{ backgroundColor: "#192133" }}>
                        <TrailersPlayer BaseUrl = {BASEURL} />
                    </div>
                </Route>
                <Route exact path="/login">
                    <Header BaseUrl = {BASEURL} />
                    <div style={{ height: "100vh", overflow: "hidden" }}>
                        <Login BaseUrl = {BASEURL} />
                    </div>
                </Route>
                <Route exact path="/confirm_otp">
                    <Header BaseUrl = {BASEURL} />
                    <div style={{ backgroundColor: "#192133", height: "100vh", overflow: "hidden" }}>
                        <ConfirmOTP BaseUrl = {BASEURL} />
                    </div>
                </Route>
                <Route exact path="/single_category/:category_id">
                    <Header BaseUrl = {BASEURL} />
                    <div style={{ backgroundColor: "#192133" }}>
                        <SingleCategoryVideo BaseUrl = {BASEURL} />
                    </div>
                </Route>
                <Route exact path="/search_result">
                    <Header BaseUrl = {BASEURL} />
                    <div style={{ backgroundColor: "#192133" }}>
                        <SearchResult BaseUrl = {BASEURL} />
                    </div>
                </Route>
                <Route exact path="/">
                    <Header BaseUrl = {BASEURL} />
                    <div style={{ backgroundColor: "#0C111B" }}>
                        <Homepage />
                    </div>
                </Route>
                <Route exact path="/movie_category/Hindi">
                    <Header BaseUrl = {BASEURL} />
                    <div style={{ backgroundColor: "#192133" }}>
                        <MovieCategoryVideo page="Hindi" />
                    </div>
                </Route>
                <Route exact path="/movie_category/Dubbed">
                    <Header BaseUrl = {BASEURL} />
                    <div style={{ backgroundColor: "#192133" }}>
                        <MovieCategoryVideo page="Dubbed" />
                    </div>
                </Route>
                <Route exact path="/movie_category/WebSeries">
                    <Header BaseUrl = {BASEURL} />
                    <div style={{ backgroundColor: "#192133" }}>
                        <MovieCategoryVideo page="Web Series" />
                    </div>
                </Route>
            </Router>
        </div>
    );
}
export default Routing;
