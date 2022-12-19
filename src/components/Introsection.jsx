import playBtn from '../assets/svgs/introsection/playbtn.svg'
import rightSide from '../assets/svgs/introsection/right-side.svg'

import MovingComponent from 'react-moving-text'

import Typed from 'react-typed';

import AOS from 'aos';
import { useEffect } from 'react';


const Introsection = () => {

    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);


  return (
   <div className="introsection">
    <div className="row">
        <div className="col-12 col-md-6 col-lg-5 left-side" data-aos="flip-left">


<Typed
className='typing-effect'
                strings={[
                    'Microsoft Certified Trainer',
                    'Microsoft Developing Solutions Associate',
                    'Microsoft DevOps Engineer Expert']}
                    typeSpeed={40}
                    backSpeed={50}
                    
                    loop >
                    
                </Typed>

                
        <MovingComponent
  type="fadeInFromBottom"
  duration="1000ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="1"
  fillMode="none">
             
             <p className='intro-paraqraf'>Maecenas sed ligula ut dui pharetra aliquet. Vestibulum eget orci libero. Sed est sem, mollis nec lectus nec, varius suscipit ligula. </p>

</MovingComponent>


           <div className="button-groups">
           <button className='btn btn-primary shexsi-reng'>About us</button>
           <a href="" className='ms-3'><img src={playBtn} /></a>
           <span className='ms-3'>Watch video</span>
           </div>
         
        </div>

        <div className="col-12 col-md-6 col-lg-7  right-side d-flex justify-content-end"  data-aos="fade-left">
           <img src={rightSide} alt="" />
        </div>
    </div>
   </div>
  )
}

export default Introsection