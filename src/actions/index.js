import JsonPlaceholer from '../apis/JsonPlaceholder';

export const fetchPosts = () => {
  return async (dispatch) => {
    const response  = await JsonPlaceholer.get('/posts');
    dispatch({type: "FETCH_POSTS", payload: response.data})
  }
};

export const fetchUser = (id) => {
  return async (dispatch) =>{
    const response = await JsonPlaceholer.get(`/users/${id}`)
    dispatch({type: "FETCH_USER", payload: response.data})
  }
}