import { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/SectiontTtle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../../hooks/useMenu";


const PopularMenu = () => {
   const [menu] = useMenu();
   const popular = menu.filter(item =>  item.category === 'popular')  
    return (
        <section className="mb-12">
            <SectionTitle
            heading="From Our Menu"
            subHeading="Popular Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item=> <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
                
            </div>
            <button className="btn btn-outline border-0  text-center border-b-2">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;