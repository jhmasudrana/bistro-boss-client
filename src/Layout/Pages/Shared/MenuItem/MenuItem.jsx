
const MenuItem = ({item}) => {
    const {image, price, name, recipe} = item;
    return (
        <div className="flex "> 
            <img style={{borderRadius: '0 200px 200px 220px'}} className="w-[110px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}---------</h3>
            <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">{price}</p>
        </div>
    );
};

export default MenuItem;