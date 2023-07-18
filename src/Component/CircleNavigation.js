import React, { useState, useEffect } from 'react';
import { Paper, Typography } from '@mui/material';
import './CircleNavigation.css'; // Import the custom CSS file

const ITServiceItems = [
  {
    title: 'Web Development',
    description: 'Creating responsive and dynamic websites for your business needs.',
    icon: 'fa fa-globe',
  },
  {
    title: 'Mobile App Development',
    description: 'Developing custom mobile applications for Android and iOS platforms.',
    icon: 'fa fa-mobile',
  },
  {
    title: 'Cloud Computing',
    description: 'Providing scalable and secure cloud solutions to host your applications.',
    icon: 'fa fa-cloud',
  },
  {
    title: 'Cybersecurity',
    description: 'Protecting your digital assets from cyber threats and attacks.',
    icon: 'fa fa-shield',
  },
  {
    title: 'Data Analytics',
    description: 'Analyzing data to gain valuable insights for better decision-making.',
    icon: 'fa fa-chart-line',
  },
  {
    title: 'IT Consulting',
    description: 'Offering expert advice and guidance to optimize your IT infrastructure.',
    icon: 'fa fa-lightbulb',
  },
  {
    title: 'Network Solutions',
    description: 'Designing and managing efficient and secure network systems.',
    icon: 'fa fa-network-wired',
  },
  {
    title: 'E-commerce Solutions',
    description: 'Creating online stores and payment gateways for your business.',
    icon: 'fa fa-shopping-cart',
  },
];

const CircleNavigation = () => {
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab % ITServiceItems.length) + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="iq-features">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-12"></div>
          <div className="col-lg-6 col-md-12">
            <div className="holderCircle">
              <div className="round"></div>
              <div className="dotCircle">
                {ITServiceItems.map((item, index) => (
                  <span
                    key={index + 1}
                    className={`itemDot ${activeTab === index + 1 ? 'active' : ''}`}
                    data-tab={index + 1}
                    onClick={() => handleTabClick(index + 1)}
                  >
                    <i className={item.icon}></i>
                    <span className="forActive"></span>
                  </span>
                ))}
              </div>
              <div className="contentCircle">
                {ITServiceItems.map((item, index) => (
                  <div
                    key={index + 1}
                    className={`CirItem title-box ${activeTab === index + 1 ? 'active' : ''}`}
                  >
                    <Typography variant="h2" className="title">
                      {item.title}
                    </Typography>
                    <Typography variant="body1" margin="0">
                      {item.description}
                    </Typography>
                    <i className={item.icon}></i>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12"></div>
        </div>
      </div>
    </section>
  );
};

export default CircleNavigation;
