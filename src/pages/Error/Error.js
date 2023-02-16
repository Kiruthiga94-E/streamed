import React from 'react';
import './Error.css';

function Error() {

  return (
      <div className='error'>
          <div>
              <h1>Oops!</h1>
          </div>
          <div>
              <p>Sorry, an unexpected error has occurred.</p>
          </div>
    </div>
  );
}

export default Error;