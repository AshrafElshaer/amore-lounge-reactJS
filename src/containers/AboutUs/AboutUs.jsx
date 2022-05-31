import PreviewCard from "../../components/previewCard/PreviewCard";
import img from '../../images/about-us-1.jpg';
import {GiCoffeeCup , GiBranchArrow } from 'react-icons/gi';

const AboutUs = () => {
return (
<section className="about" id="about">
  <div className="about__header">
  <h1>Our Speciality</h1>
  <GiBranchArrow className="about__header--icon"/>
  <GiCoffeeCup className="about__header--icon"/>
  <GiBranchArrow className="about__header--icon"/>

  </div>

  <div className="preview">
     <PreviewCard img={img}  title={'hookah'} subTitle={'try our premuim pineapple head hookah , try our premuim pineapple head hookah'}/>
     <PreviewCard img={img}  title={'hookah'} subTitle={'try our premuim pineapple head hookah , try our premuim pineapple head hookah'}/>
     <PreviewCard img={img}  title={'hookah'} subTitle={'try our premuim pineapple head hookah , try our premuim pineapple head hookah'}/>
     <PreviewCard img={img}  title={'hookah'} subTitle={'try our premuim pineapple head hookah , try our premuim pineapple head hookah'}/>
  </div>

</section>
)
}

export default AboutUs