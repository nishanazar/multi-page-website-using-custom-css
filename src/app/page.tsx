import { IoMdHeart } from "react-icons/io";
import Button from "./components/Button";

import Footer from "./components/Footer"
import styles from "../../styles/page.module.css"



export default function Home(){
  return(
      <>
   
   <div className={styles.maintoparea}>
   <h1 className={styles.h1}>Cool Fashion</h1>
  <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit <br /> Earum temporibus, eligendi rerum repellat.</p>
  <Button/>
  </div>
  <h2 className={styles.h2}>Get started with <span style={{color: "rgb(234, 88,12)"}}>Little </span>Fashion</h2>
  <div className={styles.div}>
  <h2 className={styles.sectionh2}> <span style={{color: "rgb(234, 88,12)"}}>introduction</span> <br /> How we work?<br />Capabillites</h2>
  <img className={styles.img} src="https://cdn.pixabay.com/photo/2015/05/31/13/45/working-791849_1280.jpg" alt="idea"/>
  <div className={styles.div2}>
  <h3 className={styles.h3}>Good <span style={{color: "rgb(234, 88,12)"}}>Desgin <br /></span>Ideas for <span className="text-orange-600">your </span>fashion</h3>
  <p className={styles.plorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, tempora ea cum iusto culpa consequuntur explicabo inventore consequatur distinctio amet consectetur Lorem ipsum dolor sit amet .<br/>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat reiciendis ex aliquam amet magni consectetur in itaque illo, eos quasi it amet consectetur Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit .</p>
   <p className={styles.learn}>LEARN MORE ABOUT US</p>
   </div>
  </div>
  <hr />
  <div className={styles.div3}>
  <img className={styles.img2} src="https://cdn.pixabay.com/photo/2020/08/06/12/28/woman-5467838_1280.jpg" alt="shop" />
  <div className={styles.div4}>
  <h4 className={styles.h4}> <span style={{color: "rgb(234, 88,12)"}}>Retail</span> shop owners</h4>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Quaerat deserunt at cum maiores totam dignissimos quia!</p>
  <p className={styles.product}>EXPLORE PRODUCTS</p>
  </div>
  </div>
  <h2 className={styles.featured}>Featured Products</h2>
  <div className={styles.div5}>
  <div style={{height: "350px"}}>
  <div style={{position: "relative"}}>
  <img className={styles.img3} src="https://images.thdstatic.com/productImages/8d4b760b-d4e3-4101-ae61-e9a46671f050/svn/living-luxury-artificial-trees-60422-p-64_1000.jpg" alt="tree pot" />
  <IoMdHeart className={styles.heart} />
  <p className={styles.newarival}>New Arival</p>
  <h3 className={styles.ptext}>Tree pot</h3>
  <p className={styles.description}>Original package desgin from house</p>
  </div>
  </div>
  <div style={{height: "350px"}}>
  <div style={{position: "relative"}}>
  <img className={styles.img3} src="https://cdn.pixabay.com/photo/2021/02/16/02/56/clothes-6019690_640.jpg" alt="fashion" />
  <IoMdHeart className={styles.heart} />
  <p className={styles.newarival}>Low Price</p>
  <h3 className={styles.ptext}>Fashion set</h3>
  <p className={styles.description}>Customer package</p>
  </div>
  </div> 
  <div style={{height: "350px"}} >
  <div style={{position: "relative"}}>
  <img className={styles.img3} src="https://cdn.pixabay.com/photo/2020/07/09/20/37/nutrition-5388710_1280.jpg" alt="drinks" />
  <IoMdHeart className={styles.heart} />
  <p className={styles.ptext}>Best Quality</p>
  <h3 className={styles.newarival}>Juice Drinks</h3>
  <p className={styles.description}>Nature made another world</p></div></div> </div>
  <p className={styles.view}>View All Products</p>
  <Footer/>
 </>
  )
}
