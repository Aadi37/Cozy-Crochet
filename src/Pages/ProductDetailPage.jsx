import { useParams } from "react-router-dom";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

import products from "../data/Product";
const ProductDetailPage = () => {
  const { slug } = useParams();

  const product = products.find(item => item.slug === slug);

  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return <h2>Product Not Found</h2>;
  }
  return (
    <>
      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className=" rounded-lg overflow-hidden">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-[600px] object-cover"
              />
            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-3 mt-4">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setActiveImage(index)}
                  className={`w-20 h-20 object-cover cursor-pointer border ${activeImage === index ? "border-black" : ""
                    }`}
                />
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-xl text-[#fc6b38] font-[600] mt-2">₹{product.price}</p>

            <p className="mt-4 text-gray-600">{product.description}</p>
            <div className="key_features my-4">
              <h4 className="font-[600] text-[22px] mb-4">key features</h4>
              <ul>
                {product.key_features.map((feat, index) => (
                  <li key={index} className="mb-2 flex gap-3 items-center">
                    <span><FaAngleRight /></span>{feat}
                  </li>
                ))}

              </ul>
            </div>

            {/* BUTTONS */}
            <div className="mt-6 flex gap-4">
              <button className="bg-black text-white px-6 py-2 rounded">
                Add to Cart
              </button>

              <a
                href={`https://api.whatsapp.com/send?phone=917999589547&text=I want to order ${product.name}`}
                target="_blank"
                className="bg-green-500 text-white px-6 py-2 rounded"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
export default ProductDetailPage;