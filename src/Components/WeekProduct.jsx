import CupSetThree from "../Images/Product/CupsetThree.png"
import CupSetTwo from "../Images/Product/CupSetTwo.png"
import CupSet from "../Images/Product/CupSet.png"
const WeekProduct = () => {
    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="row">
                    <div className="LatestProduct">
                        <div className="text-center">
                            <h4 className="FontArt text-center SectionTitle">Product of the Week</h4>
                        </div>

                        <div className="grid md:grid-cols-[3fr_2fr] gap-[15px] items-stretch my-10">

                            {/* Left Side Image */}
                            <div className="MainImage h-full">
                                <img
                                    src={CupSet}
                                    alt="CupSet"
                                    loading="lazy"
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>

                            {/* Right Side Product Info */}
                            <div className="ProductContainer h-full flex">
                                <div className="ProductCard flex flex-col justify-between w-full h-full p-4  rounded-xl shadow-md">
                                    <div>
                                        <div className="ProductImageCard">
                                            <img
                                                src={CupSetTwo}
                                                alt="CupSetTwo"
                                                className="w-full h-[500px] object-cover rounded-lg"
                                            />
                                        </div>

                                        <div className="ProductInformation my-4">
                                            <h4 className="ProductTitle text-lg font-semibold">
                                                coffee crochet cups
                                            </h4>
                                            <p className="IteamCollection text-gray-500">
                                                Collection - Home Decor
                                            </p>
                                            <p className="ItemPrice font-bold">
                                                Price - 999 ₹
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default WeekProduct;