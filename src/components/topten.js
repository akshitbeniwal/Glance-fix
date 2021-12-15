import { React, useState, useEffect, useLayoutEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Items } from "./Items";
import {
  collection,
  doc,
  getFirestore,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

const storing_arr = [];
const dis_arr = [];
export function Topten(props) {
  const [pricerange, setPricerange] = useState("501");
  const [display_arr, setDisplay_arr] = useState([]);

  async function handleclick() {
    display_arr.forEach((doc) => {
      console.log(doc.link);
    });
    console.log(display_arr[0].link, pricerange, storing_arr);
  }
  useEffect(async () => {
    const querySnapshot = await getDocs(collection(db, props.type));
    querySnapshot.forEach((doc) => {
      storing_arr.push(doc.data());
      if (parseInt(doc.data().price) <= parseInt(pricerange)) {
        console.log(doc.id, " => ", doc.data().price);
        setDisplay_arr((oldarray) => [...oldarray, doc.data()]);
      }
      // doc.data() is never undefined for query doc snapshots
    });
    // console.log(storing_arr);
  }, []);

  useEffect(() => {
    console.log(display_arr);
    storing_arr.forEach((doc) => {
      if (parseInt(doc.price) < parseInt(pricerange)) {
        setDisplay_arr((oldarray) => [...oldarray, doc]);
      }
    });
  }, [pricerange]);

  function pricechangehandler(e) {
    e.preventDefault();
    setDisplay_arr([]);
    setPricerange(e.target.value);
  }
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
    <div>
      <h3>
        Top 10 {props.gen} {props.type}
      </h3>

      <Col xs={12} md={6} lg={5}>
        <div style={{ display: "inline" }}>
          <label htmlfor="customRange1" className="form-label">
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
          ></input>
        </div>
        <div style={{ display: "inline" }}>
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
        </div>
        <Button onClick={handleclick}>click me</Button>
      </Col>

      <span id="react id 12">{display_arr.length}</span>
      {display_arr.length > 0 ? <Items array={display_arr} /> : null}
    </div>
  );
}
