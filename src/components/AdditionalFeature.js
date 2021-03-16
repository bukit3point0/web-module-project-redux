import React from 'react';
import {connect} from 'react-redux'
import {addedFeatures} from '../actions/index'

const AdditionalFeature = props => {

  const handleClick = () => {
    props.addedFeatures(props.feature)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleClick} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {addedFeatures})(AdditionalFeature);
