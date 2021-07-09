//failing to return something will produce an error

//very first time tis called we return an empty array
export default (state=[], action) => {
    //if we see an action that eq fetch posts , return the action pay load otherwise return 
    if (action.type === 'FETCH_POSTS') return action.payload;
    //by convention will never return an undefined object because state will be some new state or empty array
    return state;
}