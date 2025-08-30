import "./Testimonal.css"
import React, { useRef } from 'react'
import next_icon from '../../pics/next-icon.png'
import prev_icon from '../../pics/back-icon.png'
import user_1 from '../../pics/user-1.jpg'
import user_2 from '../../pics/user-2.png'
import user_3 from '../../pics/user-3.png'
import user_4 from '../../pics/user-4.png'
//import user_5 from '../../assets/user-5.png'
const testimonial = () => {
  const slider=useRef();
  let tx=0;
  const slideFoward = () => {
    if(innerWidth<840){
      if(tx>-75){
        tx -= 25;
      }
    }else{
      if(tx>-50){
        tx -= 25;
      }
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  
  }
  const slideBackward = () => {
    if(window.innerWidth<840){
      if(tx<0){
        tx += 25;
      }
    } else {
      if(tx<0){
        tx += 25;
      }
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  }
  return (
    <div className='testimonials' id='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideFoward}/>
        <img src={prev_icon} alt="" className='prev-btn' onClick={slideBackward}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>Tadiwanashe Micah</h3>
                    <span>Karoi,Zimbabwe</span>
                  </div>
                </div>
                <p>University life is a transformative journey filled with challenges, discoveries, and growth. As a student navigating this world, I have encountered moments of exhilaration, frustration, and profound learning—both inside and outside the classroom. My experience has been shaped by digital tools, academic pressures, social interactions, and the constant quest for balance.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>Emmanuel Murowanidzwa</h3>
                    <span>Harare,Zimbabwe</span>
                  </div>
                </div>
                <p>University life is often portrayed as a journey filled with excitement, learning, and personal growth. For me, this experience is transformative, offering opportunities to develop academically, socially, and personally. Through various reflections shared by students, we can glimpse the multifaceted nature of university life, highlighting both its strengths and areas for improvement.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>Malvin Wachi</h3>
                    <span>Harare,Zimbabwe</span>
                  </div>
                </div>
                <p>Since the pandemic, hybrid learning—mixing in-person and online classes—has become the norm. While flexibility is a benefit, the downsides are hard to ignore. Virtual lectures often feel isolating, with cameras off and engagement low. Technical issues—lagging audio, frozen screens, or dropped connections—disrupt the flow of learning. Meanwhile, in-person classes sometimes lack the digital integration needed for smooth note-taking or collaborative work.</p>
              </div>
            </li>
             <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>Micheal Chinyanganya</h3>
                    <span>Norton,Zimbabwe</span>
                  </div>
                </div>
                <p>Beyond the screens, university is about people. Study groups that turn into friendships, professors who inspire, and late-night library sessions that test endurance—these experiences define student life. Yet, even social interactions are now mediated through apps: WhatsApp group chats for project coordination, Discord servers for virtual study sessions, and Instagram updates to stay connected.</p>
              </div>
            </li>
          </ul>
        
        </div>
    </div>
  )
}

export default testimonial
