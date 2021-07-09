import React from 'react'
import './TweetBox.css'

export default function TweetBox() {
    return (
        <div className="tweetBox">
        <form>
          <div className="tweetBox__input">
              <div className={`container_img`}>
                 <img src={require(`./patsy.png`).default} alt="no se encuentra" />
              </div>
            <input
            //   onChange={(e) => setTweetMessage(e.target.value)}
            //   value={tweetMessage}
              placeholder="What's happening?"
              type="text"
            />
          </div>
          <input
            // value={tweetImage}
            // onChange={(e) => setTweetImage(e.target.value)}
            className="tweetBox__imageInput"
            placeholder="Optional: Enter image URL"
            type="text"
          />
  
          <button className="tweetBox__tweetButton">Tweet</button>
        </form>
      </div>
    )
}
