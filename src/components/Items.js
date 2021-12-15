import React from "react";
import { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
export function Items(props) {
  useEffect(() => {
    console.log(props.array, "in here");
  }, []);

  return (
    <div>
      {props.array.map((doc, index) => {
        return (
          <Card key={index} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={doc.photo} />
            <Card.Body>
              <Card.Title>{doc.title}</Card.Title>
              <Card.Text>{doc.description}</Card.Text>
              {/* <Button className="text-light"> */}
              <Card.Link href={doc.link}> Expand </Card.Link>
              {/* </Button> */}
            </Card.Body>
          </Card>
          //   <li key={index}>
          //     {doc.link}
          //     <span>{doc.description}</span>
          //     <img src={doc.photo} />{" "}
          //   </li>
        );
      })}
    </div>
  );
}
