import AboutSection from "../components/AboutSection";
import CallToActionSection from "../components/CallToActionSection";
import LeadershipSection from "../components/LeaderShipSection";
import PageTitle from "../components/PageTitle";
import pageInfo from "../components/utils/pageInfo";
import ValuesSection from "../components/ValuesSection";
import WhyUs from "../components/WhyUs";

export default function AboutUs() {
  const aboutinfo = pageInfo.aboutUs;
  return (
    <>
      <PageTitle
        title={aboutinfo.title}
        breadcrumbs={aboutinfo.breadcrumbs}
        backgroundImage={aboutinfo.bgImage}
      />
      <AboutSection />
      <ValuesSection />
      <LeadershipSection />
      <WhyUs />
      <CallToActionSection />
    </>
  );
}
