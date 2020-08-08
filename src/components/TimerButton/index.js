import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function TimerButton({ buttonAction, buttonValue }) {
	return (
		<div className='button-container' onClick={() => buttonAction()}>
			<p className='button-value'>{buttonValue}</p>
		</div>
	);
}

TimerButton.propTypes = {
	buttonAction: PropTypes.func.isRequired,
	buttonValue: PropTypes.string.isRequired,
};
