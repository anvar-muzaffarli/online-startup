import cardImg from '../assets/svgs/carousel-section/card-img.svg'
const Card = () => {
    return (
        <div className='custom-card'>
            <h4>Market Research</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsum porro pariatur tempora, quam aliquid quis dicta soluta? Eveniet, officia!</p>
            <img src={cardImg} alt="" />
        </div>
    )
}

export default Card