import React from 'react';
import '../components/styles/PageError.css';

function ErrorPage(props) {
  return <div className="PageError"> {props.error.message} </div>
}

export default ErrorPage