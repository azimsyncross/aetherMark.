import AboutAkMarketing from "../components/AboutAkMarketing";
import CallToActionSection from "../components/CallToActionSection";
import LeadershipSection from "../components/LeaderShipSection";
import OurJourney from "../components/OurJourney";
import PageTitle from "../components/PageTitle";
import pageInfo from "../components/utils/pageInfo";
import ValuesSection from "../components/ValuesSection";
import WhyChooseAetherMark from "../components/WhyChooseAkMarketing";
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
      {/* <AboutSection /> */}
      <AboutAkMarketing />
      <WhyChooseAetherMark />
      <OurJourney />
      <ValuesSection />
      <LeadershipSection />
      <WhyUs />
      <CallToActionSection />
    </>
  );
}
