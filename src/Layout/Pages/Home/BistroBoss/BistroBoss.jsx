import Bistr from '../../../../assets/home/chef-service.jpg';

const BistroBoss = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${Bistr})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content py-20 px-36 rounded-lg text-center bg-white text-black">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-4xl font-bold">BISTRO BOSS</h1>
                    <p className="mb-5">Bistro Boss
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>

                </div>
            </div>
        </div>
    );
};

export default BistroBoss;