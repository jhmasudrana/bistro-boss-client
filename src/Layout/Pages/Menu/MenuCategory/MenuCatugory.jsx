import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCatugory = ({items, title, image}) => {

    return (
        <div className="pt-8">
             {title && <Cover image={image}
             title={title}
            ></Cover>}
                <div className="grid md:grid-cols-2 my-16 gap-10">
                {
                    items.map(item=> <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
               <Link to={`/order/${title}`}>
               <button className="btn btn-outline border-0  border-b-2">Order Now</button></Link>
                
            </div>
        </div>
    );
};

export default MenuCatugory;