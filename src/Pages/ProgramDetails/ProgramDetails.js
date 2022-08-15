import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import programsData from '../../Data/programs.json';
import ProgramDetailsHeader from '../../Components/ProgramDetailsHeader';
import ProgramDetailsProgramFacts from '../../Components/ProgramDetailsProgramFacts';
import Footer from '../../Components/Footer';
import ProgramDetailsProgramOverview from '../../Components/ProgramDetailsProgramOverview';
import ProgramDetailsAdmissionRequirements from '../../Components/ProgramDetailsAdmissionRequirements';
import ProgramDetailsFeesFunding from '../../Components/ProgramDetailsFeesFunding';


const ProgramDetails = () => {

    const { id } = useParams();
    const program = programsData.find(item => item.id === id);

    return (
        <section>
            <Navbar />
            <ProgramDetailsHeader program={program} />
            <ProgramDetailsProgramFacts program={program} />
            <ProgramDetailsProgramOverview program={program} />
            <ProgramDetailsAdmissionRequirements program={program} />
            <ProgramDetailsFeesFunding program={program} />
            <Footer />
        </section>
    );
};

export default ProgramDetails;