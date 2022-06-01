import {GiCoffeeCup , GiBranchArrow } from 'react-icons/gi';


const SectionHeader = ({  header  }) => {
  return (
    <div className="section-header">
      <h1>{header}</h1>
      <GiBranchArrow className="section-header--icon"/>
      <GiCoffeeCup className="section-header--icon"/>
      <GiBranchArrow className="section-header--icon"/>
    </div>
  )
}

export default SectionHeader