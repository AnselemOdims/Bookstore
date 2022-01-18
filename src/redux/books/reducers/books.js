import * as Actions from '../actions/booksAction';

// declare the initial state
const initialState = { books: [] };

const initialLoading = { loading: false };

// the reducer function for the books
export const booksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Actions.BOOK_ADDED:
      return { books: [...state.books, payload] };
    case Actions.BOOK_REMOVED:
      return { books: (state.books.filter(({ id }) => id !== payload.id)) };
    case Actions.BOOKS_DISPLAYED:
      return { books: [...payload] };
    default:
      return state;
  }
};

// the reducer function for the loaders
export const loadingReducer = (state = initialLoading, { type, payload }) => {
  switch (type) {
    case Actions.LOADING_STARTED:
      return { ...state, loading: payload };
    case Actions.LOADING_FINISHED:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
