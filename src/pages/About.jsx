import style from './About.module.css'
import Photo from '../assets/Bitmap.jpeg'
import Cofe from '../assets/cofe.jpeg'
import Rct from '../assets/Bitmap-2.jpeg'
import Rct2 from '../assets/Bitmap-3.jpeg'
import Rct3 from '../assets/Bitmap-4.jpeg'
import { useState } from 'react'
function About(){
    let images=[Rct,Rct2,Rct3]

    const [change, setChange]=useState(0)

    

   

 
    return(
        <>
        <div className={style.container}>
            <div className={style.leftSide}>
             <div className={style.inner}>
                <h1>Branding & website design agency</h1>
                <p>We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital word</p>
                <div className={style.learn}>Schedule a Call</div>
             </div>
            </div>
            <div className={style.rightSide}>
          <img src={Photo} alt="" className={style.image} />
            </div>
        </div>

        <div className={style.container2}>
            <div className={style.picture1}>
            <img src={Cofe} alt="cofe-img" />
            </div>

            <div className={style.innerTxt1}>
             <div className={style.inner2}>
                <h2><span style={{color: '#F94F4F'}}>Design</span> is strategic</h2>
                <p>'A well-crafted design strategy consistently produces desired outcomes and brand awareness. We are firm believers that success lies in creative collobration with our clients.'</p>
                <span className={style.schedule}>Schedule a Call</span>
             </div>
            </div>
        </div>

        <div className={style.container3}>
            <div className={style.inner3}>

            <div className={style.approacher}>
                <h2>Our approach for creating a winning brand</h2>
            </div>
            <div className={style.absoluter}>
                <div className={style.inner4}>
                    <h2 className={style.texter}>Our approach for creating a winning brand</h2>
                    <div className={style.card1}>
                        <p className={style.decora}>01</p>
                        <h3>Brand Strategy</h3>
                        <p>Brand strategy is critical for long-term success.Outshing competitors and capturing the target audience are key</p>
                    </div>
                    <div className={style.card2}>
                    <span className={style.decora}>02</span>
                        <h3>Brand Design</h3>
                        <p>Keepping the brand design unique and meaningful helps in communcationg the brand's timeless value effectively</p>
                    </div>
                    <div className={style.card3}>
                    <span className={style.decora}>03</span>
                        <h3>Web Design</h3>
                        <p>A beatifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>

        <div className={style.container4}>
<div className={style.changer}>
    <div className={style.innerChanger}>
        <h2>Brand naming & guidelines</h2>
    </div>
    <div className={style.controller}>
        <p onClick={()=>setChange(change-1)}> -  </p>
        <p onClick={()=>setChange(change+1)}> - </p>
    </div>
</div>

<div className={style.photos}>
    <img src={images[change]} alt="about" />
</div>
        </div>
        </>
    )
}
export default About