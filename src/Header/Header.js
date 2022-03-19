import React from 'react'
import "./Header.css"
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'


function Header() {
    return (
        <>
            <div className="row Header fixed-top">
                <nav className="navbar navbar-expand-lg navbar-light px-0 pb-0">
                    <ul className="col-lg-7 col-sm-6 col-7 mb-0 px-2 px-md-5 header_left_side">
                        <li className='dropdown_bar_btn'>
                            <Dropdown className='dropdown px-2'>
                                <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ background: "transparent", border: "none", padding: "0" }}>
                                    <i className="fa fa-bars dropdown_header_btn"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='dropdown_menu'>
                                    <Link to="/" className='dropdown_item'>Channels</Link>
                                    <Link to="/" className='dropdown_item'>Languages</Link>
                                    <Link to="/" className='dropdown_item'>Genres</Link>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li className='px-2'>
                            <Link to="/">
                                <img className='header_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Disney%2B_Hotstar_logo.svg/640px-Disney%2B_Hotstar_logo.svg.png" alt="#" />
                            </Link>
                        </li>
                        <li className="header_options" style={{ marginLeft: "-10px" }}>
                            <Dropdown className='dropdown'>
                                <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ background: "transparent", border: "none" }}>
                                    <p className="dropdown_header_btn">TV</p>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='dropdown_menu'>
                                    <Link to="/" className='dropdown_item'>Other Shows</Link>
                                    <Link to="/" className='dropdown_item'>Hotstar Specials</Link>
                                    <Link to="/" className='dropdown_item'>Quix</Link>
                                    <Link to="/" className='dropdown_item'>Star Jalsha</Link>
                                    <Link to="/" className='dropdown_item'>StarPlus</Link>
                                    <Link to="/" className='dropdown_item'>Star Vijay</Link>
                                    <Link to="/" className='dropdown_item'>Star Bharat</Link>
                                    <Link to="/" className='dropdown_item'>Asianet</Link>
                                    <Link to="/" className='dropdown_item'>more...</Link>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li className="header_options">
                            <Dropdown className='dropdown'>
                                <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ background: "transparent", border: "none" }}>
                                    <p className="dropdown_header_btn">Movies</p>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='dropdown_menu'>
                                    <Link to="/" className='dropdown_item'>Hindi</Link>
                                    <Link to="/" className='dropdown_item'>Bengali</Link>
                                    <Link to="/" className='dropdown_item'>Telugu</Link>
                                    <Link to="/" className='dropdown_item'>Malayalam</Link>
                                    <Link to="/" className='dropdown_item'>Tamil</Link>
                                    <Link to="/" className='dropdown_item'>Marathi</Link>
                                    <Link to="/" className='dropdown_item'>English</Link>
                                    <Link to="/" className='dropdown_item'>Kannada</Link>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li className="header_options">
                            <Dropdown className='dropdown'>
                                <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ background: "transparent", border: "none" }}>
                                    <p className="dropdown_header_btn">Sports</p>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='dropdown_menu'>
                                    <Link to="/" className='dropdown_item'>Cricket</Link>
                                    <Link to="/" className='dropdown_item'>Football</Link>
                                    <Link to="/" className='dropdown_item'>Kabaddi</Link>
                                    <Link to="/" className='dropdown_item'>Hockey</Link>
                                    <Link to="/" className='dropdown_item'>Formula E</Link>
                                    <Link to="/" className='dropdown_item'>Tennis</Link>
                                    <Link to="/" className='dropdown_item'>American Football</Link>
                                    <Link to="/" className='dropdown_item'>Formula 1</Link>
                                    <Link to="/" className='dropdown_item'>Martial Arts</Link>
                                    <Link to="/" className='dropdown_item'>Athletics</Link>
                                    <Link to="/" className='dropdown_item'>Golf</Link>
                                    <Link to="/" className='dropdown_item'>Table Tennis</Link>
                                    <Link to="/" className='dropdown_item'>Khelo India</Link>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li className="header_options">
                            <p className="dropdown_header_btn" style={{ marginLeft: "22px", marginTop: "6px" }}>Disney+</p>
                        </li>
                        <li className="header_options">
                            <img src="https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg" alt="#" style={{ marginLeft: "22px", marginTop: "12px" }} />
                        </li>
                        <li>
                            <button type="button" className="btn btn-primary p-1 subscribe_btn_after_md_scrn" style={{ fontSize: "12px" }}><b>SUBSCRIBE</b></button>
                        </li>
                    </ul>
                    <div className="col-lg-5 col-sm-6 col-5 header_right_side" style={{ textAlign: "right" }}>
                        <div className="form__group field" style={{ marginTop: "-20px" }}>
                            <input type="input" className="form__field" placeholder="Search" name="Search" id='Search' required />
                            <button type="button" className="btn btn-primary p-1 subscribe_btn_before_md_scrn" style={{ fontSize: "12px", marginLeft: "10px" }}><b>SUBSCRIBE</b></button>
                            <Link to="/" style={{ textDecoration: 'none', color: "white", paddingLeft: "15px" }} className="login_btn"><b>LOGIN</b></Link>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
export default Header;
