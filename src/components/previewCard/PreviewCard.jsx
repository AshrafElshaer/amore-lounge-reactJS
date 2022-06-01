import { useState } from "react"

const PreviewCard = ({ img , title , subTitle }) => {

    const [isContentShowen,setIsContentShowen] = useState(false);
    const show = 'translateY(0)'
    const hidden = 'translateY(8.5rem)'

    const handleClick = ()=>{
        setIsContentShowen(!isContentShowen);
    }
return (

    <div className='preview__card' onClick={handleClick}>
        <div className="preview__card__img">
            <img src={img} alt={title} />
        </div>
        <div className='preview__card__content' style={{transform: isContentShowen ? show : hidden}}>
            <h3 className='preview__card__content--title'>{title}</h3>
            <p className="preview__card__content-subtitle">{subTitle}</p>
        </div>
    </div>

)
}

export default PreviewCard