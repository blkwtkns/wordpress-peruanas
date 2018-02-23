import React from 'react';

export default (props) => {
  if(props.dbInfo === true){
    return <div><h3 key='submitSuccess'>'Your submission was successful!'</h3></div> 
  }else if(props.dbInfo === 'error'){
    return <div><h3 key='submitInvalid'>'Your submission was unsuccessful!'</h3></div>
  }
  
  return null;
}
