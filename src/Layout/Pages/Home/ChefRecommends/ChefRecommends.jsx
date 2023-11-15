import salad from '../../../../assets/home/slide1.jpg'

const ChefRecommends = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-7 gap-10'>
            {/* cart 1 */}

            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={salad} alt="Shoes" className="rounded-xl h-56 w-full " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-xl font-bold">Caeser Salad</h2>
                    <p className='font-bold'>Caeser Salad
                        Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
                        add to cart</p>
                    <div className="card-actions">
                        <button className="btn btn-outline btn-warning">ADD TO CART</button>
                    </div>
                </div>
            </div>
            {/* cart 2 */}
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={salad} alt="Shoes" className="rounded-xl h-56 w-full " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-xl font-bold">Caeser Salad</h2>
                    <p className='font-bold'>Caeser Salad
                        Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
                        add to cart</p>
                    <div className="card-actions">
                        <button className="btn btn-neutral">ADD TO CART</button>

                    </div>
                </div>
            </div>
            {/* cart 3 */}
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={salad} alt="Shoes" className="rounded-xl h-56 w-full " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-xl font-bold">Caeser Salad</h2>
                    <p className='font-bold'>Caeser Salad
                        Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
                        add to cart</p>
                    <div className="card-actions">
                        <button className="btn btn-outline btn-warning">ADD TO CART</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChefRecommends;