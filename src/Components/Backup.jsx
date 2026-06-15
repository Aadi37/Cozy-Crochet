import { useState } from "react"
import products from "../data/Product.js"

const ShopByCollection = () => {
    const categories = ["All", ...new Set(products.map(item => item.category))]
    const [activeTab, setActiveTab] = useState("All")
    const filteredProducts =
        activeTab === "All"
            ? products
            : products.filter(item => item.category === activeTab)

    return (
        <>
            <div className="ShopByCollection">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="row">
                        <h4 class="FontArt text-center SectionTitle">Shop By Collection</h4>
                        {/* 🔥 Tabs */}
                        <div className="flex gap-15 justify-center mb-8 flex-wrap my-10">
                            {categories.map((cat, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(cat)}
                                    className={`px-5 py-2  border transition BtnDefault
              ${activeTab === cat
                                            ? "bg-orange-500 text-white border-0"
                                            : "bg-white text-black hover:bg-orange-100"}
            `}
                                >
                                  <span>{cat}</span>  
                                </button>
                                
                            ))}
                        </div>

                        {/* 🔥 Products Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                            {filteredProducts.map((item) => (
                                <div key={item.id} className="ProductItem transition">

                                    {/* ✅ First image */}
                                    <img
                                        src={item.images[0]}
                                        alt={item.name}
                                        className="w-full h-[350px] object-cover rounded"
                                    />
                                    <div className="my-4">
                                    {/* Info */}
                                    <h4 className="ProductTitle">{item.name}</h4>
                                    <p className="ItemPrice">Price - ₹{item.price}</p>
                                    </div>
                                    

                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopByCollection;