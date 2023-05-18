import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="123321"
            title="The Nepa Book"
            price={69.69}
            image="https://m.media-amazon.com/images/I/51qhHdEe6zL._SX370_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="234543"
            title="OnePlus 10R 5G (Forest Green, 8GB RAM, 128GB Storage, 80W SuperVOOC)"
            price={31999}
            image="https://m.media-amazon.com/images/I/716uVx3Wr5L._SX679_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="567456"
            title="Ambrane Wireless Gaming Controller with Transparent Design, 2.4GHz Wireless Technology, Integrated Dual Intensity Motor, Illuminated Pad for PC - Windows, PS3 Console & Android TV(OP-WLGC01, Black)"
            price={1499}
            image="https://m.media-amazon.com/images/I/711EqR0PGGL._SX679_.jpg"
            rating={4}
          />
          <Product
            id="787567"
            title="Blue Star 1.5 Ton 3 Star Convertible 4 in 1 Cooling Inverter Split AC (Copper, Multi Sensors, Stabalizer Free Operation, Dust Filters, Blue Fins, Self Diagnosis, Timer, 2023 Model, IA318FNU, White)"
            price={35999}
            image="https://m.media-amazon.com/images/I/515BpZfhH1L._SX679_.jpg"
            rating={5}
          />

          <Product
            id="687646"
            title="Collectible India Ganesha for Car Dashboard Ganesh Statue Murti Ceramic Terracotta Lord Ganpati Diwali Gifts Home Decor Figurine (Size: 3.5 x 2 inches)"
            price={599}
            image="https://m.media-amazon.com/images/I/71-ANtkR9ML._SX522_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="986789"
            title="Sony HT-S20R Real 5.1ch Dolby Digital Soundbar for TV with subwoofer and Compact Rear Speakers, 5.1ch Home Theatre System (400W,Bluetooth & USB Connectivity, HDMI & Optical connectivity)"
            price={17899}
            image="https://m.media-amazon.com/images/I/71+s6K1eovL._SX522_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
