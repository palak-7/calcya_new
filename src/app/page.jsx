import AboutSectionOne from "../components/About/AboutSectionOne";
import ScrollUp from "../components/Common/ScrollUp";
import Contact from "../components/Contact/Contact";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import Video from "../components/Video/Video";
export const metadata = {
  title: "Calcya",
  description: "",
  // other metadata
};

export default function page() {
  const id = process.env.ADMIN_EMAIL;
  return (
    <div className=" transform">
      <ScrollUp />
      <Hero />
      <div className="lg:flex lg:justify-around -mt-[80px] bg-white">
        <Features />
        <Video id={id} />
      </div>

      <AboutSectionOne />
      <Contact />
    </div>
  );
}
