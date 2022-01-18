// Action Types
const BOOK_ADDED = 'bookStore/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookStore/books/BOOK_REMOVED';

/**
 * @function addBook - the action creator for adding a book
 * @param {Object} payload - the payload for adding a new Book
 * @returns {Object} - the action object
 */
export const addBook = (payload) => ({
  type: BOOK_ADDED,
  payload,
});

/**
 * @function removeBook - the action creator for removing a book
 * @param {Object} payload - the payload for removing a Book
 * @returns {Object} - the action object
 */
export const removeBook = (payload) => ({
  type: BOOK_REMOVED,
  payload,
});

// declare the initial state
const initialState = [];

/**
 * @function booksReducer - the reducer function for books
 * @param {Array} state - the current state
 * @param {Object} param1 - the action object
 * @returns {Array} - the current state array
 */
const booksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BOOK_ADDED:
      return [...state, payload];
    case BOOK_REMOVED:
      return (state.filter(({ id }) => id !== payload.id));
    default:
      return state;
  }
};

export default booksReducer;
