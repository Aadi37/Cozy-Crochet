import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import Banner from "../Components/Banner";
import Service from "../Components/Service";
import BestSeller from "../Components/BestSeller";
import bgImg from "../Images/bg.png";
import WeekProduct from "../Components/WeekProduct";
import ShopByCollection from "../Components/ShopByCollection";
import BannerImg from "../Images/banner.png";
import Testimonial from "../Components/Testimonial";
import testiBg from "../Images/testiBg.png";

const AnimatedSection = ({ children, style, className, id }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.section
            id={id}
            ref={ref}
            className={className}
            style={style}
            initial={{ opacity: 0, y: 80 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            {children}
        </motion.section>
    );
};

const Home = () => {
    return (
        <div id="HomePage">

            <AnimatedSection
                id="Banner"
                style={{
                    backgroundImage: `url(${BannerImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    padding: "120px 0px",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Banner />
            </AnimatedSection>

            <AnimatedSection id="WeekProduct" className="SectionPadding">
                <WeekProduct />
            </AnimatedSection>

            <AnimatedSection
                id="BestSeller"
                className="SectionPadding"
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <BestSeller />
            </AnimatedSection>

            <AnimatedSection id="ShopByCollection" className="SectionPadding">
                <ShopByCollection />
            </AnimatedSection>

            <AnimatedSection
                id="Testimonials"
                className="SectionPadding"
                style={{
                    backgroundImage: `url(${testiBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    height: "70vh",
                    alignItems: "center",
                }}
            >
                <Testimonial />
            </AnimatedSection>

        </div>
    );
};

export default Home;