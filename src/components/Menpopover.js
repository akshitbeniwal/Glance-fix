import { React, useState, useRef, render } from "react";
import { Link } from "react-router-dom";
import { Button, Overlay, Popover } from "react-bootstrap";
import "./css/Navbarcss.css";
export function Menpopover(props) {
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
      <Button onMouseOver={handleClick}>Men</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            // {...props}
            className="over-everything"
          >
            {/* <Popover id="popover-contained"> */}
            {/* <Popover.Header>
            <h4 className="text-dark">Popover bottom</h4>
          </Popover.Header> */}
            {/* <Popover.Body> */}
            <div className="desktop-paneContent" data-reactid="24">
              <div
                className="desktop-categoryContainer "
                data-index="0"
                data-group="men"
                // data-color="#ee5f73"

                data-reactid="25"
              >
                <li className="desktop-oddColumnContent" data-reactid="26">
                  <ul className="desktop-navBlock" data-reactid="27">
                    <li data-reactid="28">
                      <a
                        href="#"
                        className="desktop-categoryName"
                        style={{ color: "#ee5f73" }}
                        data-reactid="29"
                      >
                        Topwear
                      </a>
                    </li>
                    <li data-reactid="30">
                      <Link to="/topten/men/tshirts"
                        // href="https://www.myntra.com/men-tshirts"
                        className="desktop-categoryLink"
                        data-reactid="31"
                      >
                        T-Shirts
                      </Link>
                    </li>
                    <li data-reactid="32">
                      <a
                        href="https://www.myntra.com/men-casual-shirts"
                        className="desktop-categoryLink"
                        data-reactid="33"
                      >
                        Casual Shirts
                      </a>
                    </li>
                    <li data-reactid="34">
                      <a
                        href="https://www.myntra.com/men-formal-shirts"
                        className="desktop-categoryLink"
                        data-reactid="35"
                      >
                        Formal Shirts
                      </a>
                    </li>
                    <li data-reactid="36">
                      <a
                        href="https://www.myntra.com/men-sweatshirts"
                        className="desktop-categoryLink"
                        data-reactid="37"
                      >
                        Sweatshirts
                      </a>
                    </li>
                    <li data-reactid="38">
                      <a
                        href="https://www.myntra.com/men-sweaters"
                        className="desktop-categoryLink"
                        data-reactid="39"
                      >
                        Sweaters
                      </a>
                    </li>
                    <li data-reactid="40">
                      <a
                        href="https://www.myntra.com/men-jackets"
                        className="desktop-categoryLink"
                        data-reactid="41"
                      >
                        Jackets
                      </a>
                    </li>
                    <li data-reactid="42">
                      <a
                        href="https://www.myntra.com/men-blazers"
                        className="desktop-categoryLink"
                        data-reactid="43"
                      >
                        Blazers &amp; Coats
                      </a>
                    </li>
                    <li data-reactid="44">
                      <a
                        href="https://www.myntra.com/men-suits"
                        className="desktop-categoryLink"
                        data-reactid="45"
                      >
                        Suits
                      </a>
                    </li>
                    <li data-reactid="46">
                      <a
                        href="https://www.myntra.com/rain-jacket"
                        className="desktop-categoryLink"
                        data-reactid="47"
                      >
                        Rain Jackets
                      </a>
                    </li>
                    <div className="desktop-hrLine" data-reactid="48"></div>
                    <li data-reactid="49">
                      <a
                        href="https://www.myntra.com/men-ethnic-wear"
                        className="desktop-categoryName"
                        data-reactid="50"
                        style={{ color: "#ee5f73" }}
                      >
                        Indian &amp; Festive Wear
                      </a>
                    </li>
                    <li data-reactid="51">
                      <a
                        href="https://www.myntra.com/men-kurtas"
                        className="desktop-categoryLink"
                        data-reactid="52"
                      >
                        Kurtas &amp; Kurta Sets
                      </a>
                    </li>
                    <li data-reactid="53">
                      <a
                        href="https://www.myntra.com/sherwani"
                        className="desktop-categoryLink"
                        data-reactid="54"
                      >
                        Sherwanis
                      </a>
                    </li>
                    <li data-reactid="55">
                      <a
                        href="https://www.myntra.com/nehru-jackets"
                        className="desktop-categoryLink"
                        data-reactid="56"
                      >
                        Nehru Jackets
                      </a>
                    </li>
                    <li data-reactid="57">
                      <a
                        href="https://www.myntra.com/dhoti"
                        className="desktop-categoryLink"
                        data-reactid="58"
                      >
                        Dhotis
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className="
                                desktop-evenColumnContent
                                desktop-oddColumnContent
                              "
                  data-reactid="59"
                >
                  <ul className="desktop-navBlock" data-reactid="60">
                    <li data-reactid="61">
                      <a
                        href="https://www.myntra.com/men-bottomwear"
                        className="desktop-categoryName"
                        data-reactid="62"
                        style={{ color: "#ee5f73" }}
                      >
                        Bottomwear
                      </a>
                    </li>
                    <li data-reactid="63">
                      <a
                        href="https://www.myntra.com/men-jeans"
                        className="desktop-categoryLink"
                        data-reactid="64"
                      >
                        Jeans
                      </a>
                    </li>
                    <li data-reactid="65">
                      <a
                        href="https://www.myntra.com/men-casual-trousers"
                        className="desktop-categoryLink"
                        data-reactid="66"
                      >
                        Casual Trousers
                      </a>
                    </li>
                    <li data-reactid="67">
                      <a
                        href="https://www.myntra.com/men-formal-trousers"
                        className="desktop-categoryLink"
                        data-reactid="68"
                      >
                        Formal Trousers
                      </a>
                    </li>
                    <li data-reactid="69">
                      <a
                        href="https://www.myntra.com/mens-shorts"
                        className="desktop-categoryLink"
                        data-reactid="70"
                      >
                        Shorts
                      </a>
                    </li>
                    <li data-reactid="71">
                      <a
                        href="https://www.myntra.com/men-trackpants"
                        className="desktop-categoryLink"
                        data-reactid="72"
                      >
                        Track Pants &amp; Joggers
                      </a>
                    </li>
                    <div className="desktop-hrLine" data-reactid="73"></div>
                    <li data-reactid="74">
                      <a
                        href="https://www.myntra.com/men-innerwear"
                        className="desktop-categoryName"
                        data-reactid="75"
                        style={{ color: "#ee5f73" }}
                      >
                        Innerwear &amp; Sleepwear
                      </a>
                    </li>
                    <li data-reactid="76">
                      <a
                        href="https://www.myntra.com/men-briefs-and-trunks"
                        className="desktop-categoryLink"
                        data-reactid="77"
                      >
                        Briefs &amp; Trunks
                      </a>
                    </li>
                    <li data-reactid="78">
                      <a
                        href="https://www.myntra.com/men-boxers"
                        className="desktop-categoryLink"
                        data-reactid="79"
                      >
                        Boxers
                      </a>
                    </li>
                    <li data-reactid="80">
                      <a
                        href="https://www.myntra.com/men-innerwear-vests"
                        className="desktop-categoryLink"
                        data-reactid="81"
                      >
                        Vests
                      </a>
                    </li>
                    <li data-reactid="82">
                      <a
                        href="https://www.myntra.com/men-nightwear"
                        className="desktop-categoryLink"
                        data-reactid="83"
                      >
                        Sleepwear &amp; Loungewear
                      </a>
                    </li>
                    <li data-reactid="84">
                      <a
                        href="https://www.myntra.com/men-thermals"
                        className="desktop-categoryLink"
                        data-reactid="85"
                      >
                        Thermals
                      </a>
                    </li>
                    <div className="desktop-hrLine" data-reactid="86"></div>
                    <li data-reactid="87">
                      <a
                        href="https://www.myntra.com/men-plus-size"
                        className="desktop-categoryName"
                        data-reactid="88"
                        style={{ color: "#ee5f73" }}
                      >
                        Plus Size
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="desktop-oddColumnContent" data-reactid="89">
                  <ul className="desktop-navBlock" data-reactid="90">
                    <li data-reactid="91">
                      <a
                        href="https://www.myntra.com/men-footwear"
                        className="desktop-categoryName"
                        data-reactid="92"
                        style={{ color: "#ee5f73" }}
                      >
                        Footwear
                      </a>
                    </li>
                    <li data-reactid="93">
                      <a
                        href="https://www.myntra.com/men-casual-shoes"
                        className="desktop-categoryLink"
                        data-reactid="94"
                      >
                        Casual Shoes
                      </a>
                    </li>
                    <li data-reactid="95">
                      <a
                        href="https://www.myntra.com/men-sports-shoes"
                        className="desktop-categoryLink"
                        data-reactid="96"
                      >
                        Sports Shoes
                      </a>
                    </li>
                    <li data-reactid="97">
                      <a
                        href="https://www.myntra.com/men-formal-shoes"
                        className="desktop-categoryLink"
                        data-reactid="98"
                      >
                        Formal Shoes
                      </a>
                    </li>
                    <li data-reactid="99">
                      <a
                        href="https://www.myntra.com/men-sneakers"
                        className="desktop-categoryLink"
                        data-reactid="100"
                      >
                        Sneakers
                      </a>
                    </li>
                    <li data-reactid="101">
                      <a
                        href="https://www.myntra.com/men-sandals"
                        className="desktop-categoryLink"
                        data-reactid="102"
                      >
                        Sandals &amp; Floaters
                      </a>
                    </li>
                    <li data-reactid="103">
                      <a
                        href="https://www.myntra.com/men-flip-flops"
                        className="desktop-categoryLink"
                        data-reactid="104"
                      >
                        Flip Flops
                      </a>
                    </li>
                    <li data-reactid="105">
                      <a
                        href="https://www.myntra.com/men-socks"
                        className="desktop-categoryLink"
                        data-reactid="106"
                      >
                        Socks
                      </a>
                    </li>
                    <div className="desktop-hrLine" data-reactid="107"></div>
                    <li data-reactid="108">
                      <a
                        href="https://www.myntra.com/men-personal-care"
                        className="desktop-categoryName"
                        data-reactid="109"
                        style={{ color: "#ee5f73" }}
                      >
                        Personal Care &amp; Grooming
                      </a>
                    </li>
                    <li data-reactid="110">
                      <a
                        href="https://www.myntra.com/men-sunglasses"
                        className="desktop-categoryName"
                        data-reactid="111"
                        style={{ color: "#ee5f73" }}
                      >
                        Sunglasses &amp; Frames
                      </a>
                    </li>
                    <li data-reactid="112">
                      <a
                        href="https://www.myntra.com/mens-watches"
                        className="desktop-categoryName"
                        data-reactid="113"
                        style={{ color: "#ee5f73" }}
                      >
                        Watches
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className="
                                desktop-evenColumnContent
                                desktop-oddColumnContent
                              "
                  data-reactid="114"
                >
                  <ul className="desktop-navBlock" data-reactid="115">
                    <li data-reactid="116">
                      <a
                        href="https://www.myntra.com/men-sports-wear"
                        className="desktop-categoryName"
                        data-reactid="117"
                        style={{ color: "#ee5f73" }}
                      >
                        Sports &amp; Active Wear
                      </a>
                    </li>
                    <li data-reactid="118">
                      <a
                        href="https://www.myntra.com/men-sports-shoes"
                        className="desktop-categoryLink"
                        data-reactid="119"
                      >
                        Sports Shoes
                      </a>
                    </li>
                    <li data-reactid="120">
                      <a
                        href="https://www.myntra.com/men-sports-sandals"
                        className="desktop-categoryLink"
                        data-reactid="121"
                      >
                        Sports Sandals
                      </a>
                    </li>
                    <li data-reactid="122">
                      <a
                        href="https://www.myntra.com/men-sports-wear-tshirts"
                        className="desktop-categoryLink"
                        data-reactid="123"
                      >
                        Active T-Shirts
                      </a>
                    </li>
                    <li data-reactid="124">
                      <a
                        href="https://www.myntra.com/men-trackpants-shorts"
                        className="desktop-categoryLink"
                        data-reactid="125"
                      >
                        Track Pants &amp; Shorts
                      </a>
                    </li>
                    <li data-reactid="126">
                      <a
                        href="https://www.myntra.com/men-tracksuits"
                        className="desktop-categoryLink"
                        data-reactid="127"
                      >
                        Tracksuits
                      </a>
                    </li>
                    <li data-reactid="128">
                      <a
                        href="https://www.myntra.com/men-sports-jackets"
                        className="desktop-categoryLink"
                        data-reactid="129"
                      >
                        Jackets &amp; Sweatshirts
                      </a>
                    </li>
                    <li data-reactid="130">
                      <a
                        href="https://www.myntra.com/men-sports-accessories"
                        className="desktop-categoryLink"
                        data-reactid="131"
                      >
                        Sports Accessories
                      </a>
                    </li>
                    <li data-reactid="132">
                      <a
                        href="https://www.myntra.com/men-swimwear"
                        className="desktop-categoryLink"
                        data-reactid="133"
                      >
                        Swimwear
                      </a>
                    </li>
                    <div className="desktop-hrLine" data-reactid="134"></div>
                    <li data-reactid="135">
                      <a
                        href="https://www.myntra.com/gadgets"
                        className="desktop-categoryName"
                        data-reactid="136"
                        style={{ color: "#ee5f73" }}
                      >
                        Gadgets
                      </a>
                    </li>
                    <li data-reactid="137">
                      <a
                        href="https://www.myntra.com/smart-wearables"
                        className="desktop-categoryLink"
                        data-reactid="138"
                      >
                        Smart Wearables
                      </a>
                    </li>
                    <li data-reactid="139">
                      <a
                        href="https://www.myntra.com/smart-wearables?f=Categories%3AFitness%20Bands"
                        className="desktop-categoryLink"
                        data-reactid="140"
                      >
                        Fitness Gadgets
                      </a>
                    </li>
                    <li data-reactid="141">
                      <a
                        href="https://www.myntra.com/headphones"
                        className="desktop-categoryLink"
                        data-reactid="142"
                      >
                        Headphones
                      </a>
                    </li>
                    <li data-reactid="143">
                      <a
                        href="https://www.myntra.com/speakers"
                        className="desktop-categoryLink"
                        data-reactid="144"
                      >
                        Speakers
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="desktop-oddColumnContent" data-reactid="145">
                  <ul className="desktop-navBlock" data-reactid="146">
                    <li data-reactid="147">
                      <a
                        href="https://www.myntra.com/men-accessories"
                        className="desktop-categoryName"
                        data-reactid="148"
                        style={{ color: "#ee5f73" }}
                      >
                        Fashion Accessories
                      </a>
                    </li>
                    <li data-reactid="149">
                      <a
                        href="https://www.myntra.com/men-wallets"
                        className="desktop-categoryLink"
                        data-reactid="150"
                      >
                        Wallets
                      </a>
                    </li>
                    <li data-reactid="151">
                      <a
                        href="https://www.myntra.com/men-belts"
                        className="desktop-categoryLink"
                        data-reactid="152"
                      >
                        Belts
                      </a>
                    </li>
                    <li data-reactid="153">
                      <a
                        href="https://www.myntra.com/perfumes"
                        className="desktop-categoryLink"
                        data-reactid="154"
                      >
                        Perfumes &amp; Body Mists
                      </a>
                    </li>
                    <li data-reactid="155">
                      <a
                        href="https://www.myntra.com/trimmer"
                        className="desktop-categoryLink"
                        data-reactid="156"
                      >
                        Trimmers
                      </a>
                    </li>
                    <li data-reactid="157">
                      <a
                        href="https://www.myntra.com/deodorant"
                        className="desktop-categoryLink"
                        data-reactid="158"
                      >
                        Deodorants
                      </a>
                    </li>
                    <li data-reactid="159">
                      <a
                        href="https://www.myntra.com/men-belts-ties"
                        className="desktop-categoryLink"
                        data-reactid="160"
                      >
                        Ties, Cufflinks &amp; Pocket Squares
                      </a>
                    </li>
                    <li data-reactid="161">
                      <a
                        href="https://www.myntra.com/men-accessory-gift-set"
                        className="desktop-categoryLink"
                        data-reactid="162"
                      >
                        Accessory Gift Sets
                      </a>
                    </li>
                    <li data-reactid="163">
                      <a
                        href="https://www.myntra.com/men-caps"
                        className="desktop-categoryLink"
                        data-reactid="164"
                      >
                        Caps &amp; Hats
                      </a>
                    </li>
                    <li data-reactid="165">
                      <a
                        href="https://www.myntra.com/men-gloves-mufflers-scarves"
                        className="desktop-categoryLink"
                        data-reactid="166"
                      >
                        Mufflers, Scarves &amp; Gloves
                      </a>
                    </li>
                    <li data-reactid="167">
                      <a
                        href="https://www.myntra.com/mobile-phone-cases"
                        className="desktop-categoryLink"
                        data-reactid="168"
                      >
                        Phone Cases
                      </a>
                    </li>
                    <li data-reactid="169">
                      <a
                        href="https://www.myntra.com/men-jewellery"
                        className="desktop-categoryLink"
                        data-reactid="170"
                      >
                        Rings &amp; Wristwear
                      </a>
                    </li>
                    <li data-reactid="171">
                      <a
                        href="https://www.myntra.com/helmets"
                        className="desktop-categoryLink"
                        data-reactid="172"
                      >
                        Helmets
                      </a>
                    </li>
                    <div className="desktop-hrLine" data-reactid="173"></div>
                    <li data-reactid="174">
                      <a
                        href="https://www.myntra.com/men-bags-backpacks"
                        className="desktop-categoryName"
                        data-reactid="175"
                        style={{ color: "#ee5f73" }}
                      >
                        Bags &amp; Backpacks
                      </a>
                    </li>
                    <li data-reactid="176">
                      <a
                        href="https://www.myntra.com/trolley-bags"
                        className="desktop-categoryName"
                        data-reactid="177"
                        style={{ color: "#ee5f73" }}
                      >
                        Luggages &amp; Trolleys
                      </a>
                    </li>
                  </ul>
                </li>
              </div>
            </div>

            {/* <strong>Holy guacamole!</strong> Check this info. */}
            {/* </Popover.Body> */}
            {/* </Popover> */}
          </div>
        )}
      </Overlay>
    </div>
  );
}
