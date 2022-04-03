import React, { useState } from 'react'

const Cal = () => {

    const [num, setnum] = useState("")
    const [num2, setnum2] = useState('')
    const [operation1, setoperation1] = useState()
    const [TOGGLE, setTOGGLE] = useState(1)

    const change = (e) => {
        if(TOGGLE)
             setnum(num.concat(e.target.name));
        else{
            setnum2(num2.concat(e.target.name));
            // alert(TOGGLE);
            // alert(num2);
        }
           
         
    }

    // const clear = () => {
    //     setnum('')
    // }

    // const sum = () => {
    
    //    setnum(result.eval(num.result))
    // }
    const operation =(value)=>{
        //  sum=parseInt(num)+
        // alert(value)
        setoperation1(value)
        // setnum('')
        setTOGGLE(0)

    }
    const result =(operation)=>{
              switch(operation)
              {
                  case 'sum':
                      const res=parseInt(num) + parseInt(num2)
                      setnum('')
                      setnum2('')
                      setoperation1('')
                      setTOGGLE(1)
                      alert(res);
                  default:
                       return 0;

              }
    }

    console.log(num)

    return (
        <>

            <input type="text" value={TOGGLE?num:num2} />
            <div>
                <button name='1' onClick={change}>1</button>
                <button name='2' onClick={change}>2</button>
                <button name='3' onClick={change}>3</button>
                <button name='4' onClick={change}>4</button>
                {/* <button name='5' onClick={change}>5</button>
                <button name='6' onClick={change}>6</button>
                <button name='7' onClick={change}>7</button> 
                <button name='8' onClick={change}>8</button>
                <button name='9' onClick={change}>9</button>
                <button name='0' onClick={change}>0</button> */}
                <button name='+' onClick={()=>operation('sum')}>+</button>
                {/* // <button name='-' onClick={change}>-</button> */}
                <button name='=' onClick={()=> result(operation1)}>=</button>
                {/* <button name='*' onClick={change}>*</button> */}
                {/* <button name='clear' onClick={clear}>clear</button> */}


            </div>

        </>

    )
}

export default Cal