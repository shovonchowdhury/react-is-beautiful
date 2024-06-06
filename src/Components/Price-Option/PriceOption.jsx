import Feature from "../Feature/Feature";


const PriceOption = ({option}) => {

    const {name,price,features}=option;
    return (
        <div className="bg-sky-500 p-10 rounded-lg flex flex-col">
            <h1 className="text-center">
                <span className="text-6xl font-bold text-white">${price}</span>
                <span className="text-3xl">/month</span>
            </h1>

            <h1 className="text-3xl mt-6 mb-9 text-center">{name}</h1>
            
                <div className="flex-grow">
                    {
                        features.map(feature => <Feature feature={feature}></Feature>)
                    }
                </div>

                <button className="bg-green-600 w-full rounded-md text-white mt-6 py-4 text-xl font-bold">Buy Now</button>
            
        </div>
    );
};

export default PriceOption;