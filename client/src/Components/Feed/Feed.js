import React, {useEffect , useState} from 'react';
import './Feed.css';
import TweetBox from '../TweetBox/TweetBox';
import Post from '../Post/Post';
import { urlGetTweets } from '../../Conections/url';


export default function Feed() {

    let [tweets, setTweets] = useState([]);
  

    useEffect(() => {
        if(tweets.length ===0){
            (async function() {
              setTweets((await urlGetTweets()).data.reverse());
            })();
          }
    }, [])    

   const handleTweets = async () => {
        setTweets((await urlGetTweets()).data.reverse());
   }

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox handleTweets={handleTweets}/>

            {tweets?.map( e => 
                <Post 
                tweet={e.tweet}
                username={e.user.user_name}
                url={e.url}
                name={e.user.name}
                />   
            )}  
        </div>
    )
}
