import cardImg from '../assets/svgs/carousel-section/card-img.svg'
const Card = ({meqaleBasligi,meqale,shekil}) => {
    return (
        <div className='custom-card'>
            <h4>{meqaleBasligi}</h4>
            <p>{meqale}</p>
            <img src={shekil} alt="" width={100} />
        </div>
    )
}

export default Card