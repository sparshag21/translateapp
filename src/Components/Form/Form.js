import React from 'react';

const Form = ({onInputChange,onButtonSubmit,input,translated}) => {
	return(
		<div>
			<p className='f3'>Enter the text you want to be translated.
			</p>
			<div className="pa4">
				<div className='br3 pa4 shadow-5'>
					<input className='f4 pa2 w-70 center' type="text" name="usertext" onChange={onInputChange} value={input}/>
					<button style={{opacity:0.9}} className='w-30 grow  pa1 f4 link ph3 pv2 dib white bg-light-purple' 
					onClick={onButtonSubmit}>Translate to Klingon</button>
					<textarea className="center br3 pa2 w-70 i " value={translated}></textarea>
				</div>{/*
				{<div>
					<a href=' http://translate.yandex.com/' className='center grow link pa2'>Powered by Yandex.Translate</a>
				</div>}*/}
			</div>
		</div>
		);
};

export default Form;