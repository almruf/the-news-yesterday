import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
      return (
            <div>
                  <h1>are you accept all terms</h1>
                  <p>Go back: <Link to='/register'>Register</Link></p>
            </div>
      );
};

export default TermsAndCondition;