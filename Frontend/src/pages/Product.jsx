import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/Shopcontext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

export const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [size, setSize] = useState("");
  const [image, setImage] = useState("");
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productId, products]);
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in-duration-500 opacity-100">
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full h-auto"></img>
          </div>
        </div>
        {/* product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img className="w-3 5" src={assets.star_icon} alt="" />
            <img className="w-3 5" src={assets.star_icon} alt="" />
            <img className="w-3 5" src={assets.star_icon} alt="" />
            <img className="w-3 5" src={assets.star_icon} alt="" />
            <img className="w-3 5" src={assets.star_dull_icon} alt="" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5"></hr>
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* description and review */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm"> Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Upgrade your wardrobe with our premium men’s T-shirt, designed for
            both comfort and style. Crafted from soft, breathable fabric, it
            offers a perfect fit that moves with you throughout the day. Whether
            you're dressing it up with a jacket or keeping it casual with jeans,
            this versatile tee is a must-have staple that effortlessly blends
            modern design with everyday ease.
          </p>
          <p>
            Our customers love the quality, comfort, and fit of our products.
            With consistently high ratings and positive feedback, shoppers
            appreciate the attention to detail, fast delivery, and stylish
            designs that stand out. Whether it's the softness of the fabric or
            the perfect fit, every review reflects our commitment to making
            fashion feel good and look even better.
          </p>
        </div>
      </div>
      {/* display related products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};
export default Product;
