// import React, { useEffect, useState } from 'react';
// import "../css/footer.css";
// import { BsFacebook,BsInstagram,BsTwitter } from 'react-icons/bs';
// const Footer=()=>{
//     const d=new Date()
//     const year=d.getFullYear()
//     const[time,setTime]=new useState(year)
//     useEffect(()=>{setInterval(()=>setTime(year),1000)},[])
//     return(
//         <div className='footer'>
//             <div className='footer_padding'>
//                 <div className='footer_link'>
//                     <div className='footer_link_div'>
//                 <h4>
//                     For Business
//                 </h4>
//                 <a>
//                     Employer
//                 </a>
//                 <a>
//                     Health Plan
//                 </a>
//                 <a>
//                     Individual
//                 </a>
//                     </div>
//                     <div className='footer_link_div'>
//                         <h4>
//                             Resources
//                         </h4>
//                         <a>
//                             Resource Center
//                         </a>
//                         <a>
//                             Testimonials
//                         </a>
//                         <a>
//                             STV
//                         </a>
//                     </div>
//                     <div className='footer_link_div'>
//                         <h4>
//                             Partners
//                         </h4>
//                         <a>
//                             Swing Tech
//                         </a>
//                     </div>
//                     <div className='footer_link_div'>
//                         <h4>
//                             Company
//                         </h4>
//                         <a>About</a>
//                         <a>Press</a>
//                         <a>Career</a>
//                         <a>Contact</a>
//                     </div>
//                     <div className='footer_link_div'>
//                         <h4>Social Media</h4>
//                         <div className='socialmedia'>
//                     <p><BsFacebook /></p>
//                         <p><BsInstagram  /></p>
//                         <p><BsTwitter  /></p>
//                         </div>
//                     </div>
//                 </div>
//                 <hr></hr>
//                 <div className='footer_below'>
//                     <div className='footer_copyright'>
//                     <p>{time} All rights are reserved</p>
//                     </div>
//                     <div className='footer_below_links'>
//                     <p>Terms and Conditions</p>
//                     <p>Privacy</p>
//                     <p>Security</p>
//                     <p>Cookie Declaration</p>
//                     </div>
//                 </div>
//                 </div>
//         </div>
//     )
// }
// export default Footer;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  console.log(year);
  const [time, setTime] = new useState(year);
  useEffect(() => {
    setInterval(() => setTime(year), 1000);
  }, []);
  return (
    <div className="footer">
      <div className="footer_padding">
        <div className="footer_link">
          <div className="footer_link_div">
            <h4>Products</h4>
            <Link to="/paints">
              Paints
              <div class="dropdown-menu">
                <ul>
                  <Link to="/paints/undercoats">UnderCoats</Link>
                </ul>
                <ul>
                  <Link to="/paints/interioremulsions">Interior Emulsion</Link>
                </ul>
                <ul>
                  <Link to="/paints/exterioremulsions">Exterior Emulsion</Link>
                </ul>
              </div>
            </Link>

            <Link to="/tilingsolutions">
              Tilling_Solutions
              <div class="dropdown-menu">
                <ul>
                  <Link to="/tilingsolutions/tileadhesives">
                    Tile Adhesives
                  </Link>
                </ul>
                <ul>
                  <Link to="/tilingsolutions/tilegrout">Tile Grout</Link>
                </ul>
                <ul>
                  <Link to="/tilingsolutions/tilecleaner">Tile Cleaner</Link>
                </ul>
              </div>
            </Link>

            <Link to="/constructionchemicals">
              Construction_Chemicals
              <div class="dropdown-menu">
                <ul>
                  <Link to="/constructionchemicals/waterproofing">
                    Water Proofing
                  </Link>
                </ul>
                <ul>
                  <Link to="/constructionchemicals/bondingagents">
                    Bonding Agents
                  </Link>
                </ul>
                <ul>
                  <Link to="/constructionchemicals/admixture">Admixture</Link>
                </ul>
              </div>
            </Link>

            <Link to="/kitchensinks">
              Kitchen_Sinks
              <div class="dropdown-menu">
                <ul>
                  <Link to="/kitchensinks/glossyfinish">Glossy Finish</Link>
                </ul>
                <ul>
                  <Link to="/kitchensinks/mattfinish">Matt Finish</Link>
                </ul>
                <ul>
                  <Link to="/kitchensinks/handmadesinks">Handmade Sinks</Link>
                </ul>
              </div>
            </Link>
          </div>

          <div className="footer_link_div">
            <h4>Address</h4>
            <p>8/A,Natesan Nagar,</p>
            <p>27th Street,Ashtalakshmi Nagar</p>
            <p>Alapakkam</p>
            <p>Chennai-600116</p>
          </div>
          <div className="footer_link_div">
            <h4>Contact</h4>
            <p>Phone: 9944132111</p>
            <p>Whatsapp:9944132111</p>
            <p>Email:tiopaints@gmail.com</p>
          </div>
          <div className="footer_link_div">
            <h4>Social Media</h4>
            <div className="socialmedia">
              <a href="#">
                <BsFacebook />
              </a>
              <a href="#">
                <BsInstagram />
              </a>
              <a href="#">
                <BsTwitter />
              </a>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="footer_below">
          <div className="footer_copyright">
            <p>{time} All rights are reserved</p>
          </div>
          <div className="footer_below_links">
            <p>Privacy</p>

            <p>Cookie Declaration</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
