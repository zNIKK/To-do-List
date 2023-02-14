import PropTypes from 'prop-types';
import React from 'react';
import FooterStyled from './styled';

export default function Footer({
  items, all, clear, completed,
}) {
  return (
    <FooterStyled>

      <div>
        <div>
          {items}
          {' '}
          Items left
        </div>
      </div>
      <ul className="selected">
        <li><button type="button" className="clicked" onClick={all}>All</button></li>
        {/* <li onClick={active}>Active</li> */}
        <li><button type="button" onClick={(e) => completed(e)}>Completed</button></li>
      </ul>
      <div role="button" tabIndex={0} className="buttonClear" onKeyDown={clear}>Clear Completed</div>
    </FooterStyled>
  );
}

Footer.propTypes = {
  items: PropTypes.number.isRequired,
  all: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  completed: PropTypes.func.isRequired,

};
