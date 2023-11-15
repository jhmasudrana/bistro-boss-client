import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuimg from '../../../../assets/menu/banner3.jpg'
import dessertImg from '../../../../assets/menu/pizza-bg.jpg'
import pizzaimg from '../../../../assets/menu/dessert-bg.jpeg'
import saladimg from '../../../../assets/menu/salad-bg.jpg'
import soupimg from '../../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../../hooks/useMenu';
import SectionTitle from '../../../../Components/SectiontTtle/SectionTitle';
import MenuCatugory from '../MenuCategory/MenuCatugory';
const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover image={menuimg}
                title="Our menu"
            ></Cover>
            {/* main cover */}
            <SectionTitle
                subHeading="Don't Miss"
                heading="Todays Offer"></SectionTitle>
            {/* offer menu items */}
            <MenuCatugory items={offered}></MenuCatugory>
            {/* dessert menu item */}
            <MenuCatugory items={dessert} title="dessert" image={dessertImg}
            ></MenuCatugory>
            <MenuCatugory items={pizza} title={"pizza"} image={pizzaimg}></MenuCatugory>
            <MenuCatugory items={salad} title={"salad"} image={saladimg}></MenuCatugory>
            <MenuCatugory items={soup} title={"soups"} image={soupimg}></MenuCatugory>

        </div>
    );
};

export default Menu;