import React, { useEffect, useState } from 'react'
import './SingleCategoryVideo.css'
import { Link, useParams } from 'react-router-dom'
import Footer from '../Footer/Footer';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"


function SingleCategoryVideo(props) {
    const history = useHistory()
    const gettingUserDetails = useSelector((state) => state.Commands.LoginDetails);
    {
        useEffect(() => {
            if (gettingUserDetails.length===0) {
                history.push("/login")
            }
        })
    }

    const { category_id } = useParams();
    const [AllItemOfSingleCategory, setAllItemOfSingleCategory] = useState([])
    const [loading, setloading] = useState(false)
    useEffect(() => {
        fetch(`${props.BaseUrl}/single_category_videos/${category_id}`).then((result) => {
            result.json().then((resp) => {
                setAllItemOfSingleCategory(resp)
                setloading(true)
            })
        })
    }, [])


    return (
        <>
            {loading ?
                <>
                    <div className='SingleCategoryVideo pt-4 mb-5'>
                        <h5 className='text-light px-5'>Popular Shows</h5>
                        <div className="container-fluid px-sm-5">
                            <div className="row hover_effect_on_hover">
                                {
                                    AllItemOfSingleCategory.map((AllItemOfSingleCategory, i) =>
                                        <div className="col-6 col-md-4 col-lg-3 col-xxl-2">
                                            {/* <Link to={`/single_video/5`}> */}
                                            <Link to={`/single_video/${AllItemOfSingleCategory.movie_id}`}>
                                                <div className="Similar_category_video_thumbnail_hover_effect similar_category_video_thumbnail">
                                                    <img src={AllItemOfSingleCategory.movie_cover_image} alt="#" style={{ height: "275px", width: "100%", marginTop: "10px", borderRadius: "10px" }} />
                                                    <div className='w-100 px-2 Similar_category_video_description_hover_effect'>
                                                        <h6>{AllItemOfSingleCategory.movie_title}</h6>
                                                        <p style={{ fontSize: "10px", marginTop: "-5px" }}>{AllItemOfSingleCategory.movie_released} * {AllItemOfSingleCategory.movie_description}</p>
                                                        <h6 style={{ color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</h6><br />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
                :
                <>
                    <div style={{ height: "100vh", overflow: 'hidden' }}>
                        <div class="loading_spinner">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        <div className="fixed-bottom">
                            <Footer />
                        </div>
                    </div>
                </>
            }
        </>
    );
}
export default SingleCategoryVideo;





