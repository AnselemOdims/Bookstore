// Action Types
const BOOK_ADDED = 'bookStore/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookStore/books/BOOK_REMOVED';
const BOOKS_DISPLAYED = 'bookStore/books/BOOKS_DISPLAYED';

// addBook actions creator
export const addBook = (payload) => ({
  type: BOOK_ADDED,
  payload,
});

// removeBook action creator
export const removeBook = (payload) => ({
  type: BOOK_REMOVED,
  payload,
});

export const displayBooks = (payload) => ({
  type: BOOKS_DISPLAYED,
  payload,
});

// declare the initial state
const initialState = [];

// the reducer function for the books
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
