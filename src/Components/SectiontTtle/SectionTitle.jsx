

export const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-3/12 mx-auto text-center my-8 ">
            <p className=" text-yellow-600 mb-2"> ---{subHeading}--- </p>
            <p className="text-3xl  border-y-4 uppercase  py-4">{heading}</p>
        </div>
    );
};

export default SectionTitle;