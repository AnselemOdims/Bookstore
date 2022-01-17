import Button from './Button';
import Select from './Select';

const InputBook = () => (
  <section>
    <div>
      <h2>ADD NEW BOOK</h2>
    </div>
    <div>
      <form style={{ display: 'flex', alignItems: 'center' }}>
        <input type="text" placeholder="Book Title" />
        <Select />
        <Button type="submit" text="ADD BOOK" />
      </form>
    </div>
  </section>
);

export default InputBook;
