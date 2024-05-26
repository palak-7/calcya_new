import SectionTitle from "../Common/SectionTitle";
import CalenderThree from "../Calender/CalenderThree";

const Video = () => {
  return (
    <section className="relative lg:-mt-[5px] mt-9 z-10">
      <div className="lg:transform lg:scale-75 lg:origin-top-left lg:w-[133.33%]">
        <SectionTitle
          title="Calcya Compliance Calender"
          paragraph=""
          center
          mb="0px"
        />
      </div>
      <div className="mr-4 p-3 flex justify-center">
        <CalenderThree />
      </div>
    </section>
  );
};

export default Video;
