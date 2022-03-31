import React, { useEffect, useState } from 'react'
import './SingleVideo.css'
import { Link, useParams } from 'react-router-dom'
import Trailers from './Trailers';
import Footer from '../Footer/Footer';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"


function SingleVideo(props) {
    const history = useHistory()
    const gettingUserDetails = useSelector((state) => state.Commands.LoginDetails);
    {
        useEffect(() => {
            if (gettingUserDetails.length===0) {
                history.push("/login")
            }
        })
    }

    const { single_video_id } = useParams();
    const [SingleVideoDetails, setSingleVideoDetails] = useState([])
    const [TrailersData, setTrailersData] = useState([])
    const [loading, setloading] = useState(false)
    useEffect(() => {
        fetch(`${props.BaseUrl}/single_videos/${single_video_id}`).then((result) => {
            result.json().then((resp) => {
                setSingleVideoDetails(resp)
                setTrailersData(resp)
                setloading(true)
            })
        })
    }, [])
    return (
        <>
            {loading ?
                <>
                    {
                        SingleVideoDetails.map((SingleVideoDetails, i) =>
                            <div className='SingleVideo text-light'>
                                <Link to={`/player/${single_video_id}`} style={{textDecoration:"none"}}>
                                <div className="row px-5">
                                    <div className="col-lg-5 p-5 movie_details" style={{ backgroundImage: "linear-gradient(to right, #030b17 , #475575)", height: "500px" }}>
                                        <h1 style={{ color: "white" }}>{SingleVideoDetails.movie_title}</h1>
                                        <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "24px" }}>{SingleVideoDetails.movie_released} * {SingleVideoDetails.movie_description}</p>
                                        <h1 style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "26px" }}><i class="fa fa-play"></i>&emsp; Watch Now</h1>
                                    </div>
                                    <div className="col-12 col-lg-7 p-0 movie_thumbnail">
                                        <img src={SingleVideoDetails.movie_cover_image} alt="#" style={{ width: "100%", height: "500px" }} />
                                    </div>
                                </div>
                                </Link>
                                <Trailers TrailersData={TrailersData} />
                                {/* agar video_url pass karana hai toh ye
                                <Trailers video_url = {SingleVideoDetails.movie_trailer} video_cover_img = {SingleVideoDetails.movie_cover_image} />
                                 */}
                            </div>
                        )
                    }
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
export default SingleVideo;
