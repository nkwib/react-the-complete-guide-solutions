import React from 'react';

const validation = ( props ) => {
  return (
    <div>{
      props.inputLength > 5 ?
        <p>text long enough</p> :
        <p>text too short!</p>

    }
    </div>
  );
};

export default validation;