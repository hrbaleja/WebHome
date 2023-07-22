import React, { useState, useEffect } from 'react';
import './CircleNavigation.css';
import { FaClock, FaComments, FaUser, FaTags, FaUpload, FaBriefcase } from 'react-icons/fa';

const CircleNavigation = () => {
  const [activeDot, setActiveDot] = useState(1);

  useEffect(() => {
    const radius = 200;
    const container = document.querySelector('.dotCircle');
    const fields = document.querySelectorAll('.itemDot');
    const width = container.clientWidth;
    const height = container.clientHeight;
    const step = (2 * Math.PI) / fields.length;

    fields.forEach((field, index) => {
      const angle = step * index;
      const x = Math.round(width / 2 + radius * Math.cos(angle) - field.clientWidth / 2);
      const y = Math.round(height / 2 + radius * Math.sin(angle) - field.clientHeight / 2);

      field.style.left = `${x}px`;
      field.style.top = `${y}px`;
    });
  }, []);

  const dotClickHandler = (dataTab) => {
    setActiveDot(dataTab);
    const itemDots = document.querySelectorAll('.itemDot');
    const cirItems = document.querySelectorAll('.CirItem');
    const i = dataTab;

    document.querySelector('.dotCircle').style.transform = `rotate(${360 - (i - 1) * 36}deg)`;
    document.querySelector('.dotCircle').classList.add('activeRotate'); // Add the activeRotate class

    itemDots.forEach((itemDot) => {
      const tab = parseInt(itemDot.dataset.tab, 10);
      if (tab === i) {
        itemDot.classList.add('active');
      } else {
        itemDot.classList.remove('active');
      }
    });

    cirItems.forEach((cirItem) => {
      const cirItemIndex = parseInt(cirItem.dataset.cirItemIndex, 10);
      if (cirItemIndex === i) {
        cirItem.classList.add('active');
      } else {
        cirItem.classList.remove('active');
      }
    });

    // Remove the activeRotate class after the transition ends
    setTimeout(() => {
      document.querySelector('.dotCircle').classList.remove('activeRotate');
    }, 2000); // The same duration as the rotation transition in CSS
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prevActiveDot) => (prevActiveDot % 6) + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="iq-features">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-12"></div>
          <div className="col-lg-6 col-md-12">
            <div className="holderCircle">
              <div className="round"></div>
              <div className="dotCircle" style={{ transform: `rotate(${360 - (activeDot - 1) * 36}deg)` }}>
                <InteractiveDot icon={<FaClock />} dataTab={1} activeDot={activeDot} onClick={dotClickHandler} />
                <InteractiveDot icon={<FaComments />} dataTab={2} activeDot={activeDot} onClick={dotClickHandler} />
                <InteractiveDot icon={<FaUser />} dataTab={3} activeDot={activeDot} onClick={dotClickHandler} />
                <InteractiveDot icon={<FaTags />} dataTab={4} activeDot={activeDot} onClick={dotClickHandler} />
                <InteractiveDot icon={<FaUpload />} dataTab={5} activeDot={activeDot} onClick={dotClickHandler} />
                <InteractiveDot icon={<FaBriefcase />} dataTab={6} activeDot={activeDot} onClick={dotClickHandler} />
              </div>
              <div className="contentCircle">
                <ContentItem title="Automate" description="tfhdfghfghfghfgjtyjtyhfg ftgfthtyjyutg rthtryjdrhrt tyjdrytyjuty tjtyjtyjtdy" icon={<FaClock />} index={1} active={activeDot === 1} />
                <ContentItem title="Chat" description="tfhdfghfghfghfgjtyjtyhfg ftgfthtyjyutg rthtryjdrhrt tyjdrytyjuty tjtyjtyjtdy" icon={<FaComments />} index={2} active={activeDot === 2} />
                <ContentItem title="Responses" description="tfhdfghfghfghfgjtyjtyhfg ftgfthtyjyutg rthtryjdrhrt tyjdrytyjuty tjtyjtyjtdy" icon={<FaUser />} index={3} active={activeDot === 3} />
                <ContentItem title="Tags" description="tfhdfghfghfghfgjtyjtyhfg ftgfthtyjyutg rthtryjdrhrt tyjdrytyjuty tjtyjtyjtdy" icon={<FaTags />} index={4} active={activeDot === 4} />
                <ContentItem title="Sharing" description="tfhdfghfghfghfgjtyjtyhfg ftgfthtyjyutg rthtryjdrhrt tyjdrytyjuty tjtyjtyjtdy" icon={<FaUpload />} index={5} active={activeDot === 5} />
                <ContentItem title="Support" description="tfhdfghfghfghfgjtyjtyhfg ftgfthtyjyutg rthtryjdrhrt tyjdrytyjuty tjtyjtyjtdy" icon={<FaBriefcase />} index={6} active={activeDot === 6} />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12"></div>
        </div>
      </div>
    </section>
  );
};

const InteractiveDot = ({ icon, dataTab, activeDot, onClick }) => {
  return (
    <span
      className={`itemDot ${activeDot === dataTab ? 'active' : ''}`}
      data-tab={dataTab}
      onClick={() => onClick(dataTab)}
    >
      {icon}
      <span className="forActive"></span>
    </span>
  );
};

const ContentItem = ({ title, description, icon, index, active }) => {
  return (
    <div className={`CirItem title-box ${active ? 'active' : ''}`} data-cir-item-index={index} >
      <h2 className="title">
        <span>{title}</span>
      </h2>
    </div>
  );
};

export default CircleNavigation;
