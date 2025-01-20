var typed = new Typed(".text", {
  strings: [
    "Frontend Developer",
    "Innovator",
    "Web Developer",
    "Software Developer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

//////////////////////////////////About me////////////////////////////////////
let aboutMeText = document.querySelector(".aboutMeText");
aboutMeText.innerHTML =
  "I am a passionate web developer specializing in creating dynamic, responsive, and user-centric websites. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks, I turn complex concepts into interactive, seamless digital experiences. <br>I've completed my Master's degree in Master's of Computer Science (MCA) from Dr. A.P.J. Abdul Kalam Technical University. I am a self-motivated, detail-oriented, and highly organized individual with a strong work ethic. I am always eager to learn new technologies and improve my skills. I am a team player who enjoys collaborating with others to achieve common goals. I am looking for an opportunity to work with a dynamic team of professionals to create innovative and impactful digital solutions.";
//////////////////////////////////projects////////////////////////////////////
// let projectHeading = document.querySelector("#projectHeading");
// projectHeading.innerHTML = "News Website";

// toggle icon navbar////////////////////////////////////////////////////

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("open");
};

// parallax///////////

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-items");
    } else {
      entry.target.classList.remove("show-items");
    }
  });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));

////////////////////////////////////HOME////////////////////////////////////////////////////
let homePara = document.querySelector("#homePara");
homePara.innerHTML =
  "As a passionate web developer, I specialize in creating dynamic, responsive, and user-centric websites. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks, I turn complex concepts into interactive, seamless digital experiences. ";

let downloadCv = document.querySelector("#downloadCv");
downloadCv.addEventListener("click", () => {
  alert("CV Open!");
});

let gmail = document.querySelector("#gmail");

////////////////////////////////contact section/////////////////////
let contactMsg = document.querySelector("#contactMsg");
contactMsg.innerHTML =
  "If you have any questions or need assistance, I'm here to help! Whether you’re looking for more information, have a specific inquiry, or simply want to share your feedback, feel free to get in touch with me. I'm ready to respond promptly and provide the support you need. I value every message I receive, so don’t hesitate to reach out. Contact me today, and I’ll make sure to connect with you as soon as possible. Let’s start the conversation";
