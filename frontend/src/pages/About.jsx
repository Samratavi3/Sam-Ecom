import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewLetterBox from "../components/NewLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="w-full max-w-[450px]" alt="" />
        <div className="flex flex-col justify-center gap-5 md:w2/4 text-gray-600 ">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia at
            soluta impedit deserunt cum voluptatibus perspiciatis cumque natus
            ipsam sit iste saepe molestias asperiores perferendis, est, illo ex.
            Animi, optio?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            qui, in iste iure quaerat fugiat eum vel doloremque, culpa maxime
            laborum natus, assumenda voluptatibus ex illo hic soluta. Saepe,
            eligendi.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ipsa molestias officiis ipsum quisquam est, nobis amet, veritatis
            maxime eos pariatur rem minus. Quae eveniet maxime fuga delectus
            tempore. Non?
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"Choose Us"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurence</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
            laudantium ducimus ut impedit repellat, omnis facilis porro eius?
            Quae sed autem recusandae culpa eligendi tempora porro id neque
            dolores sunt?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenice</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
            laudantium ducimus ut impedit repellat, omnis facilis porro eius?
            Quae sed autem recusandae culpa eligendi tempora porro id neque
            dolores sunt?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer service</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
            laudantium ducimus ut impedit repellat, omnis facilis porro eius?
            Quae sed autem recusandae culpa eligendi tempora porro id neque
            dolores sunt?
          </p>
        </div>
      </div>
      <NewLetterBox />
    </div>
  );
};

export default About;
