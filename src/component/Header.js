import React, { Component } from 'react';
import search from '../icons/search.png';
import profile from '../icons/profile.jpg';
class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light  custom-nav">
                <div class="container-fluid d-flex justify-content-between">
                    <a class="navbar-brand custom-brand " href="#">Company Logo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <form class="d-flex w-50">
                            <div className="custom-search w-100">
                            <input class="form-control me-2 custom-input " type="search" placeholder="Search" aria-label="Search" />
                            <img src ={search} className="search-icon" />
                            </div>
                            {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                        </form>
                        <ul class="navbar-nav me-right mb-2 mb-lg-0 ">
                        
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    User Name
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <div className="profile-container" >
                                    <img className="profile-img" src={profile} />
                                </div>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;