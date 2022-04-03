import React, { useState } from 'react'

const Santosh = () => {

    const [result, setResullt] = useState('')

    const [theme , settheme] = useState("theme"? "dark " : "light")
    

    

    const change = (e) => {

        setResullt(result.concat(e.target.name));


    }

    const clear = () => {
        setResullt('')
    }

    const Back = () => {
        setResullt(result.slice(0, -1))
    }


    const calculate = () => {

        setResullt(eval(result).toString());


    }

    const mode=()=>{
        const newitem = theme === "light" ? "dark": "light"
        settheme(newitem)
        alert("clicked")
    }
   



    return (
        <>
            <div className='container  card '>
           
                <input type="text" className="input" value={result} />
                <div className='container input ' >


                    <button name='c' style={{ width: "187px", backgroundColor: "orange" }} onClick={clear}>AC</button>
                    <button name='backspace' onClick={Back} style={{ backgroundColor: "orange" }}>Back</button>
                    <button name='/' onClick={change} style={{ backgroundColor: "orange" }}>/</button>



                    <button name='7' onClick={change} >7</button>
                    <button name='8' onClick={change}>8</button>
                    <button name='9' onClick={change}>9</button>
                    <button name='*' onClick={change} style={{ backgroundColor: "orange" }}>*</button>


                    <button name='4' onClick={change}>4</button>
                    <button name='5' onClick={change}>5</button>
                    <button name='6' onClick={change}>6</button>
                    <button name='-' onClick={change} style={{ backgroundColor: "orange" }}>-</button>


                    <button name='4' onClick={change}>3</button>
                    <button name='2' onClick={change}>2</button>
                    <button name='1' onClick={change}>1</button>
                    <button name='+' onClick={change} style={{ backgroundColor: "orange" }}>+</button>

                    <button name='0' onClick={change}>0</button>
                    <button name='.' onClick={change}>.</button>
                    <button name='=' style={{ width: "187px", backgroundColor: "aqua" }} onClick={calculate}>=</button>
                </div>



                {/* <button name='+' onClick={change}>+</button> */}





            </div>


        </>

    )
}

export default Santosh;