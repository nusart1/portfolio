import React, { useState } from 'react';
import Home from './components/portfolio/home/home';
import About from './components/portfolio/about/about';
import Scils from './components/portfolio/scils/scils';
import Contact from './components/portfolio/contact/contact';
import './App.css';

function App() {
  const [language, setLanguage] = useState('uz');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const portfolioData = {
    uz: {
      salomlashuv: "Salom, men – Nusratillo",
      kasb: "Frontend dasturchi va UI/UX dizayner",
      tavsif: "React, HTML, CSS, JavaScript va Figma orqali kreativ, funksional va foydalanuvchi uchun qulay veb-ilovalar yarataman. Veb-dizayn va interaktivlikni uyg‘unlashtirib ishlashni yaxshi ko‘raman.",
      about: "Men haqimda",
      skills: "Ko‘nikmalar va Texnologiyalar",
      tavsif2: "Men frontend dasturlash va UI/UX dizayn sohalariga ishtiyoqmand mutaxassisman. React, JavaScript, HTML, CSS hamda Figma bilan samarali ishlayman. Foydalanuvchiga yoqadigan, chiroyli va qulay veb-ilovalar yaratishni xush ko‘raman. Mening maqsadim – doimiy o‘rganish va innovatsion raqamli yechimlar ishlab chiqish.",
      skillsList: [
        { name: "React", icon: "FaReact", level: 95 },
        { name: "HTML", icon: "FaHtml5", level: 90 },
        { name: "CSS", icon: "FaCss3Alt", level: 85 },
        { name: "JavaScript", icon: "FaJsSquare", level: 85 },
        { name: "Node js", icon: "FaJsSquare", level: 50 }
      ],
      contact: "Bog‘lanish",
      contactDescription: "Menga bemalol murojaat qilishingiz mumkin! Hamkorlik, freelance loyihalar yoki texnologiyalar haqida suhbatlashish uchun doim ochiqman. Quyida xaritada joylashuvimni ko‘rishingiz mumkin.",
      location: "Samarqand, O‘zbekiston",
      email: "nusratillo815@gmail.com",
      phone: "+998 90 212 30 64",
      intagram: "nusratill0",
      telegram: "@Nusratillo_Shavkatov"
    },

    ru: {
      salomlashuv: "Привет, я Нусратилло",
      kasb: "Frontend разработчик и UI/UX дизайнер",
      tavsif: "Создаю креативные, функциональные и удобные веб-приложения с использованием React, HTML, CSS, JavaScript и Figma. Люблю совмещать веб-дизайн и интерактивность.",
      about: "Обо мне",
      skills: "Навыки и технологии",
      tavsif2: "Я увлечённый frontend-разработчик и UI/UX дизайнер, специализирующийся на React, JavaScript, HTML, CSS и Figma. Мне нравится создавать визуально привлекательные и удобные веб-приложения с отличным пользовательским опытом. Моя цель — постоянно учиться и создавать инновационные цифровые решения.",
      skillsList: [
        { name: "React", icon: "FaReact", level: 95 },
        { name: "HTML", icon: "FaHtml5", level: 90 },
        { name: "CSS", icon: "FaCss3Alt", level: 85 },
        { name: "JavaScript", icon: "FaJsSquare", level: 85 },
        { name: "Node js", icon: "FaJsSquare", level: 50 }
      ],
      contact: "Связаться со мной",
      contactDescription: "Не стесняйтесь связаться со мной! Я открыт для сотрудничества, фриланс-проектов или просто поболтать о технологиях. Ниже указано моё местоположение на карте.",
      location: "Самарканд, Узбекистан",
      email: "nusratillo815@gmail.com",
      phone: "+998 90 212 30 64",
      intagram: "nusratill0",
      telegram: "@Nusratillo_Shavkatov"
    },

    en: {
      salomlashuv: "Hello, I'm Nusratillo",
      kasb: "Frontend Developer & UI/UX Designer",
      tavsif: "I create creative, functional, and user-friendly web applications using React, HTML, CSS, JavaScript, and Figma. I enjoy combining web design and interactivity.",
      about: "About Me",
      skills: "Skills & Technologies",
      tavsif2: "I am a passionate frontend developer and UI/UX designer with expertise in React, JavaScript, HTML, CSS, and Figma. I enjoy creating visually appealing and user-friendly web applications that provide excellent user experiences. My journey is driven by a desire to continually learn and build innovative digital solutions.",
      skillsList: [
        { name: "React", icon: "FaReact", level: 95 },
        { name: "HTML", icon: "FaHtml5", level: 90 },
        { name: "CSS", icon: "FaCss3Alt", level: 85 },
        { name: "JavaScript", icon: "FaJsSquare", level: 85 },
        { name: "Node js", icon: "FaJsSquare", level: 50 }
      ],
      contact: "Contact Me",
      contactDescription: "Feel free to reach out! I'm open to collaborations, freelance projects, or simply chatting about tech. You can find my location on the map below.",
      location: "Samarkand, Uzbekistan",
      email: "nusratillo815@gmail.com",
      phone: "+998 90 212 30 64",
      intagram: "nusratill0",
      telegram: "@Nusratillo_Shavkatov"
    }
  };

  const data = portfolioData[language];

  return (
    <div className='App'>
      <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Til va Rejim Tanlash */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px' }}>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="uz">🇺🇿 O‘zbekcha</option>
          <option value="ru">🇷🇺 Русский</option>
          <option value="en">🇬🇧 English</option>
        </select>
        <button onClick={toggleDarkMode}>
          {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>

      {/* Komponentlar */}
      <Home data={data} />
      <About data={data} />
      <Scils data={data} />
      <Contact data={data} />
    </div>
    </div>
  );
}

export default App;





// import React from "react";

// // import Home from "./uzum_market/sayt/home/home";  
// import Backend from "./components/fake_bacend/fake_bacend";



// function App  ()  {
//     const ism = [
//       {
//         ism: "Nusratillo",
//         yosh: 13,
//         kasb: "Frontend Dasturchi",
//         manzil: "Samarkand, O'zbekiston",
//       }
//     ];
//     return (
//        <div>
//        <h2>App Component</h2>
//        <Backend ism={ism} />
//        </div>
//     );
// };

// export default App;