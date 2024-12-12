import  { useState } from 'react';

const RadioButton = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className=' flex flex-col'>
            <label >
                <input className='mr-1' type="radio" value="male" checked={selectedOption === 'male'} onChange={handleOptionChange}/>
              <span> male </span>
            </label>

            <label>
                <input className=' mr-1' type="radio"value="female"checked={selectedOption === 'female'}onChange={handleOptionChange}/>
              <span> female</span>
            </label>
        </div>
    );
};

export default RadioButton;
