import React from 'react';
import './App.css';
import logo1 from './img/logo1.png'
import home from './img/home.png'
import message from './img/message.png'
import add from './img/add.png'
import explore from './img/explore.png'
import heart from './img/heart.png'


class Header extends React.Component {

    render() {
        return(
            <nav class="navbar">
                <div class="nav-wrapper">
                    <img src={logo1} class="brand-img" alt=""/>
                    <input type="text" class="search-box" id="search" placeholder="search"/>

                    <div class="nav-items">
                        <img src={home} class="icon" alt=""/>
                        <img src={message} class="icon" alt=""/>
                        <img src={add} class="icon" alt=""/>
                        <img src={explore} class="icon" alt=""/>
                        <img src={heart} class="icon" alt=""/>
                        <div class="icon user-profile"></div>
                    </div>
                </div>
            </nav>
        )
    }

}

export default Header;

