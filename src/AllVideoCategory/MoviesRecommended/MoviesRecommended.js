import React from 'react'
import '../AllCategoryVideo.css'
import { Link } from 'react-router-dom'


function MoviesRecommended() {
    return (
        <>
            <div id="MoviesRecommendedControls" className="carousel slide" data-bs-interval="false">
                <div className="carousel-inner">
                    <p className='pt-3' style={{ fontSize: "28px" }}><b><Link to="/single_category" style={{ textDecoration: "none", color: "white" }}>Movies Recommended For You</Link></b></p>
                    <div className="carousel-item zoom_on_hover active">
                        <div className="row">
                            <div className="col carousel_item_1 pb-4">
                                <Link to="/">
                                    <div className="video_thumbnail">
                                        <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8812/1148812-v-93639980824a" alt="#" style={{ height: "275px" }} />
                                        <div className='w-100 px-2 video_description'>
                                            <h6>Turning Red</h6>
                                            <p style={{ fontSize: "10px", marginTop: "-5px" }}>1 hr 39 min * 2022 Mei Lee, a confident, dorky 13-year-old, tries to balance friends, family, the chaos of adolescence and an uncontrollable ability to poof into a giant red panda.</p>
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</Link><br />
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-plus"></i> ADD TO WATCHLIST</Link>
                                        </div>
                                    </div>
                                    {/* <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8812/1148812-v-93639980824a" alt="#" style={{ height: "275px" }} /> */}
                                </Link>
                            </div>
                            <div className="col carousel_item_2 pb-4">
                                <Link to="/">
                                    <div className="video_thumbnail">
                                        <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1x/sources/r1/cms/prod/4378/1124378-v-fd102213bb26" alt="#" style={{ height: "275px" }} />
                                        <div className='w-100 px-2 video_description'>
                                            <h6>Turning Red</h6>
                                            <p style={{ fontSize: "10px", marginTop: "-5px" }}>1 hr 39 min * 2022 Mei Lee, a confident, dorky 13-year-old, tries to balance friends, family, the chaos of adolescence and an uncontrollable ability to poof into a giant red panda.</p>
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</Link><br />
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-plus"></i> ADD TO WATCHLIST</Link>
                                        </div>
                                    </div>
                                    {/* <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1x/sources/r1/cms/prod/4378/1124378-v-fd102213bb26" alt="#" style={{ height: "275px" }} /> */}
                                </Link>
                            </div>
                            <div className="col carousel_item_3 pb-4">
                                <Link to="/">
                                    <div className="video_thumbnail">
                                        <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2733/1122733-v-5df3bdae2d7a" alt="#" style={{ height: "275px" }} />
                                        <div className='w-100 px-2 video_description'>
                                            <h6>Turning Red</h6>
                                            <p style={{ fontSize: "10px", marginTop: "-5px" }}>1 hr 39 min * 2022 Mei Lee, a confident, dorky 13-year-old, tries to balance friends, family, the chaos of adolescence and an uncontrollable ability to poof into a giant red panda.</p>
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</Link><br />
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-plus"></i> ADD TO WATCHLIST</Link>
                                        </div>
                                    </div>
                                    {/* <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2733/1122733-v-5df3bdae2d7a" alt="#" style={{ height: "275px" }} /> */}
                                </Link>
                            </div>
                            <div className="col carousel_item_4 pb-4">
                                <Link to="/">
                                    <div className="video_thumbnail">
                                        <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6179/1116179-v-ea8bc79afc48" alt="#" style={{ height: "275px" }} />
                                        <div className='w-100 px-2 video_description'>
                                            <h6>Turning Red</h6>
                                            <p style={{ fontSize: "10px", marginTop: "-5px" }}>1 hr 39 min * 2022 Mei Lee, a confident, dorky 13-year-old, tries to balance friends, family, the chaos of adolescence and an uncontrollable ability to poof into a giant red panda.</p>
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</Link><br />
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-plus"></i> ADD TO WATCHLIST</Link>
                                        </div>
                                    </div>
                                    {/* <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6179/1116179-v-ea8bc79afc48" alt="#" style={{ height: "275px" }} /> */}
                                </Link>
                            </div>
                            <div className="col carousel_item_5 pb-4">
                                <Link to="/">
                                    <div className="video_thumbnail">
                                        <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1919/1111919-v-f73a6f4d8b98" alt="#" style={{ height: "275px" }} />
                                        <div className='w-100 px-2 video_description'>
                                            <h6>Turning Red</h6>
                                            <p style={{ fontSize: "10px", marginTop: "-5px" }}>1 hr 39 min * 2022 Mei Lee, a confident, dorky 13-year-old, tries to balance friends, family, the chaos of adolescence and an uncontrollable ability to poof into a giant red panda.</p>
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</Link><br />
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-plus"></i> ADD TO WATCHLIST</Link>
                                        </div>
                                    </div>
                                    {/* <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1919/1111919-v-f73a6f4d8b98" alt="#" style={{ height: "275px" }} /> */}
                                </Link>
                            </div>
                            <div className="col carousel_item_6 pb-4">
                                <Link to="/">
                                    <div className="video_thumbnail">
                                        <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9896/1109896-v-e064824cd9fd" alt="#" style={{ height: "275px" }} />
                                        <div className='w-100 px-2 video_description'>
                                            <h6>Turning Red</h6>
                                            <p style={{ fontSize: "10px", marginTop: "-5px" }}>1 hr 39 min * 2022 Mei Lee, a confident, dorky 13-year-old, tries to balance friends, family, the chaos of adolescence and an uncontrollable ability to poof into a giant red panda.</p>
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</Link><br />
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-plus"></i> ADD TO WATCHLIST</Link>
                                        </div>
                                    </div>
                                    {/* <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9896/1109896-v-e064824cd9fd" alt="#" style={{ height: "275px" }} /> */}
                                </Link>
                            </div>
                            <div className="col carousel_item_7 pb-4">
                                <Link to="/">
                                    <div className="video_thumbnail">
                                        <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6716/1106716-v-a0a306c60795" alt="#" style={{ height: "275px" }} />
                                        <div className='w-100 px-2 video_description'>
                                            <h6>Turning Red</h6>
                                            <p style={{ fontSize: "10px", marginTop: "-5px" }}>1 hr 39 min * 2022 Mei Lee, a confident, dorky 13-year-old, tries to balance friends, family, the chaos of adolescence and an uncontrollable ability to poof into a giant red panda.</p>
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</Link><br />
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-plus"></i> ADD TO WATCHLIST</Link>
                                        </div>
                                    </div>
                                    {/* <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6716/1106716-v-a0a306c60795" alt="#" style={{ height: "275px" }} /> */}
                                </Link>
                            </div>
                            <div className="col carousel_item_8 pb-4">
                                <Link to="/">
                                    <div className="video_thumbnail">
                                        <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1545/1101545-v-3125e1756af8" alt="#" style={{ height: "275px" }} />
                                        <div className='w-100 px-2 video_description'>
                                            <h6>Turning Red</h6>
                                            <p style={{ fontSize: "10px", marginTop: "-5px" }}>1 hr 39 min * 2022 Mei Lee, a confident, dorky 13-year-old, tries to balance friends, family, the chaos of adolescence and an uncontrollable ability to poof into a giant red panda.</p>
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</Link><br />
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-plus"></i> ADD TO WATCHLIST</Link>
                                        </div>
                                    </div>
                                    {/* <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1545/1101545-v-3125e1756af8" alt="#" style={{ height: "275px" }} /> */}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item zoom_on_hover">
                        <div className="row">
                            <div className="col carousel_item_1 pb-4">
                                <Link to="/">
                                    <div className="video_thumbnail">
                                        <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8812/1148812-v-93639980824a" alt="#" style={{ height: "275px" }} />
                                        <div className='w-100 px-2 video_description'>
                                            <h6>Turning Red</h6>
                                            <p style={{ fontSize: "10px", marginTop: "-5px" }}>1 hr 39 min * 2022 Mei Lee, a confident, dorky 13-year-old, tries to balance friends, family, the chaos of adolescence and an uncontrollable ability to poof into a giant red panda.</p>
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</Link><br />
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-plus"></i> ADD TO WATCHLIST</Link>
                                        </div>
                                    </div>
                                    {/* <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8812/1148812-v-93639980824a" alt="#" style={{ height: "275px" }} /> */}
                                </Link>
                            </div>
                            <div className="col carousel_item_2 pb-4">
                                <Link to="/">
                                    <div className="video_thumbnail">
                                        <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1x/sources/r1/cms/prod/4378/1124378-v-fd102213bb26" alt="#" style={{ height: "275px" }} />
                                        <div className='w-100 px-2 video_description'>
                                            <h6>Turning Red</h6>
                                            <p style={{ fontSize: "10px", marginTop: "-5px" }}>1 hr 39 min * 2022 Mei Lee, a confident, dorky 13-year-old, tries to balance friends, family, the chaos of adolescence and an uncontrollable ability to poof into a giant red panda.</p>
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</Link><br />
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-plus"></i> ADD TO WATCHLIST</Link>
                                        </div>
                                    </div>
                                    {/* <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1x/sources/r1/cms/prod/4378/1124378-v-fd102213bb26" alt="#" style={{ height: "275px" }} /> */}
                                </Link>
                            </div>
                            <div className="col carousel_item_3 pb-4">
                                <Link to="/">
                                    <div className="video_thumbnail">
                                        <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2733/1122733-v-5df3bdae2d7a" alt="#" style={{ height: "275px" }} />
                                        <div className='w-100 px-2 video_description'>
                                            <h6>Turning Red</h6>
                                            <p style={{ fontSize: "10px", marginTop: "-5px" }}>1 hr 39 min * 2022 Mei Lee, a confident, dorky 13-year-old, tries to balance friends, family, the chaos of adolescence and an uncontrollable ability to poof into a giant red panda.</p>
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</Link><br />
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-plus"></i> ADD TO WATCHLIST</Link>
                                        </div>
                                    </div>
                                    {/* <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2733/1122733-v-5df3bdae2d7a" alt="#" style={{ height: "275px" }} /> */}
                                </Link>
                            </div>
                            <div className="col carousel_item_4 pb-4">
                                <Link to="/">
                                    <div className="video_thumbnail">
                                        <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6179/1116179-v-ea8bc79afc48" alt="#" style={{ height: "275px" }} />
                                        <div className='w-100 px-2 video_description'>
                                            <h6>Turning Red</h6>
                                            <p style={{ fontSize: "10px", marginTop: "-5px" }}>1 hr 39 min * 2022 Mei Lee, a confident, dorky 13-year-old, tries to balance friends, family, the chaos of adolescence and an uncontrollable ability to poof into a giant red panda.</p>
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</Link><br />
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-plus"></i> ADD TO WATCHLIST</Link>
                                        </div>
                                    </div>
                                    {/* <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6179/1116179-v-ea8bc79afc48" alt="#" style={{ height: "275px" }} /> */}
                                </Link>
                            </div>
                            <div className="col carousel_item_5 pb-4">
                                <Link to="/">
                                    <div className="video_thumbnail">
                                        <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1919/1111919-v-f73a6f4d8b98" alt="#" style={{ height: "275px" }} />
                                        <div className='w-100 px-2 video_description'>
                                            <h6>Turning Red</h6>
                                            <p style={{ fontSize: "10px", marginTop: "-5px" }}>1 hr 39 min * 2022 Mei Lee, a confident, dorky 13-year-old, tries to balance friends, family, the chaos of adolescence and an uncontrollable ability to poof into a giant red panda.</p>
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</Link><br />
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-plus"></i> ADD TO WATCHLIST</Link>
                                        </div>
                                    </div>
                                    {/* <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1919/1111919-v-f73a6f4d8b98" alt="#" style={{ height: "275px" }} /> */}
                                </Link>
                            </div>
                            <div className="col carousel_item_6 pb-4">
                                <Link to="/">
                                    <div className="video_thumbnail">
                                        <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9896/1109896-v-e064824cd9fd" alt="#" style={{ height: "275px" }} />
                                        <div className='w-100 px-2 video_description'>
                                            <h6>Turning Red</h6>
                                            <p style={{ fontSize: "10px", marginTop: "-5px" }}>1 hr 39 min * 2022 Mei Lee, a confident, dorky 13-year-old, tries to balance friends, family, the chaos of adolescence and an uncontrollable ability to poof into a giant red panda.</p>
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</Link><br />
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-plus"></i> ADD TO WATCHLIST</Link>
                                        </div>
                                    </div>
                                    {/* <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9896/1109896-v-e064824cd9fd" alt="#" style={{ height: "275px" }} /> */}
                                </Link>
                            </div>
                            <div className="col carousel_item_7 pb-4">
                                <Link to="/">
                                    <div className="video_thumbnail">
                                        <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6716/1106716-v-a0a306c60795" alt="#" style={{ height: "275px" }} />
                                        <div className='w-100 px-2 video_description'>
                                            <h6>Turning Red</h6>
                                            <p style={{ fontSize: "10px", marginTop: "-5px" }}>1 hr 39 min * 2022 Mei Lee, a confident, dorky 13-year-old, tries to balance friends, family, the chaos of adolescence and an uncontrollable ability to poof into a giant red panda.</p>
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</Link><br />
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-plus"></i> ADD TO WATCHLIST</Link>
                                        </div>
                                    </div>
                                    {/* <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6716/1106716-v-a0a306c60795" alt="#" style={{ height: "275px" }} /> */}
                                </Link>
                            </div>
                            <div className="col carousel_item_8 pb-4">
                                <Link to="/">
                                    <div className="video_thumbnail">
                                        <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1545/1101545-v-3125e1756af8" alt="#" style={{ height: "275px" }} />
                                        <div className='w-100 px-2 video_description'>
                                            <h6>Turning Red</h6>
                                            <p style={{ fontSize: "10px", marginTop: "-5px" }}>1 hr 39 min * 2022 Mei Lee, a confident, dorky 13-year-old, tries to balance friends, family, the chaos of adolescence and an uncontrollable ability to poof into a giant red panda.</p>
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</Link><br />
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-plus"></i> ADD TO WATCHLIST</Link>
                                        </div>
                                    </div>
                                    {/* <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1545/1101545-v-3125e1756af8" alt="#" style={{ height: "275px" }} /> */}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item zoom_on_hover">
                        <div className="row">
                            <div className="col carousel_item_1 pb-4">
                                <Link to="/">
                                    <div className="video_thumbnail">
                                        <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8812/1148812-v-93639980824a" alt="#" style={{ height: "275px" }} />
                                        <div className='w-100 px-2 video_description'>
                                            <h6>Turning Red</h6>
                                            <p style={{ fontSize: "10px", marginTop: "-5px" }}>1 hr 39 min * 2022 Mei Lee, a confident, dorky 13-year-old, tries to balance friends, family, the chaos of adolescence and an uncontrollable ability to poof into a giant red panda.</p>
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</Link><br />
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-plus"></i> ADD TO WATCHLIST</Link>
                                        </div>
                                    </div>
                                    {/* <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8812/1148812-v-93639980824a" alt="#" style={{ height: "275px" }} /> */}
                                </Link>
                            </div>
                            <div className="col carousel_item_2 pb-4">
                                <Link to="/">
                                    <div className="video_thumbnail">
                                        <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1x/sources/r1/cms/prod/4378/1124378-v-fd102213bb26" alt="#" style={{ height: "275px" }} />
                                        <div className='w-100 px-2 video_description'>
                                            <h6>Turning Red</h6>
                                            <p style={{ fontSize: "10px", marginTop: "-5px" }}>1 hr 39 min * 2022 Mei Lee, a confident, dorky 13-year-old, tries to balance friends, family, the chaos of adolescence and an uncontrollable ability to poof into a giant red panda.</p>
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</Link><br />
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-plus"></i> ADD TO WATCHLIST</Link>
                                        </div>
                                    </div>
                                    {/* <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1x/sources/r1/cms/prod/4378/1124378-v-fd102213bb26" alt="#" style={{ height: "275px" }} /> */}
                                </Link>
                            </div>
                            <div className="col carousel_item_3 pb-4">
                                <Link to="/">
                                    <div className="video_thumbnail">
                                        <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2733/1122733-v-5df3bdae2d7a" alt="#" style={{ height: "275px" }} />
                                        <div className='w-100 px-2 video_description'>
                                            <h6>Turning Red</h6>
                                            <p style={{ fontSize: "10px", marginTop: "-5px" }}>1 hr 39 min * 2022 Mei Lee, a confident, dorky 13-year-old, tries to balance friends, family, the chaos of adolescence and an uncontrollable ability to poof into a giant red panda.</p>
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</Link><br />
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-plus"></i> ADD TO WATCHLIST</Link>
                                        </div>
                                    </div>
                                    {/* <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2733/1122733-v-5df3bdae2d7a" alt="#" style={{ height: "275px" }} /> */}
                                </Link>
                            </div>
                            <div className="col carousel_item_4 pb-4">
                                <Link to="/">
                                    <div className="video_thumbnail">
                                        <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6179/1116179-v-ea8bc79afc48" alt="#" style={{ height: "275px" }} />
                                        <div className='w-100 px-2 video_description'>
                                            <h6>Turning Red</h6>
                                            <p style={{ fontSize: "10px", marginTop: "-5px" }}>1 hr 39 min * 2022 Mei Lee, a confident, dorky 13-year-old, tries to balance friends, family, the chaos of adolescence and an uncontrollable ability to poof into a giant red panda.</p>
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</Link><br />
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-plus"></i> ADD TO WATCHLIST</Link>
                                        </div>
                                    </div>
                                    {/* <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6179/1116179-v-ea8bc79afc48" alt="#" style={{ height: "275px" }} /> */}
                                </Link>
                            </div>
                            <div className="col carousel_item_5 pb-4">
                                <Link to="/">
                                    <div className="video_thumbnail">
                                        <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1919/1111919-v-f73a6f4d8b98" alt="#" style={{ height: "275px" }} />
                                        <div className='w-100 px-2 video_description'>
                                            <h6>Turning Red</h6>
                                            <p style={{ fontSize: "10px", marginTop: "-5px" }}>1 hr 39 min * 2022 Mei Lee, a confident, dorky 13-year-old, tries to balance friends, family, the chaos of adolescence and an uncontrollable ability to poof into a giant red panda.</p>
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</Link><br />
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-plus"></i> ADD TO WATCHLIST</Link>
                                        </div>
                                    </div>
                                    {/* <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1919/1111919-v-f73a6f4d8b98" alt="#" style={{ height: "275px" }} /> */}
                                </Link>
                            </div>
                            <div className="col carousel_item_6 pb-4">
                                <Link to="/">
                                    <div className="video_thumbnail">
                                        <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9896/1109896-v-e064824cd9fd" alt="#" style={{ height: "275px" }} />
                                        <div className='w-100 px-2 video_description'>
                                            <h6>Turning Red</h6>
                                            <p style={{ fontSize: "10px", marginTop: "-5px" }}>1 hr 39 min * 2022 Mei Lee, a confident, dorky 13-year-old, tries to balance friends, family, the chaos of adolescence and an uncontrollable ability to poof into a giant red panda.</p>
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</Link><br />
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-plus"></i> ADD TO WATCHLIST</Link>
                                        </div>
                                    </div>
                                    {/* <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9896/1109896-v-e064824cd9fd" alt="#" style={{ height: "275px" }} /> */}
                                </Link>
                            </div>
                            <div className="col carousel_item_7 pb-4">
                                <Link to="/">
                                    <div className="video_thumbnail">
                                        <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6716/1106716-v-a0a306c60795" alt="#" style={{ height: "275px" }} />
                                        <div className='w-100 px-2 video_description'>
                                            <h6>Turning Red</h6>
                                            <p style={{ fontSize: "10px", marginTop: "-5px" }}>1 hr 39 min * 2022 Mei Lee, a confident, dorky 13-year-old, tries to balance friends, family, the chaos of adolescence and an uncontrollable ability to poof into a giant red panda.</p>
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</Link><br />
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-plus"></i> ADD TO WATCHLIST</Link>
                                        </div>
                                    </div>
                                    {/* <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6716/1106716-v-a0a306c60795" alt="#" style={{ height: "275px" }} /> */}
                                </Link>
                            </div>
                            <div className="col carousel_item_8 pb-4">
                                <Link to="/">
                                    <div className="video_thumbnail">
                                        <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1545/1101545-v-3125e1756af8" alt="#" style={{ height: "275px" }} />
                                        <div className='w-100 px-2 video_description'>
                                            <h6>Turning Red</h6>
                                            <p style={{ fontSize: "10px", marginTop: "-5px" }}>1 hr 39 min * 2022 Mei Lee, a confident, dorky 13-year-old, tries to balance friends, family, the chaos of adolescence and an uncontrollable ability to poof into a giant red panda.</p>
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</Link><br />
                                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "10px" }}><i className="fa fa-plus"></i> ADD TO WATCHLIST</Link>
                                        </div>
                                    </div>
                                    {/* <img className="d-block w-100 carousel_item" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1545/1101545-v-3125e1756af8" alt="#" style={{ height: "275px" }} /> */}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#MoviesRecommendedControls" data-bs-slide="prev" style={{ width: "50px", height: "100%" }}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#MoviesRecommendedControls" data-bs-slide="next" style={{ width: "50px", height: "100%" }}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}
export default MoviesRecommended;
