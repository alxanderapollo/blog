import jsonPlaceHolder from '../apis/jsonPlaceHolder';

//promising the function that it will recive a req
export const fetchPosts = () =>  async (dispatch) => {
        const response = await jsonPlaceHolder.get('/posts');

     dispatch({type: 'FETCH_POSTS', payload: response })
    };