import React from 'react'
import Spare from "../../pics/spare3.jpeg"
import "./About.css"
const About = () => {
  return (
    <div className='about'>
      <h1>About Us</h1>
      
      <div className='about-cont'>
        <p>At Otravine Spare Parts, we specialize in providing high-quality spare parts you can trust. Whether you're repairing, upgrading, or maintaining your machinery, vehicles, or appliances — we’ve got the parts to keep you moving.
          With years of industry experience, we’ve built strong partnerships with top manufacturers and suppliers around the Zimbabwe. This allows us to offer a wide range of genuine and compatible spare parts at competitive prices, backed by exceptional
          customer service.
        </p>
        <img src={Spare} className='img' alt="We understand the urgency of repairs and replacements. That's why we work with trusted logistics partners to ensure quick dispatch and reliable delivery, keeping downtime to a minimum for our customers" />

      </div>
    </div>
  )
}

export default About