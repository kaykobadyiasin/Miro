import Feature from "../../components/Feature/Feature";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Sections/Sections";
import Trusted from "../../components/Trusted/Trusted";
import WorldBestSection from "../../components/WorldBestSection/WorldBestSection";


const Home = () => {
    return (
        <div>
            <Hero />
            <Trusted />
            <Feature />
            <Section />
            <WorldBestSection/>
            <Footer/>

        </div>
    );
};

export default Home;