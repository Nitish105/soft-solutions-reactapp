import React from 'react';
import vg from "../assets/2.webp";
import { 
  AiFillGoogleCircle, 
  AiFillAmazonCircle, 
  AiFillYoutube, 
  AiFillInstagram
} from  "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className="home" id="home">
        <main>
            <h1>SOFT SOLUTIONS</h1>
            <p>Solution to all yours problems</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="graphics" />
        <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.  
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis commodi aspernatur repellat? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure nihil sunt quia!</p>
        </div>
    </div>

    <div className="home3" id="about">
      <div>
        <h1>Who we are?</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque maiores distinctio voluptatem deleniti hic porro, illo officia consequatur fuga, ipsa iusto temporibus perspiciatis atque dicta natus dolore, corrupti velit accusamus nam ex asperiores! Laborum consequuntur, 
        quis assumenda blanditiis dignissimos impedit eligendi eaque dolores minus natus in aliquam nobis error Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, molestias ducimus. 
        Adipisci omnis temporibus ex? Delectus, vero praesentium iusto exercitationem iure numquam est, labore dolorem beatae nihil quaerat nemo asperiores in error ratione possimus perferendis neque accusamus blanditiis corporis. Beatae tempora adipisci amet distinctio ullam 
        porro maiores quasi asperiores eum esse perspiciatis officiis quaerat, voluptates aut harum et nesciunt? 
        </p>
      </div>
    </div>

    <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>

        <article>
          <div style={{
            animationDelay: "0.3s",
          }}>
              <AiFillGoogleCircle />
              <p>Google</p>
          </div>

          <div style={{
            animationDelay: "0.5s",
          }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
          </div>

          <div style={{
            animationDelay: "0.7s",
          }}>
              <AiFillYoutube />
              <p>Youtube</p>
          </div>

          <div style={{
            animationDelay: "1s",
          }}>
              <AiFillInstagram />
              <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home;