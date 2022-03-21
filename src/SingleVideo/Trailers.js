import React from 'react'
import './Trailers.css'
import { Link } from 'react-router-dom'


function Trailers() {
    return (
        <div className='Trailers text-light px-5 pt-5 zoom_on_hover_effect_for_trailers'>
            <h4><Link to="/" style={{textDecoration:"none", color:"white"}}>Trailers & Extras</Link></h4>
            <Link to="/">
                <div className="trailers_video_thumbnail">
                    <img className="d-block" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3668/593668-h" alt="#" style={{ height: "275px", width: "206px" }} />
                    <div className='w-100 px-2 trailers_video_description'>
                        <h6>Turning Red</h6>
                        <p style={{ fontSize: "10px", marginTop: "-5px" }}>1 hr 39 min * 2022 Mei Lee, a confident, dorky 13-year-old, tries to balance friends, family, the chaos of adolescence and an uncontrollable ability to poof into a giant red panda.</p>
                        <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-plus"></i> ADD TO WATCHLIST</Link>
                    </div>
                </div>
            </Link>
        </div>
    );
}
export default Trailers;
