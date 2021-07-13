import React from 'react';
import './Widgets.css';
import { FaSearch} from "react-icons/fa";
import { TwitterTimelineEmbed, 
    TwitterShareButton, 
    TwitterTweetEmbed } from 'react-twitter-embed';





export default function Widgets() {
    return (
        <div className="widgets">
        <div className="widgets__input">
          <FaSearch className="widgets__searchIcon" />
          <input placeholder="Search Twitter" type="text" />
        </div>
  
        <div className="widgets__widgetContainer">
          <h2>What's happening</h2>
  
          <TwitterTweetEmbed tweetId={"1413204747473940485"} />
          
         
  
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="NetflixLAT"
            options={{ height: 400 }}
          />
  
          <TwitterShareButton
            url={"https://www.youtube.com/watch?v=KcBStos46EM&ab_channel=MarvelLatinoam%C3%A9ricaOficial"}
            options={{ text: "#Loki is awesome", via: "PatsyGuerrero" }}
          />
        </div>
      </div>
    )
}
