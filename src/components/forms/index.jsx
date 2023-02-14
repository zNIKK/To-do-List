import PropTypes from 'prop-types';
import React from 'react';
import FormStyled from './styled';
// import './form.css';

export default function Form({
  handleSubmit, handleChange, novaTarefa,
}) {
  return (
    <FormStyled onSubmit={handleSubmit} action="#">
      <input className="checkbox" type="checkbox" />
      <input placeholder="Create a new to do..." id="mainInput" className="formText" onChange={handleChange} type="text" value={novaTarefa} />
    </FormStyled>
  );
}

Form.propTypes = {
  novaTarefa: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
