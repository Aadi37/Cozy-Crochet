import { useState } from "react"
import products from "../data/Product.js"
import { AiOutlineEye } from "react-icons/ai";

const ShopByCollection = () => {

    // ✅ Category Tabs
    const collection = ["All", ...new Set(products.map(item => item.category))]
    const [activeTab, setActiveTab] = useState("All")

    // ✅ Image state per product
    const [activeImageIndex, setActiveImageIndex] = useState({})

    // ✅ Modal state
    const [modalProduct, setModalProduct] = useState(null)

    // ✅ Filter logic
    const filteredProducts =
        activeTab === "All"
            ? products
            : products.filter(item => item.category === activeTab)

    return (
        <>
            <div className="ShopByCollection py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    {/* 🔥 TITLE */}
                    <div className="text-center">
<div className="text-center">
                        <h4 className="FontArt text-center SectionTitle">Shop By Collection</h4>
                        </div>
                    </div>

                    {/* 🔥 CATEGORY BUTTONS */}
                    <div className="flex gap-15 justify-center flex-wrap my-10">
                        {collection.map((cat, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(cat)}
                                className={`px-4 py-2 border rounded BtnDefault ${
                                    activeTab === cat
                                        ? "bg-orange-500 text-white"
                                        : "bg-white"
                                }`}
                            >
                               <span
                               >{cat}</span> 
                            </button>
                        ))}
                    </div>

                    {/* 🔥 PRODUCT GRID */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((prod) => {

                            const currentIndex = activeImageIndex[prod.id] || 0

                            return (
                                <div key={prod.id} className="ProductItem">

                                    {/* 🔥 IMAGE SECTION */}
                                    <div className="relative">

                                        <img
                                            src={prod.images[currentIndex]}
                                            alt={prod.name}
                                            className="w-full h-[300px] object-cover rounded transition duration-300"
                                        />

                                        {/* 👁️ VIEW BUTTON */}
                                        <button
                                            onClick={() => setModalProduct(prod)}
                                            className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:scale-110 transition"
                                        >
                                              <AiOutlineEye size={22} />
                                        </button>
                                    </div>

                                    {/* 🔥 THUMBNAILS */}
                                    
                                    <div className="flex gap-2 mt-2 ImagesGrid flex-wrap">
                                        {prod.images.map((img, i) => (
                                            <img
                                                key={i}
                                                src={img}
                                                alt=""
                                                onClick={() =>
                                                    setActiveImageIndex(prev => ({
                                                        ...prev,
                                                        [prod.id]: i
                                                    }))
                                                }
                                                className={`w-12 h-12 object-cover rounded cursor-pointer border ${
                                                    currentIndex === i
                                                        ? "border-orange-500"
                                                        : ""
                                                }`}
                                            />
                                        ))}
                                    </div>

                                    {/* 🔥 INFO */}
                                    <div className="my-4">
                                        <h4 className="ProductTitle">{prod.name}</h4>
                                        <p className="IteamCollection text-gray-500">{prod.category}</p>
                                        <p className="ItemPrice mt-1">₹{prod.price}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* 🔥 MODAL */}
            {modalProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">

                    <div className="bg-white p-5 rounded-lg w-[90%] md:w-[400px] relative">

                        {/* ❌ CLOSE BUTTON */}
                        <button
                            onClick={() => setModalProduct(null)}
                            className="absolute top-2 right-2 text-xl"
                        >
                            ✖
                        </button>

                        {/* IMAGE */}
                        <img
                            src={modalProduct.images[0]}
                            alt={modalProduct.name}
                            className="w-full h-[250px] object-cover rounded"
                        />

                        {/* INFO */}
                        <h3 className="mt-3 font-bold text-lg">
                            {modalProduct.name}
                        </h3>
                        <p className="text-gray-500">{modalProduct.category}</p>
                        <p className="mt-2 font-bold">₹{modalProduct.price}</p>

                        {/* 🔥 OPTIONAL CTA */}
                        <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded">
                            Order on WhatsApp
                        </button>

                    </div>
                </div>
            )}
        </>
    )
}

export default ShopByCollection