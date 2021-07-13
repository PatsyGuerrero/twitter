import React from 'react';
import './TweetBox.css';
import { urlCreateTweet, urlGetTweets} from '../../Conections/url';


export default function TweetBox({handleTweets}) {
    let response;
    let email= localStorage.getItem('email').split('\"')[1];

    const [input, setInput] = React.useState({
      tweet: '',
      url: '',
      error: ''
    });

    const handleInputs = (e) => {
      e.preventDefault();
      setInput({
          ...input,
          [e.target.name]: e.target.value 
      })
    }

    const handleSubmit = async (e) => {
    
      e.preventDefault();
      response = await urlCreateTweet({...input, email});

      if(response.data ){
          setInput({
            tweet: '',
            url: '',
            error: ''
          })
    
          handleTweets();
          return true;
      }
      else{
          setInput({
              ...input,
              error: response?.data
          });
      }
    
  }

    return (
        <div className="tweetBox">
        <form onSubmit={handleSubmit}>
          <div className="tweetBox__input">
              <div className="container_img">
                 <img src={require(`./patsy.png`).default} alt="no se encuentra" />
              </div>

            <input
              type="text"
              name="tweet"
              onChange={handleInputs} 
              value={input.tweet}
              placeholder="What's happening?"
              type="text"
            />
          </div>
          <input
            className="tweetBox__imageInput"
            placeholder="Optional: Enter image URL"
            type="text"
            name="url"
            onChange={handleInputs} 
            value={input.url}
          />
  
          {/* <button type="submit" className="tweetBox__tweetButton">Tweet</button> */}
          <input type="submit" className="tweetBox__tweetButton" />
        </form>
      </div>
    )
}
