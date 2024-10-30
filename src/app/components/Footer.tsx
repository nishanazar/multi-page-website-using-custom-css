import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import styles from "../../../styles/footer.module.css"

export default function Footer(){
return(
<div>
<footer >
<div className={styles.main}>
  
<div className={styles.leftcontect}>
<h2 className={styles.h2}>Little <span className={styles.textwhite}>Fashion</span></h2>
<p>Copyright © 2023 Little Fashion</p>
<p>Designed by ♥ Nisha Nazar</p>
</div>

<div className={styles.leftcontect}>
<h2 className={styles.text}>Sitemp</h2>
<ul className={styles.ul}>
<li>Story</li>
<li>Privacy policy</li>
<li>Contact</li>
</ul>
</div>
<div className={styles.leftcontect}>
<ul className={styles.ul}>
<li>Products</li>
<li>FAQs</li>
</ul>
</div>
<div className={styles.leftcontect}>
<h2 className={styles.text}>Follow Us </h2>
<br />
<div className={styles.icon}>
<FaYoutube /><FaWhatsapp /><FaInstagram /><FaSkype />

</div>
<h3 className={styles.h3}>Subscribe For Updates & Insights</h3>

<input className={styles.input}  type="text" placeholder="search" />

</div>
</div>
</footer>
</div>
    )
     
 
 
 }