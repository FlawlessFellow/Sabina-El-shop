import React, { FC } from 'react';
import Hero from './main/HeroSection/Hero';
import Presentation from './main/PresentationSection/Presentation';
import Layout from './Layout';
import Management from './main/TeamManagementSection/Management';
import GetStarted from './main/GetStartedSection/GetStarted';
import TimeTracking from './main/TimeTrackingSection/TimeTracking';
import DataSecurity from './main/DataSecuritySection/DataSecurity';
// import SlickSlider from '../SlickSlider'
import Header from './Header/Header';
import '../assets/styles/main.css';
import '../assets/styles/hover.css';
import Recommendation from './main/RecommendationSection/Recommendation';
import LinkPanel from './main/LinkPanelSection/LinkPanel';
import Footer from './footer/Footer';

const MainSection: FC = () => {
    return (
        <>
            <Header />
            <Layout>
                <Hero />
                <Presentation />
                <Management />
            </Layout>
            <GetStarted />
            <Layout>
                <TimeTracking />
                <DataSecurity />
            </Layout>
            <Recommendation />
            <LinkPanel />
            <Footer />
        </>
    );
};

export default MainSection;