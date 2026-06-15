import { useEffect, useState } from "react";
import bannerImg from "../Images/upscaled_hd.png";

const Banner = () => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % features.length);
        }, 5000); // 5 sec

        return () => clearInterval(interval);
    }, []);
    const features = [
        "✔ 100% Handmade",
        "✔ Eco-Friendly Materials",
        "✔ Fast Delivery Across India"
    ];
    return (
        <section className="BannerContainer">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="row grid grid-cols-1 md:grid-cols-2 gap-[15px] items-center">

                    {/* TEXT SECTION */}
                    <div className="TextWrap order-2 md:order-1">
                        <div className="bannerTxt">

                            {/* SEO H1 (important for homepage ranking) */}
                            <h1 className="FontArt">
                                Handmade Crochet Products in India
                            </h1>

                            <h2 className="mt-3 text-lg font-medium">
                                Buy Crochet Bags, Home Decor & Unique Handmade Gifts Online
                            </h2>

                            <p className="mt-4 text-gray-700">
                                Discover premium handcrafted crochet products made with love and care.
                                Explore stylish crochet bags, aesthetic home decor, coasters, and gift items.
                                Each product is 100% handmade, eco-friendly, and uniquely designed by artisans in India.
                            </p>

                            <div className="BtnBlock my-10">
                                <a href="/shop" className="BtnDefault">
                                    <span>Shop Handmade Collection</span>
                                </a>
                            </div>

                            {/* SEO trust line */}
                            <div className="overflow-hidden h-[24px] AnimationEl">
                                <div
                                    className="transition-transform duration-700 ease-in-out"
                                    style={{ transform: `translateY(-${index * 24}px)` }}
                                >
                                    {features.map((item, i) => (
                                        <p key={i} className="text-sm text-gray-500 h-[24px]">
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* IMAGE SECTION */}
                    {/* <div className="ImgWrap order-1 md:order-2">
                        <img
                            src={bannerImg}
                            alt="Handmade crochet products banner showing bags and home decor items"
                            loading="lazy"
                            className="w-full h-auto object-cover"
                        />
                    </div> */}

                </div>
            </div>
        </section>
    );
};

export default Banner;