import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { AiOutlineSearch } from '@react-icons/all-files/ai/AiOutlineSearch';

const Searchbar = ({ onSubmit, onChange, value }) => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    onSubmit(values.search);
  };
  // const formikChange = value => {
  //   console.log(value);
  // };

  return (
    <header className="Searchbar">
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <Form className="SearchForm" id="#" onChange={onChange}>
          <button type="submit" className="SearchForm-button">
            <AiOutlineSearch className="SearchForm-button-label" />
          </button>
          <Field
            autoComplete="true"
            id="search"
            className="SearchForm-input"
            type="text"
            autoFocus
            placeholder="Search images and photos"
            name="search"
            value={value}
          />
        </Form>
      </Formik>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
};
