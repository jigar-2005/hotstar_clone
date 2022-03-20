import React from 'react'
import PopularShows from '../AllVideoCategory/PopularShows/PopularShows';
import LatestAndTrending from '../AllVideoCategory/LatestAndTrending/LatestAndTrending';
import MoviesRecommended from '../AllVideoCategory/MoviesRecommended/MoviesRecommended';


function Homepage() {
    return (
        <>
            <div className="container-fluid mb-5">
                <div className='AllCategoryVideo px-3'>
                    <LatestAndTrending />
                    <PopularShows />
                    <MoviesRecommended />
                </div>
            </div>
        </>
    );
}
export default Homepage;
