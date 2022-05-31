const PreviewCard = ({ img , title , subTitle }) => {
return (

    <div className='preview__card'>
        <div className="preview__card__img">
            <img src={img} alt={title} />
        </div>
        <div className='preview__card__content'>
            <h3 className='preview__card__content--title'>{title}</h3>
            <p className="preview__card__content-subtitle">{subTitle}</p>
        </div>
    </div>

)
}

export default PreviewCard