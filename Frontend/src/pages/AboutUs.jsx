import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetter from "../components/NewsLetter";

const AboutUs = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At Velura, fashion is more than just clothing — it's a form of
            self-expression. Founded with a passion for style and individuality,
            Velura brings you thoughtfully curated collections that blend
            timeless elegance with modern trends.
          </p>

          <p>
            Join us on a journey where fashion meets authenticity — and where
            your wardrobe becomes a reflection of who you are.{" "}
          </p>

          <b className="text-gray-800">Our Mission</b>
          <p>
            At Velura, our mission is to empower individuals to express their
            true selves through fashion. We are committed to delivering
            high-quality, stylish, and affordable apparel that celebrates
            diversity, confidence, and everyday elegance. By blending timeless
            design with modern sensibilities, we strive to create a fashion
            experience that is inclusive, inspiring, and accessible to all.
          </p>
        </div>
      </div>
      <div className="text-3xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            At Velura, quality is at the heart of everything we do. Every piece
            in our collection is crafted with premium materials and undergoes
            strict quality checks to ensure exceptional fit, finish, and
            durability. From fabric selection to final stitching, we pay
            attention to every detail to deliver clothing that not only looks
            great but feels great too. Our commitment to quality means you can
            shop with confidence, knowing that each product meets the highest
            standards of craftsmanship and care.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            At Velura, we make fashion effortless. From a smooth browsing
            experience to secure checkout and fast delivery, every step is
            designed with your convenience in mind. With easy returns,
            responsive support, and seamless shopping across devices, we ensure
            a hassle-free experience—so you can focus on looking and feeling
            your best
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            At Velura, our customers are at the heart of everything we do. We’re
            dedicated to providing prompt, friendly, and personalized support at
            every stage of your shopping journey. Whether you need styling
            advice, order assistance, or post-purchase care, our team is here to
            help—quickly and thoughtfully. Your satisfaction is our priority,
            and we strive to make every interaction seamless and enjoyable.
          </p>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default AboutUs;
