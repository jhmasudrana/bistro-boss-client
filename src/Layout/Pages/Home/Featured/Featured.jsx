import SectionTitle from "../../../../Components/SectiontTtle/SectionTitle";
import featured from '../../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="fectured-item bg-fixed text-shadow text-white py-8 my-20">
            <SectionTitle subHeading="check it out" heading="FEATURED ITEM"></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 gap-10">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div>
                    <p>Aug 20, 2029</p>
                    <p> WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                        Read More</p>
                    <button className="btn btn-outline border-0  border-b-2">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;