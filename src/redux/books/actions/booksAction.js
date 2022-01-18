// Action Types
export const BOOK_ADDED = 'bookStore/books/BOOK_ADDED';
export const BOOK_REMOVED = 'bookStore/books/BOOK_REMOVED';
export const BOOKS_DISPLAYED = 'bookStore/books/BOOKS_DISPLAYED';
export const LOADING_STARTED = 'bookStore/books/LOADING_STARTED';
export const LOADING_FINISHED = 'bookStore/books/LOADING_FINISHED';

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

// bookDisplay action creator
export const bookDisplay = (payload) => ({
  type: BOOKS_DISPLAYED,
  payload,
});

// loading start action creator
export const loadingStart = (payload) => ({
  type: LOADING_STARTED,
  payload,
});

// loading end action creator
export const loadingEnd = (payload) => ({
  type: LOADING_FINISHED,
  payload,
});
