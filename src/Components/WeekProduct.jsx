import { useState } from "react"
import Product from "../data/Product"
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom"
const WeekProduct = () => {
    const [imageIndex, setImageIndex] = useState(0)
    const getActiveIndex = (id) => imageIndex[id] || 0

    const handleImageClick = (id, index) => {
        setImageIndex(prev => ({
            ...prev,
            [id]: index
        }))
    }
    const TagProduct = Product.filter(pro => pro.tags?.includes('WeekProduct'))
    console.log(TagProduct)
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
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="row">
                    <div className="LatestProduct">
                        <div className="text-center">
                            <h4 className="FontArt text-center SectionTitle">Product of the Week</h4>
                        </div>

                        <div className="grid md:grid-cols-[3fr_2fr] gap-[15px]  my-10">

                            {/* Left Side Image */}
                            <div className="MainImage  ProductItem">
                                {TagProduct.map(item => (
                                    <div key={item.id} className="aspect-[4/5] ">
                                        <img src={item.images[0]} className="rounded-[5px] w-full  object-cover" alt={item.name} />
                                    </div>
                                ))}
                            </div>

                            {/* Right Side Product Info */}
                            <div className="ProductContainer ProductItem h-full  flex flex-col">
                                {TagProduct.map(prod => (
                                    <div key={prod.id}>
                                        <div className="FeaturedImg">
                                            <Link to={`/product/${prod.slug}`}>
                                                <img src={prod.images[getActiveIndex(prod.id)]} className="rounded-[5px]" loading="lazy" alt={prod.name} />

                                            </Link>
                                        </div>
                                        <div className="ImageGrids my-2">
                                            <ul className="flex gap-5">
                                                {prod.images.map((img, index) => (
                                                    <li key={index} className="ImagesGrid" onClick={() => handleImageClick(prod.id, index)}>
                                                        <img src={img} className="w-14 h-14 object-cover cursor-pointer" />
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="ProductInformation my-4 relative">
                                            <h4 className="ProductTitle">{prod.name}</h4>
                                            <p className="IteamCollection text-gray-500">Collection - {prod.category}</p>
                                            <p className="ItemPrice">Price - {prod.price} &#8377;</p>
                                            <div className="ShopingBag">
                                                <button className="ShopBtn" id={prod.id} onClick={() => handleWhatsAppOrder(prod)}><span className="BtnTxt">Shop Now</span>
                                                    <span className="BtnIcon"><AiOutlineShopping size={25} />
                                                    </span></button>
                                            </div>
                                        </div>
                                        <div>

                                        </div>

                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default WeekProduct;