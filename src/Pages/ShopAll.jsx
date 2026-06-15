import Product from "../data/Product"
import {useState} from "react"
import ProductCard from "../Components/ProductCard"
const ShopAll = () => {
    const [activeIndex, setActiveIndex] = useState({})

    const getActiveIndex = (id) => {
        return activeIndex[id] || 0
    }

    const handleImageClick = (id, index) => {
        setActiveIndex(prev => ({
            ...prev,
            [id]: index
        }))
    }

    const handleQuickView = (item) => {
        console.log(item)
    }

    return (
        <div className="grid grid-cols-4 gap-5">
            {Product.map(item => (
                <ProductCard
                    key={item.id}
                    item={item}
                    getActiveIndex={getActiveIndex}
                    handleImageClick={handleImageClick}
                    handleQuickView={handleQuickView}
                />
            ))}
        </div>
    )
}
export default ShopAll ;