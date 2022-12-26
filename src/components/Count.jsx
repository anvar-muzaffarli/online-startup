import React from 'react'
import CountUp from 'react-countup'

const Count = () => {
  return (
    <div className='count-up-section'>
        <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
               <CountUp
                end={122} 
                duration={10}
               />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
            <CountUp
                end={100} 
                duration={200}
               />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
            <CountUp
                end={198} 
                duration={70}
               />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
            <CountUp
                end={348} 
                duration={20}
               />
            </div>
        </div>
    </div>
  )
}

export default Count