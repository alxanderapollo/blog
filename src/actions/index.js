import jsonPlaceHolder from '../apis/jsonPlaceHolder';

//promising the function that it will recive a req
//gives us the post endpoint
export const fetchPosts = () =>  async dispatch => {
        const response = await jsonPlaceHolder.get('/posts');

     dispatch({type: 'FETCH_POSTS', payload: response })
    };

    //return the users 
export const fetchUser = (id) => async dispatch => {
        const response = await jsonPlaceHolder.get(`/users/${id}`);
        dispatch({type: 'FETCH_USER', payload: response.data })

  
};