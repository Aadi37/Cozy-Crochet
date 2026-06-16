import { useState } from "react"
import { useParams } from "react-router-dom"
import products from "../data/Product.js"
import ProductCard from "../Components/ProductCard"

const Collection = () => {
    const { category } = useParams()

    const [activeImage, setActiveImage] = useState({})
    const [quickViewItem, setQuickViewItem] = useState(null)
    const [quickViewIndex, setQuickViewIndex] = useState(0)

    // IMAGE CHANGE HANDLER
    const handleImageClick = (productId, index) => {
        setActiveImage((prev) => ({
            ...prev,
            [productId]: index,
        }))
    }

    const getActiveIndex = (id) => {
        return activeImage[id] || 0
    }

    // QUICK VIEW OPEN
    const handleQuickView = (item, index) => {
        setQuickViewItem(item)
        setQuickViewIndex(index)
    }

    // CLOSE MODAL
    const closeModal = () => {
        setQuickViewItem(null)
        setQuickViewIndex(0)
    }

    // FILTER LOGIC
    const filteredProducts =
        category === "all"
            ? products
            : products.filter(
                (p) =>
                    p.category
                        .toLowerCase()
                        .replace(" ", "-") === category
            )

    return (
        <div className="CollectionPage">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="row">

                    <h1 className="text-2xl font-bold mb-5 capitalize my-5">
                        {category?.replace("-", " ")}
                    </h1>

                    {/* PRODUCT GRID */}
                    <div className="ProductGrid grid md:grid-cols-2 md:grid-cols-4 gap-5">

                        {filteredProducts.map((item) => (
                            <ProductCard
                                key={item.id}
                                item={item}
                                getActiveIndex={getActiveIndex}
                                handleImageClick={handleImageClick}
                                handleQuickView={handleQuickView}
                            />
                        ))}

                    </div>

                    {/* QUICK VIEW MODAL */}
                    {quickViewItem && (
                        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">

                            <div className="bg-white p-4 rounded w-[90%] md:w-[500px] relative">

                                <button
                                    onClick={closeModal}
                                    className="absolute top-2 right-3 text-xl closeBtn"
                                >
                                    ✕
                                </button>

                                <img
                                    src={
                                        quickViewItem.images?.[quickViewIndex] ||
                                        quickViewItem.images?.[0]
                                    }
                                    alt={quickViewItem.name}
                                    className="w-full h-[300px] object-cover rounded"
                                />

                                <div className="flex gap-2 mt-3 ImagesGrid">
                                    {quickViewItem.images.map((img, i) => (
                                        <img
                                            key={i}
                                            src={img}
                                            onClick={() => setQuickViewIndex(i)}
                                            className={`w-14 h-14 object-cover cursor-pointer ${
                                                quickViewIndex === i ? "border-black" : ""
                                            }`}
                                            alt=""
                                        />
                                    ))}
                                </div>

                                <h2 className="mt-3 font-bold text-lg">
                                    {quickViewItem.name}
                                </h2>

                                <p className="text-gray-600">
                                    {quickViewItem.category}
                                </p>

                                <p className="font-semibold mt-2">
                                    ₹ {quickViewItem.price}
                                </p>

                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Collection