import BooksAPI from '../../utils/booksAPI';

// Action Types
const BOOK_ADDED = 'bookStore/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookStore/books/BOOK_REMOVED';
const BOOKS_DISPLAYED = 'bookStore/books/BOOKS_DISPLAYED';
const LOADING_STARTED = 'bookStore/books/LOADING_STARTED';
const LOADING_FINISHED = 'bookStore/books/LOADING_FINISHED';

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

export const loadingStart = (payload) => ({
  type: LOADING_STARTED,
  payload,
});

export const loadingEnd = (payload) => ({
  type: LOADING_FINISHED,
  payload,
});

// declare the initial state
const initialState = { books: [] };

const initialLoading = { loading: false };

// the reducer function for the books
export const booksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BOOK_ADDED:
      return { books: [...state.books, payload] };
    case BOOK_REMOVED:
      return { books: (state.books.filter(({ id }) => id !== payload.id)) };
    case BOOKS_DISPLAYED:
      return { books: [...state.books, ...payload] };
    default:
      return state;
  }
};

// the reducer function for the loaders
export const loadingReducer = (state = initialLoading, { type, payload }) => {
  switch (type) {
    case LOADING_STARTED:
      return { ...state, loading: payload };
    case LOADING_FINISHED:
      return { ...state, loading: payload };
    default:
      return state;
  }
};

// the addBook to the API thunk middleware
export const addBookAPI = (item) => (dispatch) => {
  const {
    id, title, author, category,
  } = item;
  const book = {
    item_id: id,
    title: `${title} , ${author}`,
    category,
  };
  BooksAPI.postBook(book);
  dispatch(addBook(item));
};

// the displayBooks from the API thunk middleware
export const displayBooks = () => async (dispatch) => {
  try {
    dispatch(loadingStart(true));
    const data = await BooksAPI.getAllBooks();
    const books = Object.entries(data).map(([id, book]) => {
      const { category, title: fullTitle } = book[0];
      const [title, author] = fullTitle.split(',');
      return {
        id,
        title,
        author,
        category,
      };
    });
    dispatch(bookDisplay(books));
  } catch (err) {
    throw new Error(err);
  } finally {
    dispatch(loadingEnd(false));
  }
};

// the removeBookAPI from the API thunk middleware
export const removeBookAPI = (id) => (dispatch) => {
  BooksAPI.deleteBook(id);
  dispatch(removeBook({ id }));
};
