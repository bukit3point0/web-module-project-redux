import React from 'react';
import {connect} from 'react-redux'
import {deletedFeatures} from '../actions/index'

const AddedFeature = props => {

  const handleClick = () => {
    props.deletedFeatures(props.feature)
  }

  console.log(props.feature)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handleClick} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {deletedFeatures})(AddedFeature);
