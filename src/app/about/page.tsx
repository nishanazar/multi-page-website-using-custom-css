import Description from "../components/Description"

import Text from "../components/Text"
import Fashion from "../components/Fashion"
import Footer from "../components/Footer"
import styles from "../../../styles/about.module.css"


export default function About(){
    return(
    <>
    <div>
   
    <div className={styles.top}>
    <h1 className={styles.h1}>About</h1></div>
    </div>

    <div className={styles.div1}>
    <div className={styles.div2}>
    <h3 className={styles.h3}>Our team’s goal is <br />to build you a <br /> <span style={{color: "rgb(234, 88, 12 )"}}>creative, functional <br /> church website.</span></h3>
    <p className={styles.p}>Our team is headed up by a married couple who love Jesus and feel God’s calling on their lives to serve Him in what they do best – design & websites. We currently have seven team members with a myriad of skills and talents who each bring something unique to the table.</p>
    <h2 className={styles.h2}>Our # 1 goal is to make <br /> disciples for Jesus Christ.</h2>
    <h4 className={styles.h4}>More about us</h4>
    </div>

    <img className={styles.img} src="https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804_1280.jpg" alt="picture" />
     </div>
     <Text/>
     <Description/>
    <Fashion/>
 <Footer/>
    </>
    )
}