import ProductOne from "../Images/Product/ProductOne.png"
import ProductTwo from "../Images/Product/ProductTwo.png"
import ProductThree from "../Images/Product/ProductThree.png"
import ProductFour from "../Images/Product/ProductFour.png"
import productTwoone from "../Images/Product/productTwo-one.jpg"
import ProductTwotwo from "../Images/Product/productTwo-two.jpg"
import ProductthreeThree from "../Images/Product/productTwo-three.jpg"
import ProductfourFour from "../Images/Product/productTwo-four.jpg"
import coffeecrochetcupsone from "../Images/Product/coffeecrochetcupsone.png"
import coffeecrochetcupsTwo from "../Images/Product/coffeecrochetcupsTwo.png"
import coffeecrochetcupsThree from "../Images/Product/coffeecrochetcupsThree.png"
import coffeecrochetcupsFour from "../Images/Product/coffeecrochetcupsFour.png"
import CrochetFlowersOne from "../Images/Product/CrochetFlowersOne.png"
import CrochetFlowersTwo from "../Images/Product/CrochetFlowersTwo.png"
import CrochetFlowersThree from "../Images/Product/CrochetFlowersThree.png"
import CrochetFlowersFour from  "../Images/Product/CrochetFlowersFour.png"
import WomenOne from "../Images/Product/WomenOne.png"
import WomenTwo from "../Images/Product/WomenTwo.png"
import WomenThree from "../Images/Product/WomenThree.png"
import WomenFour from  "../Images/Product/WomenFour.png"
import listOne from "../Images/Product/listOne.png"
import listTwo from "../Images/Product/listTwo.png"
import listThree from "../Images/Product/listThree.png"
import listFour from "../Images/Product/listFour.png"  
import HairOne from "../Images/Product/HairOne.png"
import HairTwo from "../Images/Product/HairTwo.png"
import HairThree from "../Images/Product/HairThree.png"
import HairFour from "../Images/Product/HairFour.png"
import MagentaTulipBouquetOne from "../Images/Product/Bouquet/MagentaTulipBouquet/MagentaTulipBouquetOne.png"
import MagentaTulipBouquetTwo from "../Images/Product/Bouquet/MagentaTulipBouquet/MagentaTulipBouquetTwo.png"
import MagentaTulipBouquetThree from "../Images/Product/Bouquet/MagentaTulipBouquet/MagentaTulipBouquetThree.png"
import MagentaTulipBouquetFour from "../Images/Product/Bouquet/MagentaTulipBouquet/MagentaTulipBouquetFour.png"
import EternalBloomCrochetBouquetOne from "../Images/Product/Bouquet/Eternal Bloom Crochet Bouquet/EternalBloomCrochetBouquetOne.png"
import EternalBloomCrochetBouquetTwo from "../Images/Product/Bouquet/Eternal Bloom Crochet Bouquet/EternalBloomCrochetBouquetTwo.png"
import EternalBloomCrochetBouquetThree from "../Images/Product/Bouquet/Eternal Bloom Crochet Bouquet/EternalBloomCrochetBouquetThree.png"
// import EternalBloomCrochetBouquetFour from "../Images/Product/Bouquet/Eternal Bloom Crochet Bouquet/EternalBloomCrochetBouquetOne.png"

const products = [
  {
    id: 1,
    name: "Woolen Round Mat",
    price: 499,
    category: "Home Decor",
    images: [ProductOne,ProductTwo,ProductThree,ProductFour],
    rating: 4.5,
    stock: 20
  },
  {
    id: 2,
    name: "Knitted Wool Sweater",
    price: 1299,
    category: "Womens",
    images: [WomenOne,WomenTwo,WomenThree,WomenFour],
    rating: 4.7,
    stock: 15
  },
  {
    id: 3,
    name: "coffee crochet cups",
    price: 999,
    category: "Home Decor",
    images: [coffeecrochetcupsone,coffeecrochetcupsTwo,coffeecrochetcupsThree,coffeecrochetcupsFour],
    rating: 4.3,
    stock: 30
  },
  {
    id: 4,
    name: "Crochet Flowers",
    price: 2499,
    category: "Home Decor",
    images: [CrochetFlowersOne,CrochetFlowersTwo,CrochetFlowersThree,CrochetFlowersFour],
    rating: 4.8,
    stock: 10
  },
  {
    id: 5,
    name: "Woolen Gloves",
    price: 299,
    category: "Home Decor",
    images: 
     [ProductTwotwo,productTwoone,ProductthreeThree,ProductfourFour],
    rating: 4.2,
    stock: 40
  },
  {
    id: 6,
    name: "Crochet Table Mat",
    price: 599,
    category: "Home Decor",
    images: [HairOne,HairTwo,HairThree,HairFour],
    rating: 4.6,
    stock: 25
  },
  {
    id: 7,
    name: "Wool Yarn Pack",
    price: 799,
    category: "Home Decor",
    images: [listOne,listTwo,listThree,listFour],
    rating: 4.4,
    stock: 50
  },
  {
    id: 8,
    name: "Woolen Beanie Cap",
    price: 349,
    category: "Home Decor",
    images: [
      "https://via.placeholder.com/300x300?text=Product+8-1",
      "https://via.placeholder.com/300x300?text=Product+8-2"
    ],
    rating: 4.1,
    stock: 35
  },
  {
    id: 9,
    name: "Wool Blanket",
    price: 1999,
    category: "Home Decor",
    images: [
      "https://via.placeholder.com/300x300?text=Product+9-1",
      "https://via.placeholder.com/300x300?text=Product+9-2"
    ],
    rating: 4.9,
    stock: 12
  },
  {
    id: 10,
    name: "Kids Wool Sweater",
    price: 899,
    category: "Bouquet",
    images: [
      "https://via.placeholder.com/300x300?text=Product+10-1",
      "https://via.placeholder.com/300x300?text=Product+10-2"
    ],
    rating: 4.5,
    stock: 18
  },
    {
    id: 11,
    name: "Magenta Tulip Bouquet",
    price: 899,
    category: "Bouquet",
    images: [MagentaTulipBouquetOne,MagentaTulipBouquetTwo,MagentaTulipBouquetThree,MagentaTulipBouquetFour],
    rating: 4.5,
    stock: 18
  },
      {
    id: 12,
    name: "Eternal Bloom Crochet Bouquet",
    price: 899,
    category: "Bouquet",
    images: [EternalBloomCrochetBouquetOne,EternalBloomCrochetBouquetTwo,EternalBloomCrochetBouquetThree],
    rating: 4.5,
    stock: 18
  },
      {
    id: 13,
    name: "Scarlet Love Bouquet with Roses and Hearts",
    price: 899,
    category: "Bouquet",
    images: [
      "https://via.placeholder.com/300x300?text=Product+10-1",
      "https://via.placeholder.com/300x300?text=Product+10-2"
    ],
    rating: 4.5,
    stock: 18
  },
      {
    id: 14,
    name: "Golden Radiance Hand-Crocheted Sunflower Bouquet",
    price: 899,
    category: "Bouquet",
    images: [
      "https://via.placeholder.com/300x300?text=Product+10-1",
      "https://via.placeholder.com/300x300?text=Product+10-2"
    ],
    rating: 4.5,
    stock: 18
  }
]

export default products;