import axios from "axios";

export const addPost = post => dispatch => {
  //const newPost = JSON.stringify(post);
  const config = {
    headers: {
      "Content-Type": "form-data"
    }
  };

  axios
    .post("/api/annonce/ajouter", post, config)
    .then(res => dispatch(getPosts()));
};

export const getPosts = () => dispatch => {
  axios.get("/api/annonce").then(res =>
    dispatch({
      type: "GET_POSTS",
      payload: res.data
    })
  );
};
