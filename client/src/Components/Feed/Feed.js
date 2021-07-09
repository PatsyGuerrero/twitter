import React from 'react';
import './Feed.css';
import TweetBox from '../TweetBox/TweetBox';
import Post from '../Post/Post';

export default function Feed() {
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}