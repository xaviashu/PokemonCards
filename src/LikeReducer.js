
export const initialState = {
  pokes: [],
  likes: JSON.parse(localStorage.getItem('likes')) || []
};

const LikeReducer = (state, action) => {
  switch (action.type) {
    case 'LIKED':
      console.log(`Liked - ${action.payload}`);
      return {
        ...state,
        likes: action.payload
      }
    case 'DISLIKED':
      console.log(`Disliked - ${action.payload}`);
      return {
        ...state,
        likes: action.payload
      }
    case 'GET_DATA': 
       return {
         ...state,
         pokes: action.payload
       }
    default:
      return state;
  }
}

export default LikeReducer;