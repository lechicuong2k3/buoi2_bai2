import React from 'react';
import './App.css';
import kakasi from "./img/kakasi.png"
import sasuke from "./img/sasuke.png"
import shino from "./img/shino.png"
import kiba from "./img/kiba.png"
import TungLam from "./img/TungLam.png"
import sakura from "./img/sakura.png"
import jiraira from "./img/jiraira.png"
import gaara from "./img/gaara.png"
import vinuni from "./img/vinuni.png"
import option from "./img/option.png"
import post1 from "./img/post1.png"
import heart from "./img/heart.png"
import comment from "./img/comment.png"
import send from "./img/send.png"
import save from "./img/save.png"
import emotion from "./img/emotion.png"
import post2 from "./img/post2.png"
import post3 from "./img/post3.png"
import post4 from "./img/post4.png"
import post5 from "./img/post5.png"
import post6 from "./img/post5.png"


class Body extends React.Component {
    render(){
        return(

            <div class="left-col">
                <div class="status-wrapper">
                    <div class="status-card">
                        <div class="profile-pic"><img src={kakasi} alt=""/></div>
                        <p class="username">KAKASI</p>
                    </div>
                    <div class="status-card">
                        <div class="profile-pic"><img src={sasuke} alt=""/></div>
                        <p class="username">SASUKE</p>
                    </div>
                    <div class="status-card">
                        <div class="profile-pic"><img src={shino} alt=""/></div>
                        <p class="username">SHINO</p>
                    </div>
                    <div class="status-card">
                        <div class="close-friend"><img src={kiba} alt=""/></div>
                        <p class="username">KIBA</p>
                    </div>
                    <div class="status-card">
                        <div class="close-friend"><img src={TungLam} alt=""/></div>
                        <p class="username">curcart.tl</p>
                    </div>
                    <div class="status-card">
                        <div class="profile-pic"><img src={sakura} alt=""/></div>
                        <p class="username">SAKURA</p>
                    </div>
                    <div class="status-card">
                        <div class="profile-pic"><img src={jiraira} alt=""/></div>
                        <p class="username">JIRAIYA</p>
                    </div>
                    <div class="status-card">
                        <div class="close-friend"><img src={gaara} alt=""/></div>
                        <p class="username">GAARA</p>
                    </div>
                </div>
    
                <div class="post">
                    <div class="info">
                        <div class="user">
                            <div class="profile-pic"><img src={vinuni} alt=""/></div>
                            <p class="username">vinuniversity.official</p>
                        </div>
                        <img src={option} class="options" alt=""/>
                    </div>
                    <img src={post1} class="post-image" alt=""/>
                    <div class="post-content">
                        <div class="reaction-wrapper">
                            <img src={heart} class="icon" alt=""/>
                            <img src={comment} class="icon" alt=""/>
                            <img src={send} class="icon" alt=""/>
                            <img src={save} class="save icon" alt=""/>
                        </div>
                        <p class="likes">1,012 likes</p>
                        <p class="description"><span>vinuniversity.official</span> 🌆✨ What’s your plan for the Tết Holiday? Shall we walk around campus before going home?</p>
                        <p class="post-time">2 minutes ago</p>
                    </div>
                    <div class="comment-wrapper">
                        <img src={emotion} class="icon" alt=""/>
                        <input type="text" class="comment-box" placeholder="Add a comment"/>
                        <button class="comment-btn">post</button>
                    </div>
                </div>

                <div class="post">
                    <div class="info">
                        <div class="user">
                            <div class="profile-pic"><img src={vinuni} alt=""/></div>
                            <p class="username">vinuniversity.official</p>
                        </div>
                        <img src={option} class="options" alt=""/>
                    </div>
                    <img src={post2} class="post-image" alt=""/>
                    <div class="post-content">
                        <div class="reaction-wrapper">
                            <img src={heart} class="icon" alt=""/>
                            <img src={comment} class="icon" alt=""/>
                            <img src={send} class="icon" alt=""/>
                            <img src={save} class="save icon" alt=""/>
                        </div>
                        <p class="likes">500 likes</p>
                        <p class="description"><span>vinuniversity.official</span> “Sunsets are proof that no matter what happens, everyday can end beautifully” 🌗
                           <br/> - Kristen Butler -</p>
                        <p class="post-time">2 days ago</p>
                    </div>
                    <div class="comment-wrapper">
                        <img src={emotion} class="icon" alt=""/>
                        <input type="text" class="comment-box" placeholder="Add a comment"/>
                        <button class="comment-btn">post</button>
                    </div>
                </div>

                <div class="post">
                    <div class="info">
                        <div class="user">
                            <div class="profile-pic"><img src={vinuni} alt=""/></div>
                            <p class="username">vinuniversity.official</p>
                        </div>
                        <img src={option} class="options" alt=""/>
                    </div>
                    <img src={post3} class="post-image" alt=""/>
                    <div class="post-content">
                        <div class="reaction-wrapper">
                            <img src={heart} class="icon" alt=""/>
                            <img src={comment} class="icon" alt=""/>
                            <img src={send} class="icon" alt=""/>
                            <img src={save} class="save icon" alt=""/>
                        </div>
                        <p class="likes">360 likes</p>
                        <p class="description"><span>vinuniversity.official</span> 📬 Outlook: “Assignment Graded”</p>
                        <p class="post-time">1 week ago</p>
                    </div>
                    <div class="comment-wrapper">
                        <img src={emotion} class="icon" alt=""/>
                        <input type="text" class="comment-box" placeholder="Add a comment"/>
                        <button class="comment-btn">post</button>
                    </div>
                </div>

                <div class="post">
                    <div class="info">
                        <div class="user">
                            <div class="profile-pic"><img src={vinuni} alt=""/></div>
                            <p class="username">vinuniversity.official</p>
                        </div>
                        <img src={option} class="options" alt=""/>
                    </div>
                    <img src={post4} class="post-image" alt=""/>
                    <div class="post-content">
                        <div class="reaction-wrapper">
                            <img src={heart} class="icon" alt=""/>
                            <img src={comment} class="icon" alt=""/>
                            <img src={send} class="icon" alt=""/>
                            <img src={save} class="save icon" alt=""/>
                        </div>
                        <p class="likes">544 likes</p>
                        <p class="description"><span>vinuniversity.official</span> ✨🌆 Have you ever walked around the campus after classes?</p>
                        <p class="post-time">2 weeks ago</p>
                    </div>
                    <div class="comment-wrapper">
                        <img src={emotion} class="icon" alt=""/>
                        <input type="text" class="comment-box" placeholder="Add a comment"/>
                        <button class="comment-btn">post</button>
                    </div>
                </div>

                <div class="post">
                    <div class="info">
                        <div class="user">
                            <div class="profile-pic"><img src={vinuni} alt=""/></div>
                            <p class="username">vinuniversity.official</p>
                        </div>
                        <img src={option} class="options" alt=""/>
                    </div>
                    <img src={post5} class="post-image" alt=""/>
                    <div class="post-content">
                        <div class="reaction-wrapper">
                            <img src={heart} class="icon" alt=""/>
                            <img src={comment} class="icon" alt=""/>
                            <img src={send} class="icon" alt=""/>
                            <img src={save} class="save icon" alt=""/>
                        </div>
                        <p class="likes">159 likes</p>
                        <p class="description"><span>vinuniversity.official</span> Sunset at VinUniversity ☀️</p>
                        <p class="post-time">5 weeks ago</p>
                    </div>
                    <div class="comment-wrapper">
                        <img src={emotion} class="icon" alt=""/>
                        <input type="text" class="comment-box" placeholder="Add a comment"/>
                        <button class="comment-btn">post</button>
                    </div>
                </div>

                <div class="post">
                    <div class="info">
                        <div class="user">
                            <div class="profile-pic"><img src={vinuni} alt=""/></div>
                            <p class="username">vinuniversity.official</p>
                        </div>
                        <img src={option} class="options" alt=""/>
                    </div>
                    <img src={post6} class="post-image" alt=""/>
                    <div class="post-content">
                        <div class="reaction-wrapper">
                            <img src={heart} class="icon" alt=""/>
                            <img src={comment} class="icon" alt=""/>
                            <img src={send} class="icon" alt=""/>
                            <img src={save} class="save icon" alt=""/>
                        </div>
                        <p class="likes">476 likes</p>
                        <p class="description"><span>vinuniversity.official</span> POV: You get lost in our campus in golden hours 🌆</p>
                        <p class="post-time">8 weeks ago</p>
                    </div>
                    <div class="comment-wrapper">
                        <img src={emotion} class="icon" alt=""/>
                        <input type="text" class="comment-box" placeholder="Add a comment"/>
                        <button class="comment-btn">post</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default Body;