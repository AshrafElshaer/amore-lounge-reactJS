import PreviewCard from "../../components/previewCard/PreviewCard";
import IMAGES from "../../images/index";

import SectionHeader from "../../components/sectionHeader/SectionHeader";

const AboutUs = () => {
return (
<section className="about" id="about">
  <SectionHeader header='Our Speciality' />

  <div className="preview">
     <PreviewCard img={IMAGES.aboutUs1}  title={'hookah'} subTitle={'try our premuim pineapple head hookah , try our premuim pineapple head hookah'}/>
     <PreviewCard img={IMAGES.aboutUs1}  title={'hookah'} subTitle={'try our premuim pineapple head hookah , try our premuim pineapple head hookah'}/>
     <PreviewCard img={IMAGES.aboutUs1}  title={'hookah'} subTitle={'try our premuim pineapple head hookah , try our premuim pineapple head hookah'}/>
     <PreviewCard img={IMAGES.aboutUs1}  title={'hookah'} subTitle={'try our premuim pineapple head hookah , try our premuim pineapple head hookah'}/>
  </div>

  

</section>
)
}

export default AboutUs