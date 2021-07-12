import React from 'react';
import "./Post.css";
import { GoVerified } from "react-icons/go";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { IoChatbubbleOutline, IoShareOutline} from "react-icons/io5";

export default function Post({ username, tweet, url,name}) {
    return (
        <div className="post"> 
            <div className="post__avatar">
                <div className="container_img"></div>
              
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {name} <p> @{username} </p>
                            <span className="post__headerSpecial">
                            <GoVerified className="post__badge"/>
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{tweet}</p>
                    </div>
                </div>
                {url ? <img src={url} alt="no se encuentra"/> : '' }
                
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
