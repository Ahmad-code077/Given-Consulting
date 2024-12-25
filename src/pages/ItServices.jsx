import React from 'react';
import businessWebsite from '../assets/services/Business_Websites&Apps.jpg';
import portfolio from '../assets/services/Portfolio_Websites&Apps.jpg';
import saas from '../assets/services/saas-concept-collage.jpg';
import mobileDevelopment from '../assets/services/mobileDevelopment.png';
import webDevelopment from '../assets/services/webDevelopment.png';
import digital from '../assets/services/digitalMarketing.jpg';
import landingPage from '../assets/services/landing-page.jpg';
import educational from '../assets/services/educational.jpg';
import Nonprofit from '../assets/services/Nonprofit.jpg';
import corporat from '../assets/services/corporat.jpg';
import membership from '../assets/services/membership.jpg';
import softwereSystems from '../assets/services/softwereSystems.jpg';
import ai_machine_learning from '../assets/services/aiAndMachineLearning.jpg';
import graphDesigning from '../assets/services/graphDesigning.jpg';
import contentWriting from '../assets/services/content-writing.jpg';

const ItServices =  ()=> {
  const services = [
    { title: 'Mobile Development', image: mobileDevelopment },
    { title: 'Web Development', image: webDevelopment },
    { title: 'UI/UX Design', image: 'https://s3-alpha-sig.figma.com/img/eaf9/5e41/9114dcf1e04264abda82970018cb5933?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wdbey3n16agTdfgfKU583JMFJ8DXNvTKoTE0JZJ9liijQA3eOQGfNwO0h3HcyVrNMtJV6Na1JojaZQKVCGYcdfVxCTebMDMZ8pFAV~-VES9qOXUUV2xTyKB9YeO4vLC-SWIhakRYiz~NFdx0HyenjCHVRYRv6hEc-XesWTpuSsUsrzF67lVlx14pyFg6PKQUi0GNqhEtsg1QV009Rm7ylZuC22N9pwH0YKhnLLJaXI5fn7nzYAE1QuOQ231mT3F1olRMELOFl6f9tT-U-uWojePATgtzKBXihkxxo~S8RXamTwNdtdm~kN1Mj~m8-gDWZkmmXUYeUPhcEvL2EMSSfg__' },
    { title: 'SEO', image: 'https://s3-alpha-sig.figma.com/img/4d97/72f9/1d3f0c4934d0cb8598085a0fdc5349b9?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BTuMStZWuGoaj-U-cWYknuTsPbxSMUle1jcj5QdRRbKMYJuqDYDpTZZUYm1QgzhhGD8Zo9m42PzS4Bjqlq1NQazAKfNd79mELSe1hVqEBOfcNSTTD0t4xJmqyguT-67KoceHBYA6U-lUrU~Ovw2VzY9omUpiJ~8fdSRXMW9nDd6SAIpreVB46n1wtf0sWeQ9P3zATe3nI9oa3Deze1pdWFMn3WSc2rRyKQ06PZgWHMUPfVyLhNHqdanY70tMXjTFmESd11iKMq1Js4-RPXq4D70Vtyq4b64uvVc62zViMcSCqeIwPxwwFN5mqt~JOXmUoWVqWeIeseWmtaPQ5bDEbw__' },
    { title: 'Digital Marketing', image:digital },
    {title:'Content Writing Services',image:contentWriting},
    {title:'Graphics Design & Video Editing',image:graphDesigning},
    { title: 'WordPress', image: 'https://s3-alpha-sig.figma.com/img/25d2/0231/664bb9d904f6529ae016f2b87d60777a?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z4H15~nW2Ai0ZfcBIaCd1NG3XjBhkjvtIoIGYjcrx4Y5rMadG68nrrnEazKpR3Gk3YTmDKoEOTPLh7ZG5QOZbDYEi95NuPlZSaU-WJDEMvZK13czEVfLHsagCYGPlSknMhPLT4OBoRiWdwx-NKO~qG5RkrKzXkUSoPTJV3t1qYytfzBlNQrJO5O1taSAvLIHwo~W9LNRWHVniBdfGUaTZvXiGdVPO1cI0mr7PNXbPWmWlAiY8WcP6RusNS9LeMNla1Ahf9aKXpqqqGV46y3UaZtD9v2~8DtR1yvZwgMTkiRH2JdDqnyL282mn05e0a~q8hMsd19OSDjqVpT9lOgdJw__' },
    {title:'Business Websites & Apps',image:businessWebsite},
    {title:'Portfolio Websites & Apps',image:portfolio},
    {title:'SaaS Websites & Apps',image:saas},
    {title:'Landing Page Websites & Apps',image:landingPage},
    {title:'Educational & eLearning Websites & Apps ',image:educational},
    {title:'Nonprofit Websites & Apps',image:Nonprofit},
    {title:'Corporate Websites & Apps',image:corporat},
    {title:'AI & Machine Learning Services',image:ai_machine_learning},
    {title:'Membership Websites & Apps',image:membership},
    {title:'Sell & Purchase Software Systems',image:softwereSystems},
  ];

  return (
    <div>
      {/* Heading Section */}
      <div className='p-9 bg-yellow-200 py-10 px-8 text-center mt-9 rounded-md sm:mx-8'>
        <h1 className="text-black font-bold text-2xl mb-4">OUR CORE CUSTOM SOFTWARE DEVELOPMENT SERVICES</h1>
        <p className="text-gray-700 max-w-4xl mx-auto">
          From IT strategy consulting and comprehensive technology roadmaps to the end-to-end development of scalable solutions, Intellectsoft delivers a full-cycle software development services that adapt seamlessly to your project requirements and business needs.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10 bg-white rounded-lg mt-2 mb-2 sm:mx-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer ">
            <img src={service.image} alt={service.title} className="w-18 h-20 mb-4 " />
            <h2 className="text-lg font-semibold">{service.title}</h2>
          </div>
        ))}
      </div>

      {/* Software Development Lifecycle Section */}
      <div className="bg-white p-10 md:mx-8 rounded text-center ">
        <h2 className="text-xl font-bold mb-4">CUSTOM SOFTWARE DEVELOPMENT LIFECYCLE</h2>
        <p className="text-gray-600 mb-6">
          We employ best-practice processes and development methodologies to functionally build a
          cutting-edge technology solution in a structured and methodical way.
        </p>
        <img
          src="https://s3-alpha-sig.figma.com/img/3f51/03e0/5aa06a9ee06a91d304fb34de7c45c15b?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MFWg9oKWuAcIaHA-uiDZIOM-St0IWrfVPYAWh-PUCN60OHHizxJN1ilcIAP7iDQoi5wUh5c7YNaMvr4Y~tMiYQ3pOpDhxDurXkQu4rJTwNM0yQ3biU6Rc3PyDYU4setjl147y~E~lTcc4R970pvpsSM0eI4c4ZSRG9eQxna673qwLix3B-KxEQyyPR9x~3ZOa6NbKZ90GwnicEEDCCNY14bz0rE5LgGHGQw-TgDLHklAhtJcDUtrmemwRskhMjZWFSkrpUHhnUz50VgeJTj~JyrEmAVLfDyNXaSS0NXGToLgpawubJjJW7fIVpcjOtsrhKwQdXNqVNhBGGdt2gqhSA__" // Replace with lifecycle image URL
          alt="SDLC Process"
          className="mx-auto"
        />
      </div>
    </div>
  );
}

export default ItServices;