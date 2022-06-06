import { AiFillStar } from 'react-icons/ai';

const ReviewCard = ({ review }) => {


  

return (
  <div className='reviewCard'>
   
    <div className="reviewCard__info">
      <img src={review.profile_photo_url} alt='profile' className='reviewCard__info--img'/>
     <span className='reviewCard__info--name'>{review.author_name}</span>
     <span className='reviewCard__info--rating'>
       <AiFillStar className='reviewCard__info--rating--icon' />
       <AiFillStar className='reviewCard__info--rating--icon' />
       <AiFillStar className='reviewCard__info--rating--icon' />
       <AiFillStar className='reviewCard__info--rating--icon' />
       <AiFillStar className='reviewCard__info--rating--icon' />
     </span>
      

    </div>
    <div className='reviewCard__text'>
      <p>{review.text}</p>
    </div>
  </div>
  )
}

export default ReviewCard