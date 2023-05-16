import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <label className={css.label}>
      <b className={css.text}>Find contacts by name</b>

      <input
        className={css.input}
        type="text"
        value={value}
        placeholder="search"
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
