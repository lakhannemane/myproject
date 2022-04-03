import React from 'react'
import Cal from './Cal'

const Content = () => {
    return (
        <>
            <div>
                <div className="container text-center">
                    <h2>Simple Calculator</h2>
                    <div className="row text-center ">
                        <div className="col-3"></div>
                        <div className="col-6">
                            <Cal/></div>

                        <div className="col-3"></div>

                     </div>
                </div>
            </div>
        </>
    )
}

export default Content