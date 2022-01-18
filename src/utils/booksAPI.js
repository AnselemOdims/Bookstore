import FetchWrapper from './fetchWrapper';

/**
 * @class BooksAPI - to handle methods that interact with API
 */
class BooksAPI {
  static #BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

  static #APP_ID = '1';

  /**
   * @method getAllBooks
   * @returns {object} - the books object
   * @memberof BooksAPI
   */
  static getAllBooks = () => FetchWrapper.get(`${this.BASE_URL}/apps/${this.APP_ID}/books`);

  /**
   * @method postBook
   * @param {object} data - the book data from the user
   * @returns {boolean} - returns true or false
   * @memberof BooksAPI
   */
  static postBook = (data) => FetchWrapper.post(`${this.BASE_URL}/apps/${this.APP_ID}/books`, data);

  /**
   * @method deleteBook
   * @param {string} id - the id of the book to be deleted
   * @returns {string} - the return response
   * @memberof BooksAPI
   */
  static deleteBook = (id) => FetchWrapper.delete(`${this.BASE_URL}/apps/${this.APP_ID}/books/${id}`)
}

export default BooksAPI;
