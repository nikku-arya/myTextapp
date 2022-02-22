import React from 'react'
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>


        {/*<nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div>
            <Link class="navbar-brand" to="#">{props.title}</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="#">Home </Link>
                    </li>
                    
                        <li className="nav-item" >
                            <Link className="nav-a active" aria-current="page" to="/" style={{textDecoration: 'none',color: props.mode==='light'?'black':'white'}}>Home</Link>
                        </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/about">About</Link>
                    </li>
                </ul>
                <div className="navbar-form-check form-switch ">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode}/>
                        <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault" style={{width: '140px', margin: '0px 0px 0px 10px'}}>Enable darkmode</label>
                </div>
            </div>
            </div>
        </nav>*/}


        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item active">
                        <Link class="nav-link" to="/">Home </Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    <div className="navbar-form-check form-switch ">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode}/>
                        <label className={`form-check-label text-${props.mode==='light'?'black':'white'}`} htmlFor="flexSwitchCheckDefault" style={{width: '140px', margin: '0px 0px 0px 10px'}}>Enable darkmode</label>
                    </div>
                </div>
            </div>
  </nav>
    </>
  )
}

Navbar.propTypes = {
    title: propTypes.string,
    home: propTypes.string,
};

Navbar.defaultProps = {
    title: 'set title here',
    home: 'set home here',
};
