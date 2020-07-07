import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const FooterAuth = ({ className }) => (
    <p className={ classNames(className, 'small') }>
    </p>
);
FooterAuth.propTypes = {
    className: PropTypes.string
};

export { FooterAuth };
