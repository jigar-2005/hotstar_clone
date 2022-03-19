import React from 'react'
import Header from '../Header/Header';
import PopularShows from '../AllVideoCategory/PopularShows/PopularShows';
import LatestAndTrending from '../AllVideoCategory/LatestAndTrending/LatestAndTrending';
import MoviesRecommended from '../AllVideoCategory/MoviesRecommended/MoviesRecommended';


function Homepage() {
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className='AllCategoryVideo px-3'>
                    <div className='mb-3'>
                        <LatestAndTrending />
                    </div>
                    <div className='mb-3'>
                        <PopularShows />
                    </div>
                    <div className='mb-3'>
                        <MoviesRecommended />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Homepage;
