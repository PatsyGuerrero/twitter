import * as url from './url';

export const createTweet = (post) => async (dispatch) => {

    try{
        const {data} = await url.createPos(post);
        dispatch({type:'CREATE_TWEET', payload: data});

    }catch(error){
        console.log(error);
    }
};

export const createUser = (post) => async (dispatch) => {

    try{
        const {data} = await url.urlRegister(post);
        dispatch({type:'CREATE_USER', payload: data});

    }catch(error){
        console.log(error);
    }
};
