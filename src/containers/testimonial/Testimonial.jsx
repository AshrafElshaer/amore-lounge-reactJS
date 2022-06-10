import SectionHeader from '../../components/sectionHeader/SectionHeader';
import {useEffect , useState } from 'react';
import reviewsData from '../../reviews.json';
import ReviewCard from '../../components/reviewCard/ReviewCard';



const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(reviewsData.result.reviews);
  }, []);

   
    
  return (
    <section className='testimonial' id='testimonial'>
        <SectionHeader title='What Customers say about us' />

        <div className="testimonial__reviews">
         
          {
            reviews.map((review, index) => {
              return (
              <ReviewCard review={review} key={index}/>
               );
             })
        }
        </div>

    </section>
  )
}

export default Testimonial