import React from 'react';
import Header from '../components/Header.jsx';
import AnimateAnything from '../components/AnimateAnything.jsx';
import WhyGSAP from '../components/WhyGSAP.jsx';
import HorizontalScrollComponent from '../components/HorizontalScrollComponent.jsx';
import GSAPToolsWrap from '../components/GSAPToolsWrap.jsx';
import BrandsUsingGSAPWrap from '../components/BrandsUsingGSAPWrap.jsx';
import Footer from '../components/Footer.jsx';
import ShowcaseMenu from '../components/ShowcaseMenu.jsx';
import SiteOftheDay from '../components/SiteOftheDay.jsx';

const Home = () => {
  return (
    <>
      <div className='overflow-hidden'>
        <Header />
        <AnimateAnything />
        <SiteOftheDay />
        <WhyGSAP />
        <HorizontalScrollComponent/>
        <GSAPToolsWrap />
        <BrandsUsingGSAPWrap />
        <ShowcaseMenu />
      </div>
      <Footer />
    </>
  )
}

export default Home;