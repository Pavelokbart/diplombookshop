import { IInput, INPUT_TYPES } from "../../types"
import './Input.css';

const Input = ({placeholder,type,value,onChange,label,disabled,errorMessage,className}:IInput) => {
    return (
       <div>
        <h3>{label}</h3>
        {type===INPUT_TYPES.TEXTAREA?
        <textarea
        className={"input "+className}
                placeholder={placeholder}
                value={value}
                onChange={(e)=>onChange(e)}
                disabled={disabled}
                 />

         :
         <input 
                className={"input "+className}
                placeholder={placeholder}
                value={value}
                onChange={(e)=>onChange(e)}
                type={type}
                disabled={disabled}
         
         />
         }
         {errorMessage&&<span style={{display:"block",color:'Red'}} >{errorMessage}</span>}
        

       </div>
    );
}

export  {Input};