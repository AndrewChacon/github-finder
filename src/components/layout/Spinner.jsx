import React from 'react';
import SpinnerAsset from './assets/spinner.gif';

function Spinner() {
	return (
		<div className='w-100 mt-20'>
			<img
				className='text-center mx-auto'
				width={180}
				src={SpinnerAsset}
				alt='Loading...'
			/>
		</div>
	);
}

export default Spinner;
