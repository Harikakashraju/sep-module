// actions/wordActions.js
import axios from 'axios';

export const fetchWord = (word) => async (dispatch) => {
  try {
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = response.data;
    dispatch({ type: 'FETCH_WORD_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_WORD_FAILURE', payload: error.message });
  }
};

// actions/historyActions.js
export const addToHistory = (word) => {
  return { type: 'ADD_TO_HISTORY', payload: word };
};
