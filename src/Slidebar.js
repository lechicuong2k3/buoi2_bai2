import React from 'react';
import './App.css';
import naruto from './img/naruto.png'
import Tsunade from './img/Tsunade.png'
import gai from './img/gai.png'
import neiji from './img/neiji.png'
import momochi from './img/momochi.png'
import izuka from './img/izuka.png'
import extension from './img/extension.png'

class Slidebar extends React.Component{

    render(){
        return(
            <div class="right-col">
                <div class="profile-card">
                    <div class="profile-pic">
                        <img src={naruto} alt=""/>
                    </div>
                    <div>
                        <p class="username1">naruto.30.1</p>
                        <p class="sub-text">UZUMAKI NARUTO</p>
                    </div>
                    <button class="action-btn">switch</button>
                </div>
                <p class="suggestion-text">Suggestions for you</p>
                <div class="profile-card">
                    <div class="profile-pic">
                        <img src={Tsunade} alt=""/>
                    </div>
                    <div>
                        <p class="username1">TSUNADE</p>
                        <p class="sub-text">Followed by GAARA</p>
                    </div>
                    <button class="action-btn">follow</button>
                </div>
                <div class="profile-card">
                    <div class="profile-pic">
                        <img src={gai} alt=""/>
                    </div>
                    <div>
                        <p class="username1">GAI</p>
                        <p class="sub-text">Followed by SAKURA</p>
                    </div>
                    <button class="action-btn">follow</button>
                </div>
                <div class="profile-card">
                    <div class="profile-pic">
                        <img src={neiji} alt=""/>
                    </div>
                    <div>
                        <p class="username1">NEIJI</p>
                        <p class="sub-text">Followed by HINATA</p>
                    </div>
                    <button class="action-btn">follow</button>
                </div>
                <div class="profile-card">
                    <div class="profile-pic">
                        <img src={momochi} alt=""/>
                    </div>
                    <div>
                        <p class="username1">MOMOCHI</p>
                        <p class="sub-text">Followed by SASUKE</p>
                    </div>
                    <button class="action-btn">follow</button>
                </div>
                <div class="profile-card">
                    <div class="profile-pic">
                        <img src={izuka} alt=""/>
                    </div>
                    <div>
                        <p class="username1">IZUKA</p>
                        <p class="sub-text">Followed by KAKASI</p>
                    </div>
                    <button class="action-btn">follow</button>
                </div>

                <div >
                    <img src={extension} alt="" class="extension"/>
                </div>
            </div>

        )
    }
}

export default Slidebar;