import React from "react";
import "./Home.css";
import Product from "./Product";
import { useId } from "react-id-generator";

function Home() {
  const [productId] = useId();

  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/SAPF/1500x600_Hero-Tall_JPN._CB668283308_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id={productId}
            title="Dr Trust Professional Series Finger Tip Pulse Oximeter With Audio Visual Alarm and Respiratory Rate(Blue)"
            price={3499.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71M-09ee9AL._SL1500_.jpg"
          />
          <Product
            id={productId}
            title="Amazon Brand - Solimo Paisley Preen 144 TC 100% Cotton Double Bedsheet with 2 Pillow Covers, Green and Orange"
            price={769.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/915OxtyTSIL._SL1500_.jpg"
          />
          <Product
            id={productId}
            title="PARAGON SOLEA Women's Tan Sandals"
            price={279.0}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71cFPc3bbEL._UL1500_.jpg"
          />
          <Product
            id={productId}
            title="Titan Youth Analog Black Dial Women's Watch NM2480SM02/NN2480SM02"
            price={2594.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71-ao4taStL._UL1500_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id={productId}
            title="AmazonBasics Blaze 360 degree Rechargeable LED Light, Red"
            price={759.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71chcRy6pkL._SL1500_.jpg"
          />
          <Product
            id={productId}
            title="ASUS VivoBook 14 (2020) Intel Quad Core Pentium Silver N5030, 14-inch (35.56 cms) FHD Thin and Light Laptop"
            price={24990.0}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71WuDXpTAlL._SL1500_.jpg"
          />
          <Product
            id={productId}
            title="Lizol Disinfectant Surface and Floor Cleaner Liquid, Citrus - 2 L | Kills 99.9% Germs"
            price={323.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61WGQvZPyRL._SL1000_.jpg"
          />
          <Product
            id={productId}
            title="Rupa Men Vest"
            price={300.0}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/715xDUUAXaL._UL1500_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id={productId}
            title="Maggi 2-Minute Instant Noodles - Masala, 560g"
            price={1094}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81tiRzUBKEL._SL1500_.jpg"
          />
          <Product
            id={productId}
            title="Tiny Deal Compact 10x25 Mini Binoculars Telescope Sports Hunting Camping Survival Kit - Black"
            price={470.0}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/51Fz4lrJbVL._SL1000_.jpg"
          />
          <Product
            id={productId}
            title="Klaxon Nylon Safety Hand Gloves (Pair 5)"
            price={235.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/91dM3kZWgtL._SL1500_.jpg"
          />
          <Product
            id={productId}
            title="Dark Fantasy Choco Fills, 300g"
            price={82.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81rt1QmhZIL._SL1500_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id={productId}
            title="ANNI DESIGNER silk with blouse piece Saree"
            price={319}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/91AmramBw8L._UL1500_.jpg"
          />
          <Product
            id={productId}
            title="The Deal: Inside the World of a Super-Agent"
            price={499.0}
            rating={4}
            image="https://m.media-amazon.com/images/P/B01D90145C.01._SCLZZZZZZZ_SX500_.jpg"
          />
          <Product
            id={productId}
            title="Prime deal 100% Cotton Premium Collection Handkerchiefs Hanky For Men - Striped XXL King Size (Color Light Multi 6 Pcs)"
            price={299.0}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/616VD8GY3eL._UL1500_.jpg"
          />
          <Product
            id={productId}
            title="Himalaya Herbals Purifying Neem Face Wash, 200ml"
            price={161.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61mKN1SlKAL._SL1000_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id={productId}
            title="The Deal Men's 15.6 Inch Polyester Casual Laptop Backpack, Travel Computer Bag Water Resistant College Work School Bag (Blue)"
            price={270}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61%2BqZkVp3aL._SL1500_.jpg"
          />
          <Product
            id={productId}
            title="RIDA RUGS Floral Persian Carpet (Multicolour, Silk, 5x7 Feet)"
            price={9991.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71qbpJvL5lL._SL1146_.jpg"
          />
          <Product
            id={productId}
            title="AmazonBasics Security Safe - 0.5-Cubic Feet,Black(14.15 litres)"
            price={4269.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/718l03qCcJL._SL1000_.jpg"
          />
          <Product
            id={productId}
            title="E Deals Printed Wall Clock 10 Inches Round Shaped Designer Wall Clock with Glass for Home/Living Room/Bedroom/Kitchen/Office"
            price={349.0}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/41r9WUJAd2L.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
