import React from 'react';

const Rank = ({name,entries}) => {
	return (
		<div >
		{`${name} , your current entry counts is..`}
		<div className='white f3'>
        
		</div>
		<div className='white f1'>
		{`${entries}`}
		</div>
		</div>
		);


}
export default Rank;