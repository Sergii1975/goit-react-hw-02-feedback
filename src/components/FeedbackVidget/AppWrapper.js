import React from 'react';

import PropTypes from 'prop-types';

 const AppWrapper = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

AppWrapper.propTypes = {
   children: PropTypes.any.isRequired,
};

export default AppWrapper;