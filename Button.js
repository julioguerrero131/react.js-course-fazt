// PROPTYPES
import PropTypes from 'prop-types';

export function Button({ text, name }) { // name='user'
  console.log(text);
  if (!text) {
    console.error('El boton necesita un texto');
  }
  return <button>{text} - {name}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}

Button.defaultProps = {
  name: 'a user'
}