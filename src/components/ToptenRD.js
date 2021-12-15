import { React, useState, useEffect, useLayoutEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Items } from "./Items";
import { child, get, ref, onValue, off } from "firebase/database";
import { rdb } from "../firebase";
import "./css/Navbarcss.css";
const storing_arr = [];
const dis_arr = [];
export function ToptenRD(props) {
  const [max_pricerange, setPricerange_max] = useState("1001");
  const [min_pricerange, setPricerange_min] = useState("501");
  const [pricerange, setPricerange] = useState("1000");
  const [display_arr, setDisplay_arr] = useState([]);

  async function handleclick() {
    display_arr.forEach((doc) => {
      console.log(doc.link);
    });
  }
  useEffect(async () => {
    storing_arr.length = 0;
    console.log("inside async useeefect");
    await onValue(
      ref(rdb, `${props.gen}/${props.type}`),
      (snapshot) => {
        console.log(snapshot);
        snapshot.val().forEach((doc) => {
          storing_arr.push(doc);
          if (parseInt(pricerange) !== 3501) {
            if (
              parseInt(doc.price) <= parseInt(pricerange) &&
              parseInt(doc.price) >= parseInt(pricerange) - 500
            ) {
              // console.log(doc, " => ", doc.price);
              setDisplay_arr((oldarray) => [...oldarray, doc]);
            }
          } else if (parseInt(pricerange) === 3501) {
            if (parseInt(doc.price) >= parseInt(pricerange)) {
              // console.log(doc, " => ", doc.price);
              setDisplay_arr((oldarray) => [...oldarray, doc]);
            }
          }
          //   console.log(doc);
        });
        // ...
      },
      {
        onlyOnce: true,
      }
    );

    // await get(child(ref(rdb), `${props.gen}/${props.type}`))
    //   .then((snapshot) => {
    //     if (snapshot.exists()) {
    //       console.log(snapshot.val());
    //     } else {
    //       console.log("No data available");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    // console.log(storing_arr);
  }, []);

  useEffect(() => {
    console.log("inside pricerange useeffct");
    console.log(display_arr);

    storing_arr.forEach((doc) => {
      if (parseInt(pricerange) !== 3501) {
        if (
          parseInt(doc.price) <= parseInt(pricerange) &&
          parseInt(doc.price) >= parseInt(pricerange) - 500
        ) {
          // console.log(doc, " => ", doc.price);
          setDisplay_arr((oldarray) => [...oldarray, doc]);
        }
      } else if (parseInt(pricerange) === 3501) {
        console.log("inside condition");
        if (parseInt(doc.price) >= parseInt(pricerange)) {
          // console.log(doc, " => ", doc.price);
          setDisplay_arr((oldarray) => [...oldarray, doc]);
        }
      }
    });
  }, [pricerange]);

  function pricechangehandler(e) {
    e.preventDefault();
    setDisplay_arr([]);
    // setPricerange(e.target.value);
  }
  const selected = (e) => {
    console.log("inside select");
    setDisplay_arr([]);
    // e.preventDefault();
    if (e.target.checked) {
      setDisplay_arr([]);
      setPricerange(e.target.value);
      console.log(e.target.value, e.value);
    }
  };
  const selected_age = (e) => {
    e.preventDefault();
    if (e.target.checked) {
      console.log(e.target.value);
    }
  };
  // const q = query(collection(db, "cities"), where("capital", "==", true));
  // const querySnapshot = await getDocs(
  //   query(collection(db, props.type), where("price", "==", "<500"))
  // );
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.data());
  // });

  // for group or selected documnets
  // const q = query(collection(db, "cities"), where("capital", "==", true));

  // const querySnapshot = await getDocs(q);
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });

  // for single documnet
  // const docRef = doc(db, "jeans", "SF");
  // const docSnap = await getDoc(docRef);
  // if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //   } else {
  //     // doc.data() will be undefined in this case
  //     console.log("No such document!");
  //   }

  return (
    <div className="container_div">
      <h3 className="text-center">
        Top 10 {props.gen} {props.type}
      </h3>
      <div className="one">
        <div className="form-check">
          <h5>Price range</h5>
          <input
            className="form-check-input"
            type="radio"
            value="500"
            onClick={selected}
            name="priceList"
            id="flexCheckDefault1"
          />
          <label className="form-check-label" htmlfor="flexCheckDefault1">
            <span> 0-500</span>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="1000"
            name="priceList"
            onClick={selected}
            id="flexCheckDefault2"
            defaultChecked
          />
          <label className="form-check-label" htmlfor="flexCheckDefault2">
            <span>500-1000</span>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="1500"
            name="priceList"
            onClick={selected}
            id="flexCheckDefault3"
          />
          <label className="form-check-label" htmlfor="flexCheckDefault3">
            <span>1000-1500</span>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="2000"
            name="priceList"
            onClick={selected}
            id="flexCheckDefault4"
          />
          <label className="form-check-label" htmlfor="flexCheckDefault4">
            <span>1500-2000</span>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="2500"
            name="priceList"
            onClick={selected}
            id="flexCheckDefault5"
          />
          <label className="form-check-label" htmlfor="flexCheckDefault5">
            <span>2000-2500</span>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="3500"
            name="priceList"
            onClick={selected}
            id="flexCheckDefault6"
          />
          <label className="form-check-label" htmlfor="flexCheckDefault6">
            <span>2500-3500</span>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="3501"
            name="priceList"
            onClick={selected}
            id="flexCheckDefault7"
          />
          <label className="form-check-label" htmlfor="flexCheckDefault7">
            <span>3500+</span>
          </label>
        </div>
        <div>
          <h5>Age</h5>
          <div>
            <input
              className="form-check-input"
              type="radio"
              value="8-16"
              onClick={selected_age}
              name="age_range"
              id="react-id-1"
            />
            <label className="form-check-label" htmlfor="react-id-1">
              <span> 8-16</span>
            </label>
          </div>{" "}
          <div>
            <input
              className="form-check-input"
              type="radio"
              value="16-24"
              onClick={selected_age}
              name="age_range"
              id="react-id-2"
              defaultChecked
            />
            <label className="form-check-label" htmlfor="react-id-2">
              <span>16-24</span>
            </label>
          </div>
          <div>
            <input
              className="form-check-input"
              type="radio"
              value="24-32"
              onClick={selected_age}
              name="age_range"
              id="react-id-3"
            />
            <label className="form-check-label" htmlfor="react-id-3">
              <span> 24-32</span>
            </label>
          </div>
          <div>
            <input
              className="form-check-input"
              type="radio"
              value="32-40"
              onClick={selected_age}
              name="age_range"
              id="react-id-4"
            />
            <label className="form-check-label" htmlfor="react-id-4">
              <span>32-40</span>
            </label>
          </div>
        </div>
        <Col xs={12} md={6} lg={5}>
          <div style={{ display: "inline" }}>
            {/* <label htmlfor="customRange1" className="form-label">
            Price Range
          </label>
          <input
            type="range"
            className="form-range"
            min="501"
            max="3501"
            step="500"
            id="customRange1"
            onChange={pricechangehandler}
          ></input> */}
          </div>
          {/* <div style={{ display: "inline" }}>
            <label htmlfor="customRange2" className="form-label">
              Age
            </label>
            <input
              type="range"
              className="form-range"
              min="0"
              max="5"
              step="0.5"
              id="customRange2"
            ></input>
          </div> */}
          {/* <Button onClick={handleclick}>click me</Button> */}
        </Col>
      </div>
      <div className="two">
        {/* <span id="react id 12">{display_arr.length}</span> */}
        {display_arr.length > 0 ? <Items array={display_arr} /> : null}
      </div>
    </div>
  );
}
