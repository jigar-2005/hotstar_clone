import React from 'react'
import './SingleVideo.css'
import { Link } from 'react-router-dom'
import Trailers from './Trailers';
import SimilarCategoryVideo from './SimilarCategoryVideo';


function SingleVideo() {
    return (
        <div className='SingleVideo text-light'>
            <div className="row px-5">
                <div className="col-lg-5 p-5" style={{ backgroundImage: "linear-gradient(to right, #030b17 , #475575)", height: "500px" }}>
                    <h1><Link to="/" style={{ textDecoration: "none", color: "white" }}>Housefull 4</Link></h1>
                    <h4><Link to="/" style={{ textDecoration: "none", color: "rgba(255, 255, 255, 0.7)" }}>2 hr 15 min * 2019 * Comedy * U/A 13+ * Hindi</Link></h4>
                    <p><Link to="/" style={{ textDecoration: "none", color: "rgba(255, 255, 255, 0.7)", fontSize: "18px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</Link></p>
                    <h1><Link to="/" style={{ textDecoration: "none", color: "rgba(255, 255, 255, 0.7)", fontSize: "18px" }}><i class="fa fa-play"></i>&emsp; Watch Now</Link></h1>
                </div>
                <div className="col-12 col-lg-7 p-0">
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3668/593668-h" alt="#" style={{ width: "100%", height: "500px" }} />
                </div>
            </div>
            <Trailers />
            <SimilarCategoryVideo />
        </div>
    );
}
export default SingleVideo;
