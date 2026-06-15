import { useState } from "react"
import products from "../data/Product.js";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
const BestSeller = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [activeImageIndex, setActiveImageIndex] = useState({})
    const getActiveIndex = (id) => activeImageIndex[id] || 0
    const handleImageClick = (productId, index) => {
        setActiveImageIndex(prev => ({
            ...prev,
            [productId]: index
        }))
    }
    const handleQuickView = (product) => {
        setSelectedProduct(product)
        setIsModalOpen(true)
    }
    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="row">
                    <div className="text-center">
                    <h4 className="FontArt text-center SectionTitle">Best Seller</h4>

                    </div>
                    <div className="ProductCard my-15">
                        <div className="ProductWrapper hidden md:grid grid-cols-4 gap-[15px]">
                            {products.slice(0, 4).map((item, index) => (
                                <div key={item.id} className="ProductItem">
                                    <div className="ProductImage">
                                        <div className="ActiveImage relative">
                                            <img src={item.images[getActiveIndex(item.id)]} alt={item.name} loading="lazy" />
                                            <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:scale-110 transition">
                                                <button onClick={() => handleQuickView(item)} className="ViewBtn">
                                                    <AiOutlineEye size={22} />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="ImagesGrid">
                                            <ul className="flex gap-2 flex-wrap">
                                                {item.images.map((img, i) => (
                                                    <li key={i}>
                                                        <img
                                                            src={img}
                                                            alt=""
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
                                        <p className="IteamCollection text-gray-500">Collection - {item.category}</p>
                                        <p className="ItemPrice">Price - {item.price} &#8377;</p>
                                        <div className="ShopingBag">
                                            <button className="ShopBtn" id={item.id}><span className="BtnTxt">Shop Now</span>
                                                <span className="BtnIcon"><AiOutlineShopping size={25} />
                                                </span></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="md:hidden">
                            <Swiper
                                spaceBetween={15}
                                slidesPerView={1.2}
                            >
                                {products.slice(0, 4).map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="ProductItem">
                                            {/* SAME CARD CODE */}
                                            <div className="ProductImage">
                                                <div className="ActiveImage relative">
                                                    <img src={item.images[getActiveIndex(item.id)]} alt={item.name} />
                                                </div>
                                            </div>
                                            <div className="ProductInformation my-4 relative">
                                                <h4 className="ProductTitle">{item.name}</h4>
                                                <p className="IteamCollection text-gray-500">Collection - {item.category}</p>
                                                <p className="ItemPrice">Price - {item.price} &#8377;</p>
                                                <div className="ShopingBag">
                                                    <button className="ShopBtn" id={item.id}><span className="BtnTxt">Shop Now</span>
                                                        <span className="BtnIcon"><AiOutlineShopping size={25} />
                                                        </span></button>
                                                </div>
                                            </div>


                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">

                    <div className="bg-white p-5 rounded-lg w-[30%] relative">

                        {/* Close Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-2 right-2 text-xl closePopup"
                        >
                            ✖
                        </button>

                        {/* Product Image */}
                        <img
                            src={selectedProduct.images[getActiveIndex(selectedProduct.id)]}
                            alt={selectedProduct.name}
                            className="w-full  object-cover rounded"
                        />

                        {/* Info */}
                        <h3 className="mt-3 text-lg font-semibold">{selectedProduct.name}</h3>
                        <p className="text-gray-500">{selectedProduct.category}</p>
                        <p className="font-bold">₹ {selectedProduct.price}</p>

                    </div>
                </div>
            )}
        </>
    )
}
export default BestSeller;