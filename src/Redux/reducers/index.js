const initialState = {
    aboutUs: {},
    blogs: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOG:
      state.blogs.push(action.payload);
      return state;
    default:
      return state;
  }
};
export default rootReducer;