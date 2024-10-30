import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import styles from "../../../styles/contact.module.css"



export default function Contact (){
    return(
        <>
        <div className={styles.div}>
        <h1 className={styles.h1}>Contact Us</h1>
        <p className={styles.p}>Any question remarks? just write us a message!</p>
        </div>
        {/* container */}
       <div className={styles.div1}>
       <div className={styles.div2}>
       <div className={styles.div3}>
       <h2 className={styles.h2}>Contact Information</h2>
       <p>Say something to start a live chat! </p>
       <div><MdOutlinePhoneInTalk className={styles.icon} />+9210 3456 789 </div>
       <div> 
       <MdOutlineMail className={styles.icon}/>demo@gmail.com</div>
        <div>
        <FaMapMarkerAlt  className={styles.icon}/> 132 Dartmouth Street Boston, Massachusets 02415 US</div>
        <div className={styles.circle}>
        </div>
        {/* icon */}
        <div className={styles.div4}>
        <FaTwitter />
        <FaInstagramSquare />
        <FaDiscord />
        </div></div></div>
      {/* 2nd part */}
       <div className={styles.div5}>
       <div className="">
       <legend className={styles.legend}>First Name:</legend>
       <div className={styles.div6}></div>

       <legend className={styles.legend}>Email:</legend>
       <div className={styles.div6}></div>

       <div className={styles.div7}>
       <h3 style={{font: "bold"}}>Select Subject?</h3>
       <input type="checkbox" name="text" id="text"  /> general inquiry
       <input type="checkbox" name="text" id="text"  /> general inquiry
       <input type="checkbox" name="text" id="text"  /> general inquiry
 
       </div>
      {/* message */}
      <div className={styles.div8}>
      <h3>Message</h3>
      <p>Write your message..</p>
      <div className={styles.div9}></div>
      <button className={styles.btn}>Send Message</button>
      </div>
      </div>
      <div >
      <legend className={styles.legend}>Last Name:</legend>
      <div className={styles.div6}> </div>

      <legend className={styles.legend}>Phone Number:</legend>
      <div className={styles.div6}></div>
      </div>
      </div>
      </div>
      </>
    )
}