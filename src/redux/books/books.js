// Action Types
const BOOK_ADDED = 'bookStore/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookStore/books/BOOK_REMOVED';

/**
 * @function addBook - the action creator for adding a book
 * @param {Object} payload - the payload for adding a new Book
 * @returns {Object} - the action object
 */
export const addBook = payload => ({
  type: BOOK_ADDED,
  payload,
})