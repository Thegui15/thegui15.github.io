AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Mid Software Developer",
    cardImage: "assets/images/experience-page/alliageFabrica.png",
    place: "Alliage",
    time: "(October,2023 - present)",
    desp: "Development of software and firmware for dental medical equipment.<br><br><li>Utilized Python and MATLAB for advanced analysis of Dental CT machine movement patterns, contributing to significant improvements in firmware and system performance.</li> <li>Improved communication protocols, contributing to more efficient and reliable data exchange.</li><li>Contributed to the project that created a Software as a Service (SAAS).</li>",
  },
  {
    title: "Junior Software Developer",
    cardImage: "assets/images/experience-page/alliagelogo.jpg",
    place: "Alliage",
    time: "(November, 2021 - September, 2023)",
    desp: "Research and Development of Software and Firmware for medical devices. Initially worked on projects involving Test Jigs, and later was assigned to work on projects involving dental CT scanners.<br><br><li>Development of software and firmware of test jigs for dental chairs, autoclaves, portable X-ray devices, and panoramic radiographic sensors.</li><li>In the context of dental tomography equipment, I worked on developing algorithms for calibration and image processing, using Java to enhance the diagnostic efficiency of these devices.</li><li>I have solid experience in firmware development for NXP ARM Cortex CPUs, utilizing FreeRTOS or bare-metal solutions to ensure optimized performance.</li><li>Utilized Java and JavaFX in desktop software development, enhancing interfaces and functionalities of systems used in the dental field.</li><li>Developed bootloaders for dental tomography devices, streamlining firmware updates in the field, now used globally, making the work of technicians around the world more efficient.</li>",
  },
  {
    title: "R&D Intern",
    cardImage: "assets/images/experience-page/autaz_logo.jpg",
    place: "Autaz",
    time: "(October,2020 - August, 2021)",
    desp: "Research and Development of Software, Firmware, and Hardware for precision agriculture systems.<br><br><li>FreeRTOS and Embedded Linux.</li><li>Mobile development using Java in Android Studio.</li><li>Firmware development for Esp-32, STM-32, and Toradex platforms.</li><li>Utilization of Ublox GPS modules.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
 /* {
    title: "The Uplift Project",
    subtitle: "Mentor",
    image: "assets/images/experience-page/uplift.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
    href: "https://uplift.girlscript.tech/",
  },*/
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
