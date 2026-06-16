import { useState } from "react"
import { AiOutlineShopping, AiOutlineEye } from "react-icons/ai"
import { Link } from "react-router-dom"
const ProductCard = ({
    item,
    handleImageClick,
    handleQuickView
}) => {

    // ✅ LOCAL STATE for active image
    const [activeIndex, setActiveIndex] = useState(0)

    const onImageClick = (productId, index) => {
        setActiveIndex(index)
        handleImageClick(productId, index) // optional parent sync
    }
    const handleWhatsAppOrder = (product) => {
        const phoneNumber = "917999589547"; // without +, without dash

        const message = `
Hello 👋
I want to order this product:

🛍️ Product: ${product.name}
📂 Category: ${product.category}
💰 Price: ₹${product.price}

Please confirm availability.
`;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    };
    return (
        <div className="ProductItem">
            <div className="ProductImage">
                <div className="ActiveImage relative">
                     <Link to={`/product/${item.slug}`}>
                    <img
                        src={item.images?.[activeIndex] || item.images?.[0]}
                        alt={item.name}
                        loading="lazy"
                    />
                    </Link>

                    <div className="absolute top-2 right-2">
                        <button
                            onClick={() => handleQuickView(item)}
                            className="ViewBtn"
                        >
                            <AiOutlineEye size={22} />
                        </button>
                    </div>
                </div>
                <div className="ImagesGrid">
                    <ul className="flex gap-2">
                        {item.images?.map((img, i) => (
                            <li key={i}>
                               
                                    <img
                                        src={img}
                                        onClick={() => onImageClick(item.id, i)}
                                        className="w-14 h-14 object-cover cursor-pointer"
                                        alt={`${item.name}-${i}`}
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
                    <button className="ShopBtn" id={item.id} onClick={() => handleQuickView(item, activeIndex)}>
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