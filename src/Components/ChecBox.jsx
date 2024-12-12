import  { useState } from 'react';

const CheckBox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div>
            <label >
                <input  className=' mr-1' type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
              <span className=' text-[ text-[18px]'>my terms and condition is acepted</span> 
            </label>
        </div>
    );
};

export default CheckBox;
