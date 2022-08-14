import React from 'react';
import Footer from '../../Components/Footer';
import GetStartedWithOwlys from '../../Components/GetStartedWithOwlys';
import Header from '../../Components/Header';
import HomeSearch from '../../Components/HomeSearch';
import JoinMillionsOfHappyStudents from '../../Components/JoinMillionsOfHappyStudents';
import Navbar from '../../Components/Navbar';
import OurFocus from '../../Components/OurFocus';
import OwlyHelp from '../../Components/OwlyHelp';
import PartnerSchools from '../../Components/PartnerSchools';
import PopularCourses from '../../Components/PopularCourses';
import StudyAnywhere from '../../Components/StudyAnywhere';

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <OwlyHelp />
            <HomeSearch />
            <OurFocus />
            <StudyAnywhere />
            <PopularCourses />
            <JoinMillionsOfHappyStudents />
            <PartnerSchools />
            <GetStartedWithOwlys />
            <Footer />
        </>
    );
};

export default Home;