import PreviewCard from "../../components/previewCard/PreviewCard";
import IMAGES from "../../images/index";

import SectionHeader from "../../components/sectionHeader/SectionHeader";

const AboutUs = () => {
return (
<section className="about" id="about">
  <SectionHeader title='Our Speciality' />

  <div className="preview">
    <PreviewCard img={IMAGES.aboutUs1} title={'hookah'} subTitle={'try our premuim pineapple head hookah , try ourpremuim pineapple head hookah'} />
    <PreviewCard img={IMAGES.aboutUs1} title={'hookah'} subTitle={'try our premuim pineapple head hookah , try our premuim pineapple head hookah'} />
    <PreviewCard img={IMAGES.aboutUs1} title={'hookah'} subTitle={'try our premuim pineapple head hookah , try our premuim pineapple head hookah'} />
    <PreviewCard img={IMAGES.aboutUs1} title={'hookah'} subTitle={'try our premuim pineapple head hookah , try our premuim pineapple head hookah'} />
  </div>


  <div className="about__main">
    <div className="about__main__content">
      <h2 className="about__main__content--title">
        Step in for redefining your
        foodie album
      </h2>
      <p className="about__main__content--subtitle">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima aliquid incidunt, iure eligendi inventore ipsam voluptates voluptas reprehenderit maxime ab voluptate illo quas soluta eaque asperiores magnam, autem veniam nulla!
      </p>
    </div>
    
        <img src={IMAGES.aboutUs1} alt="hookah pic" />
   
    
        <img src={IMAGES.aboutUs2} alt="lounge pic" />
    
    
    

  </div>



</section>
)
}

export default AboutUs