const SectionTitle = ({
  title,
  paragraph,
  width = "650px",
  center,
  mb = "40px",
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="font-serif mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p className="text-lg !leading-relaxed text-justify">{paragraph}</p>
      </div>
    </>
  );
};

export default SectionTitle;
