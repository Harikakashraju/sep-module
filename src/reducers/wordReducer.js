const initialState = {
    wordData: null,
  };
  
  const wordReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_WORD_DATA':
        return {
          ...state,
          wordData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default wordReducer;
  