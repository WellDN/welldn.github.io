import image0 from "./images/image0.png";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import call from "./images/call.png";
import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import ScrollToDiv from "./scrollDiv";

import runAnimations from "./scripts";

const App = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    runAnimations();
  }, []);


  return (
    <div className="parent-div ">
      <div className="pos-abs portfolio-42">
        <div className="pos-abs franceversaille-712">
          <img
            src={image0}
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-712 object-fit "
            alt="France-Versailles-Chateau-de-Versailles-Hercules-Room-Ceiling-1440x954 11 Image"
          />{" "}
        </div>
        <div className="pos-abs about-229">
          <ScrollToDiv buttonText="ABOUT" targetRef={aboutRef} targetId="fullscreen-2616" buttonClass="about-229-0" />
        </div>
        <div className="pos-abs works-2618">
      <ScrollToDiv buttonText="WORKS" targetRef={worksRef} targetId="fullscreen-2617" buttonClass="works-2618-0" />
        </div>
        <div className="pos-abs contact-2210">
      <ScrollToDiv buttonText="CONTACT" targetRef={contactRef} targetId="fullscreen-scroll" buttonClass="works-2618-0" />
        </div>
        <div className="pos-abs line-2-372"></div>
        <div className="pos-abs line-3-373"></div>
        <div className="pos-abs line-4-374"></div>
        <div className="pos-abs line-13-1103"></div>
        <div className="pos-abs rectangle-11-11337"></div>
        <div className="pos-abs passionate-abou-11233">
          <span className="passionate-abou-11233-0 ">{` PASSIONATE ABOUT CRAFTING VISUALLY STUNNING AND HIGHLY FUNCTIONAL WEBSITES.
 WITH A KEEN EYE FOR DETAIL AND A DEEP UNDERSTANDING OF USER EXPERIENCE,
  I SPECIALIZE IN CREATING SEAMLESS DIGITAL EXPERIENCES THAT CAPTIVATE AND ENGAGE AUDIENCES.`}</span>
        </div>
        <div className="pos-abs rectangle-12-11339"></div>
        <div className="pos-abs developer--desi-132">
          <span className="developer--desi-132-0 ">{`DEVELOPER &
 DESIGNER`}</span>
        </div>
        <div className="pos-abs fullscreen-2616"></div>
        <div className="pos-abs franceversaille-476268">
          <img
            src={image0}
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-476268 object-fit "
            alt="France-Versailles-Chateau-de-Versailles-Hercules-Room-Ceiling-1440x954 41 Image"
          />{" "}
        </div>
        <div className="pos-abs ellipse-11-476328">  </div>
        <div className="pos-abs ellipse-21-476344">
          <div className="nodeBg-476343 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
        </div>
        <div className="pos-abs vector-2-476315">
          <div className="nodeBg-476315 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
        </div>
        <div className="pos-abs drawing-upon-my-476313">
          <span className="drawing-upon-my-476313-0 ">{`Drawing upon my extensive knowledge of modern web technologies, I strive to bring creativity and innovation to every project I undertake. Whether it's designing elegant user interfaces, developing robust backend systems, or optimizing websites for maximum performance, I am committed to delivering exceptional results that exceed client expectations.`}</span>
        </div>
        <div className="pos-abs line-12-476298"></div>
        <div className="pos-abs ellipse-6-476306"></div>
        <div className="pos-abs in-addition-to--476314">
          <span className="in-addition-to--476314-0 ">{`In addition to my technical expertise, I value continuous growth and staying up-to-date with the latest industry trends. I am constantly expanding my skill set to offer cutting-edge solutions that not only meet current standards but also future-proof websites for scalability and adaptability.`}</span>
        </div>
        <div className="pos-abs line-5-476297"></div>
        <div className="pos-abs ellipse-1-476305"></div>
        <div className="pos-abs fullscreen-2617"></div>
        <div className="pos-abs franceversaille-476269"></div>
        <div className="pos-abs screenshot-from-479356">
          <img
            src={image1}
            className="image-div bg-no-repeat fill-parent bg-contain nodeBg-479356 object-contain "
            alt="Screenshot from 2024-08-21 13-35-301 Image"
          />{" "}
      </div>
        <div className="pos-abs line-6-476299"></div>
        <div className="pos-abs line-9-476300"></div>
        <div className="pos-abs ellipse-21-476345">
          <div className="nodeBg-476343 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
        </div>
        <div className="pos-abs ellipse-20-476343"></div>
        <div className="pos-abs ellipse-3-476307"></div>
        <div className="pos-abs ellipse-7-476308"></div>
        <div className="pos-abs vector-3-476319">
          <div className="nodeBg-476319 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
        </div>
        <div className="pos-abs screenshot-from-479352">
          <img
            src={image2}
            className="pos-abs image-div bg-no-repeat fill-parent bg-contain nodeBg-479352 object-contain "
            alt="Screenshot from 2024-08-21 13-34-011 Image"
          />{" "}
        </div>
        <div className="pos-abs line-10-476302"></div>
        <div className="pos-abs ellipse-21-476346">
          <div className="nodeBg-476343 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
        </div>
        <div className="pos-abs ellipse-20-476344"></div>
        <div className="pos-abs ellipse-8-476310"></div>
        <div className="pos-abs vector-4-476320">
          <div className="nodeBg-476320 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
        </div>
        <div className="pos-abs screenshot-from-479354">
          <img
            src={image3}
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-479354 object-fit "
            alt="Screenshot from 2024-08-21 13-34-381 Image"
          />{" "}
        </div>
        <div className="pos-abs line-8-476304"></div>
        <div className="pos-abs line-11-476303"></div>
        <div className="pos-abs ellipse-21-476343">
          <div className="nodeBg-476343 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
        </div>
        <div className="pos-abs ellipse-20-476342"></div>
        <div className="pos-abs ellipse-5-476311"></div>
        <div className="pos-abs ellipse-9-476312"></div>
        <div className="pos-abs vector-8-9712">
          <div className="nodeBg-9712 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
        </div>
        <div className="pos-abs fullscreen-11210"></div>
        <div className="pos-abs contact-me-11217">
          <span className="contact-me-11217-0 ">{`CONTACT
ME`}</span>
      </div>
        <div className="pos-abs line-14-476336"></div>
        <div className="pos-abs line-14-4764"></div>
        <div className="pos-abs line-16-4767"></div>
        <div className="pos-abs line-17-4768"></div>
        <div className="pos-abs line-18-4769"></div>
        <div className="pos-abs ellipse-18-47610"></div>
        <div className="pos-abs ellipse-19-47611"></div>
        <div className="pos-abs phone-47612">
          <img
            src={call}
            className="pos-abs image-div bg-no-repeat fill-parent bg-contain nodeBg-47612 object-fit "
            alt="Phone Image"
          />{" "}
      </div>
        <div className="pos-abs email-47612">
      <a href="mailto: wellington.araujj@gmail.com">
          <img
      
            src={image4}

            className="pos-abs image-div bg-no-repeat fill-parent bg-contain nodeBg-47612 object-fit "
            alt="Email1 Image"
          />{" "}
      </a>
        </div>
        <div className="pos-abs c-11932463031-47617">
          <span className="c-11932463031-47617-0 ">{`11932463031`}</span>
        </div>
        <div className="pos-abs wellingtonarauj-47613">
          <span className="wellingtonarauj-47613-0 ">{`wellington.araujj@gmail.com`}</span>
        </div>
        <div className="pos-abs line-20-47618"></div>
        <div className="pos-abs line-19-47614"></div>
        <div className="pos-abs wellington-arau-1129">
          <span className="wellington-arau-1129-0 ">{`Wellington Araujo`}</span>
        </div>
      <div className="pos-abs fullscreen-scroll"></div>
      </div>
    </div>
  );

};
ReactDOM.createRoot(document.getElementById("portfolio-root") as HTMLElement).render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
)
