import React from 'react';
import { Link } from '@reach/router';

const NotFound = () => (
  <>
    <p>Sorry, this page is not valid!</p>
    <Link path="/">Return to Home</Link>
  </>
);

export default NotFound;
