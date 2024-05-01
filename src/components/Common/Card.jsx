const Value = ({ title, paragraph }) => {
  return (
    <>
      <div className="border-primary bg-primary bg-opacity-5 border-2 group relative overflow-hidden rounded-xl shadow-one duration-300 hover:shadow-xl hover:scale-105 hover:border-3">
        <div className="p-4 sm:p-6 md:px-4 md:py-6 lg:p-6 xl:px-5 xl:py-6 2xl:p-6">
          <h3>
            <div className="mb-4 block text-xl font-bold text-black hover:text-primary sm:text-2xl">
              {title}
            </div>
          </h3>
          <p className=" mb-4 border-b border-body-color border-opacity-30 pb-6 text-lg font-medium text-body-color">
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default Value;
