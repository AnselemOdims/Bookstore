import FetchWrapper from './fetchWrapper';

/**
 * @class BooksAPI - to handle methods that interact with API
 */
class BooksAPI {
  static #API = new FetchWrapper('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/');

  static #APP_ID = 'mDm4dEiEhEvX6B1jDkZT';

  /**
   * @method getAllBooks
   * @returns {object} - the books object
   * @memberof BooksAPI
   */
  static async getAllBooks() {
    const response = await this.#API.get(`apps/${this.#APP_ID}/books`);
    return response;
  }

  /**
   * @method postBook
   * @param {object} data - the book data from the user
   * @returns {boolean} - returns true or false
   * @memberof BooksAPI
   */
  static async postBook(data) {
    const response = await this.#API.post(`apps/${this.#APP_ID}/books`, data);
    return response;
  }

  /**
   * @method deleteBook
   * @param {string} id - the id of the book to be deleted
   * @returns {string} - the return response
   * @memberof BooksAPI
   */
  static async deleteBook(id) {
    const response = await this.#API.delete(`apps/${this.#APP_ID}/books/${id}`);
    return response;
  }
}

export default BooksAPI;
