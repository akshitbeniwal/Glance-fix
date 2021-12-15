import { React, useState, useRef, render } from "react";
import { Link } from "react-router-dom";
import { Button, Overlay, Popover } from "react-bootstrap";
import "./css/Navbarcss.css";
export function Womenpopover(props) {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  const handleNoClick = (event) => {
    if (show) {
      setShow(!show);
      setTarget(event.target);
    }
  };

  return (
    <div ref={ref} onMouseLeave={handleNoClick}>
      <Button onMouseOver={handleClick}>Women</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom-start"
        container={ref}
      >
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div className="over-everything" {...props}>
            <div className="desktop-paneContent" data-reactid="183">
              <div
                className="desktop-categoryContainer"
                data-index="1"
                data-group="women"
                data-color="#fb56c1"
                data-reactid="184"
              >
                <li className="desktop-oddColumnContent" data-reactid="185">
                  <ul className="desktop-navBlock" data-reactid="186">
                    <li data-reactid="187">
                      <a
                        href="https://www.myntra.com/fusion-wear"
                        style={{ color: "#fb56c1" }}
                        className="desktop-categoryName"
                        data-reactid="188"
                      >
                        Indian &amp; Fusion Wear
                      </a>
                    </li>
                    <li data-reactid="189">
                      <a
                        href="https://www.myntra.com/women-kurtas-kurtis-suits"
                        className="desktop-categoryLink"
                        data-reactid="190"
                      >
                        Kurtas &amp; Suits
                      </a>
                    </li>
                    <li data-reactid="191">
                      <a
                        href="https://www.myntra.com/ethnic-tops"
                        className="desktop-categoryLink"
                        data-reactid="192"
                      >
                        Kurtis, Tunics &amp; Tops
                      </a>
                    </li>
                    <li data-reactid="193">
                      <a
                        href="https://www.myntra.com/women-ethnic-wear"
                        className="desktop-categoryLink"
                        data-reactid="194"
                      >
                        Ethnic Wear
                      </a>
                    </li>
                    <li data-reactid="195">
                      <a
                        href="https://www.myntra.com/women-ethnic-bottomwear?f=categories%3AChuridar%2CLeggings%2CSalwar"
                        className="desktop-categoryLink"
                        data-reactid="196"
                      >
                        Leggings, Salwars &amp; Churidars
                      </a>
                    </li>
                    <li data-reactid="197">
                      <a
                        href="https://www.myntra.com/skirts-palazzos"
                        className="desktop-categoryLink"
                        data-reactid="198"
                      >
                        Skirts &amp; Palazzos
                      </a>
                    </li>
                    <li data-reactid="199">
                      <a
                        href="https://www.myntra.com/saree"
                        className="desktop-categoryLink"
                        data-reactid="200"
                      >
                        Sarees
                      </a>
                    </li>
                    <li data-reactid="201">
                      <a
                        href="https://www.myntra.com/dress-material"
                        className="desktop-categoryLink"
                        data-reactid="202"
                      >
                        Dress Materials
                      </a>
                    </li>
                    <li data-reactid="203">
                      <a
                        href="https://www.myntra.com/lehenga-choli"
                        className="desktop-categoryLink"
                        data-reactid="204"
                      >
                        Lehenga Cholis
                      </a>
                    </li>
                    <li data-reactid="205">
                      <a
                        href="https://www.myntra.com/dupatta-shawl"
                        className="desktop-categoryLink"
                        data-reactid="206"
                      >
                        Dupattas &amp; Shawls
                      </a>
                    </li>
                    <li data-reactid="207">
                      <a
                        href="https://www.myntra.com/women-jackets"
                        className="desktop-categoryLink"
                        data-reactid="208"
                      >
                        Jackets
                      </a>
                    </li>
                    <div className="desktop-hrLine" data-reactid="209"></div>
                    <li data-reactid="210">
                      <a
                        href="https://www.myntra.com/women-accessories"
                        style={{ color: "#fb56c1" }}
                        className="desktop-categoryName"
                        data-reactid="211"
                      >
                        Belts, Scarves &amp; More
                      </a>
                    </li>
                    <li data-reactid="212">
                      <a
                        href="https://www.myntra.com/women-watches"
                        style={{ color: "#fb56c1" }}
                        className="desktop-categoryName"
                        data-reactid="213"
                      >
                        Watches &amp; Wearables
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className="
                                desktop-evenColumnContent
                                desktop-oddColumnContent
                              "
                  data-reactid="214"
                >
                  <ul className="desktop-navBlock" data-reactid="215">
                    <li data-reactid="216">
                      <a
                        href="https://www.myntra.com/womens-western-wear"
                        style={{ color: "#fb56c1" }}
                        className="desktop-categoryName"
                        data-reactid="217"
                      >
                        Western Wear
                      </a>
                    </li>
                    <li data-reactid="218">
                      <a
                        href="https://www.myntra.com/dresses?f=Gender%3Amen%20women%2Cwomen"
                        className="desktop-categoryLink"
                        data-reactid="219"
                      >
                        Dresses
                      </a>
                    </li>
                    <li data-reactid="220">
                      <a
                        href="https://www.myntra.com/jumpsuits?f=Gender%3Amen%20women%2Cwomen"
                        className="desktop-categoryLink"
                        data-reactid="221"
                      >
                        Jumpsuits
                      </a>
                    </li>
                    <li data-reactid="222">
                      <a
                        href="https://www.myntra.com/tops"
                        className="desktop-categoryLink"
                        data-reactid="223"
                      >
                        Tops
                      </a>
                    </li>
                    <li data-reactid="224">
                      <a
                        href="https://www.myntra.com/women-jeans"
                        className="desktop-categoryLink"
                        data-reactid="225"
                      >
                        Jeans
                      </a>
                    </li>
                    <li data-reactid="226">
                      <a
                        href="https://www.myntra.com/women-trousers"
                        className="desktop-categoryLink"
                        data-reactid="227"
                      >
                        Trousers &amp; Capris
                      </a>
                    </li>
                    <li data-reactid="228">
                      <a
                        href="https://www.myntra.com/women-shorts-skirts"
                        className="desktop-categoryLink"
                        data-reactid="229"
                      >
                        Shorts &amp; Skirts
                      </a>
                    </li>
                    <li data-reactid="230">
                      <a
                        href="https://www.myntra.com/women-shrugs"
                        className="desktop-categoryLink"
                        data-reactid="231"
                      >
                        Shrugs
                      </a>
                    </li>
                    <li data-reactid="232">
                      <a
                        href="https://www.myntra.com/women-sweaters-sweatshirts"
                        className="desktop-categoryLink"
                        data-reactid="233"
                      >
                        Sweaters &amp; Sweatshirts
                      </a>
                    </li>
                    <li data-reactid="234">
                      <a
                        href="https://www.myntra.com/women-jackets-coats"
                        className="desktop-categoryLink"
                        data-reactid="235"
                      >
                        Jackets &amp; Coats
                      </a>
                    </li>
                    <li data-reactid="236">
                      <a
                        href="https://www.myntra.com/women-blazers-waistcoats"
                        className="desktop-categoryLink"
                        data-reactid="237"
                      >
                        Blazers &amp; Waistcoats
                      </a>
                    </li>
                    <div className="desktop-hrLine" data-reactid="238"></div>
                    <li data-reactid="239">
                      <a
                        href="https://www.myntra.com/women-plus-store"
                        style={{ color: "#fb56c1" }}
                        className="desktop-categoryName"
                        data-reactid="240"
                      >
                        Plus Size
                      </a>
                    </li>
                    <li data-reactid="241">
                      <a
                        href="https://www.myntra.com/women-sunglasses"
                        style={{ color: "#fb56c1" }}
                        className="desktop-categoryName"
                        data-reactid="242"
                      >
                        Sunglasses &amp; Frames
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="desktop-oddColumnContent" data-reactid="243">
                  <ul className="desktop-navBlock" data-reactid="244">
                    <li data-reactid="245">
                      <a
                        href="https://www.myntra.com/women-footwear"
                        style={{ color: "#fb56c1" }}
                        className="desktop-categoryName"
                        data-reactid="246"
                      >
                        Footwear
                      </a>
                    </li>
                    <li data-reactid="247">
                      <a
                        href="https://www.myntra.com/flats"
                        className="desktop-categoryLink"
                        data-reactid="248"
                      >
                        Flats
                      </a>
                    </li>
                    <li data-reactid="249">
                      <a
                        href="https://www.myntra.com/women-casual-shoes"
                        className="desktop-categoryLink"
                        data-reactid="250"
                      >
                        Casual Shoes
                      </a>
                    </li>
                    <li data-reactid="251">
                      <a
                        href="https://www.myntra.com/women-heels"
                        className="desktop-categoryLink"
                        data-reactid="252"
                      >
                        Heels
                      </a>
                    </li>
                    <li data-reactid="253">
                      <a
                        href="https://www.myntra.com/women-boots-menu?f=Type_article_attr%3Aflat%20boots%2Cheeled%20boots"
                        className="desktop-categoryLink"
                        data-reactid="254"
                      >
                        Boots
                      </a>
                    </li>
                    <li data-reactid="255">
                      <a
                        href="https://www.myntra.com/women-sports-shoes"
                        className="desktop-categoryLink"
                        data-reactid="256"
                      >
                        Sports Shoes &amp; Floaters
                      </a>
                    </li>
                    <div className="desktop-hrLine" data-reactid="257"></div>
                    <li data-reactid="258">
                      <a
                        href="https://www.myntra.com/women-sportswear"
                        style={{ color: "#fb56c1" }}
                        className="desktop-categoryName"
                        data-reactid="259"
                      >
                        Sports &amp; Active Wear
                      </a>
                    </li>
                    <li data-reactid="260">
                      <a
                        href="https://www.myntra.com/women-sportswear-clothing"
                        className="desktop-categoryLink"
                        data-reactid="261"
                      >
                        Clothing
                      </a>
                    </li>
                    <li data-reactid="262">
                      <a
                        href="https://www.myntra.com/women-sports-shoes"
                        className="desktop-categoryLink"
                        data-reactid="263"
                      >
                        Footwear
                      </a>
                    </li>
                    <li data-reactid="264">
                      <a
                        href="https://www.myntra.com/women-sports-accessories"
                        className="desktop-categoryLink"
                        data-reactid="265"
                      >
                        Sports Accessories
                      </a>
                    </li>
                    <li data-reactid="266">
                      <a
                        href="https://www.myntra.com/women-sports-equipments"
                        className="desktop-categoryLink"
                        data-reactid="267"
                      >
                        Sports Equipment
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className="
                                desktop-evenColumnContent
                                desktop-oddColumnContent
                              "
                  data-reactid="268"
                >
                  <ul className="desktop-navBlock" data-reactid="269">
                    <li data-reactid="270">
                      <a
                        href="https://www.myntra.com/lingerie"
                        style={{ color: "#fb56c1" }}
                        className="desktop-categoryName"
                        data-reactid="271"
                      >
                        Lingerie &amp; Sleepwear
                      </a>
                    </li>
                    <li data-reactid="272">
                      <a
                        href="https://www.myntra.com/bra"
                        className="desktop-categoryLink"
                        data-reactid="273"
                      >
                        Bra
                      </a>
                    </li>
                    <li data-reactid="274">
                      <a
                        href="https://www.myntra.com/women-briefs"
                        className="desktop-categoryLink"
                        data-reactid="275"
                      >
                        Briefs
                      </a>
                    </li>
                    <li data-reactid="276">
                      <a
                        href="https://www.myntra.com/women-clothing-shapewear"
                        className="desktop-categoryLink"
                        data-reactid="277"
                      >
                        Shapewear
                      </a>
                    </li>
                    <li data-reactid="278">
                      <a
                        href="https://www.myntra.com/women-loungewear-and-nightwear"
                        className="desktop-categoryLink"
                        data-reactid="279"
                      >
                        Sleepwear &amp; Loungewear
                      </a>
                    </li>
                    <li data-reactid="280">
                      <a
                        href="https://www.myntra.com/women-swimwear"
                        className="desktop-categoryLink"
                        data-reactid="281"
                      >
                        Swimwear
                      </a>
                    </li>
                    <li data-reactid="282">
                      <a
                        href="https://www.myntra.com/camisoles-and-thermals"
                        className="desktop-categoryLink"
                        data-reactid="283"
                      >
                        Camisoles &amp; Thermals
                      </a>
                    </li>
                    <div className="desktop-hrLine" data-reactid="284"></div>
                    <li data-reactid="285">
                      <a
                        href="https://www.myntra.com/women-personal-care"
                        style={{ color: "#fb56c1" }}
                        className="desktop-categoryName"
                        data-reactid="286"
                      >
                        Beauty &amp; Personal Care
                      </a>
                    </li>
                    <li data-reactid="287">
                      <a
                        href="https://www.myntra.com/makeup"
                        className="desktop-categoryLink"
                        data-reactid="288"
                      >
                        Makeup
                      </a>
                    </li>
                    <li data-reactid="289">
                      <a
                        href="https://www.myntra.com/skin-care?f=gender%3Amen%20women%2Cwomen"
                        className="desktop-categoryLink"
                        data-reactid="290"
                      >
                        Skincare
                      </a>
                    </li>
                    <li data-reactid="291">
                      <a
                        href="https://www.myntra.com/women-personal-care?f=brand%3ABobbi%20Brown%2CBvlgari%2CCalvin%20Klein%2CClinique%2CDAVIDOFF%2CDermalogica%2CForest%20Essentials%2CKAMA%20AYURVEDA%2CSalvatore%20Ferragamo"
                        className="desktop-categoryLink"
                        data-reactid="292"
                      >
                        Premium Beauty
                      </a>
                    </li>
                    <li data-reactid="293">
                      <a
                        href="https://www.myntra.com/lipstick"
                        className="desktop-categoryLink"
                        data-reactid="294"
                      >
                        Lipsticks
                      </a>
                    </li>
                    <li data-reactid="295">
                      <a
                        href="https://www.myntra.com/women-perfumes"
                        className="desktop-categoryLink"
                        data-reactid="296"
                      >
                        Fragrances
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="desktop-oddColumnContent" data-reactid="297">
                  <ul className="desktop-navBlock" data-reactid="298">
                    <li data-reactid="299">
                      <a
                        href="https://www.myntra.com/gadgets"
                        style={{ color: "#fb56c1" }}
                        className="desktop-categoryName"
                        data-reactid="300"
                      >
                        Gadgets
                      </a>
                    </li>
                    <li data-reactid="301">
                      <a
                        href="https://www.myntra.com/smart-wearables"
                        className="desktop-categoryLink"
                        data-reactid="302"
                      >
                        Smart Wearables
                      </a>
                    </li>
                    <li data-reactid="303">
                      <a
                        href="https://www.myntra.com/smart-wearables?f=Categories%3AFitness%20Bands"
                        className="desktop-categoryLink"
                        data-reactid="304"
                      >
                        Fitness Gadgets
                      </a>
                    </li>
                    <li data-reactid="305">
                      <a
                        href="https://www.myntra.com/headphones"
                        className="desktop-categoryLink"
                        data-reactid="306"
                      >
                        Headphones
                      </a>
                    </li>
                    <li data-reactid="307">
                      <a
                        href="https://www.myntra.com/speakers"
                        className="desktop-categoryLink"
                        data-reactid="308"
                      >
                        Speakers
                      </a>
                    </li>
                    <div className="desktop-hrLine" data-reactid="309"></div>
                    <li data-reactid="310">
                      <a
                        href="https://www.myntra.com/women-jewellery"
                        style={{ color: "#fb56c1" }}
                        className="desktop-categoryName"
                        data-reactid="311"
                      >
                        Jewellery
                      </a>
                    </li>
                    <li data-reactid="312">
                      <a
                        href="https://www.myntra.com/fashion-jewellery"
                        className="desktop-categoryLink"
                        data-reactid="313"
                      >
                        Fashion Jewellery
                      </a>
                    </li>
                    <li data-reactid="314">
                      <a
                        href="https://www.myntra.com/fine-jewellery"
                        className="desktop-categoryLink"
                        data-reactid="315"
                      >
                        Fine Jewellery
                      </a>
                    </li>
                    <li data-reactid="316">
                      <a
                        href="https://www.myntra.com/earrings"
                        className="desktop-categoryLink"
                        data-reactid="317"
                      >
                        Earrings
                      </a>
                    </li>
                    <div className="desktop-hrLine" data-reactid="318"></div>
                    <li data-reactid="319">
                      <a
                        href="https://www.myntra.com/backpacks-for-women"
                        style={{ color: "#fb56c1" }}
                        className="desktop-categoryName"
                        data-reactid="320"
                      >
                        Backpacks
                      </a>
                    </li>
                    <li data-reactid="321">
                      <a
                        href="https://www.myntra.com/handbags-and-bags"
                        style={{ color: "#fb56c1" }}
                        className="desktop-categoryName"
                        data-reactid="322"
                      >
                        Handbags, Bags &amp; Wallets
                      </a>
                    </li>
                    <li data-reactid="323">
                      <a
                        href="https://www.myntra.com/trolley-bags"
                        style={{ color: "#fb56c1" }}
                        className="desktop-categoryName"
                        data-reactid="324"
                      >
                        Luggages &amp; Trolleys
                      </a>
                    </li>
                  </ul>
                </li>
              </div>
            </div>
          </div>
        )}
        {/* <Popover id="popover-contained">
          <Popover.Header as="h3">Popover bottom</Popover.Header>
          <Popover.Body>
            <strong>Holy guacamole!</strong> Check this info.
          </Popover.Body>
        </Popover> */}
      </Overlay>
    </div>
  );
}
