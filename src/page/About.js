import React from "react";
import AboutCard from "../component/AboutCard";

const About = () => {
  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-3 py-0 mt-5">
        <div className="md:w-1/2 flex p-0 justify-center">
          <AboutCard />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl py-4 md:text-6xl font-bold">
            About
            <span className="text-emerald-900"> Us</span>
          </h2>
          <div className="font-semibold text-slate-600">
            <p className="py-5 text-base">
              Welcome to{" "}
              <span className="font-medium text-emerald-600">Food Franzy </span>{" "}
              ! Your ultimate destination for all things delicious! At Food
              Franzy, we're passionate about bringing you the freshest fruits,
              crispest vegetables, tastiest pizzas, heartiest burgers, most
              tempting snacks, coolest drinks, creamiest ice creams, and
              dreamiest cakes – all at your fingertips!
            </p>
            <p>
              Our journey began with a simple vision: to make high-quality,
              mouthwatering food accessible to everyone, anytime, anywhere.
              Whether you're craving a juicy burger, a refreshing smoothie, or a
              slice of decadent cake, we've got you covered. But Food Franzy is
              more than just an online marketplace; it's a celebration of
              flavors, a hub for foodies..
            </p>
            <p className="pt-2">
              Thank you for choosing Food Franzy as your go-to destination for
              all your food cravings. Join us on this delectable journey as we
              explore the endless possibilities of culinary delight together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
