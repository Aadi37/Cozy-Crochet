import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
const ProductCard = ({ item, getActiveIndex, handleImageClick, handleQuickView }) => {
    return (
        <div className="ProductItem">
            <div className="ProductImage">
                <div className="ActiveImage relative">
                    <img 
                        src={item.images[getActiveIndex(item.id)]} 
                        alt={item.name} 
                        loading="lazy" 
                    />

                    <div className="absolute top-2 right-2">
                        <button onClick={() => handleQuickView(item)} className="ViewBtn">
                            <AiOutlineEye size={22} />
                        </button>
                    </div>
                </div>

                <div className="ImagesGrid">
                    <ul className="flex gap-2">
                        {item.images.map((img, i) => (
                            <li key={i}>
                                <img
                                    src={img}
                                    onClick={() => handleImageClick(item.id, i)}
                                    className="w-14 h-14 object-cover cursor-pointer"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="ProductInformation my-4 relative">
                <h4 className="ProductTitle">{item.name}</h4>
                <p className="IteamCollection text-gray-500">
                    Collection - {item.category}
                </p>
                <p className="ItemPrice">
                    Price - {item.price} ₹
                </p>

                <div className="ShopingBag">
                    <button className="ShopBtn">
                        <span className="BtnTxt">Shop Now</span>
                        <span className="BtnIcon">
                            <AiOutlineShopping size={25} />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard