import React from 'react';
import "./Post.css";
import { GoVerified } from "react-icons/go";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { IoChatbubbleOutline, IoShareOutline} from "react-icons/io5";

export default function Post({displayName, username, verified, text, image, avatar}) {
    return (
        <div className="post"> 
            <div className="post__avatar">
                <div className="container_img"></div>
              
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Patsy Guerrero {" "}
                            <span className="post__headerSpecial">
                            <GoVerified className="post__badge"/>
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Quiero terminar el proyecto de twitter</p>
                    </div>
                </div>
                <img src="https://media.giphy.com/media/KtyTa7XH5ueJLYwmaG/giphy.gif" alt="no se encuentra"/>
                <div className="post__footer">
                
                <IoChatbubbleOutline/>
                <AiOutlineRetweet />
                <AiOutlineHeart/>
                <IoShareOutline/>
                </div>
            </div>
        </div>
    )
}
