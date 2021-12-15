import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Row, Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { useAuth } from "../contexts/Authcontext";
import { auth } from "../firebase";
import { RecaptchaVerifier } from "firebase/auth";

export function Signup() {
  const [userOtp, setUserOtp] = useState();
  const [user_number, setUser_number] = useState();
  const [errorin, setErrorin] = useState();
  let { login, logout } = useAuth();
  const configurecap = () => {
    console.log("hello");
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          console.log(response);
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
        defaultCountry: "IN",
      },
      auth
    );
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();
    configurecap();
    let phone_number = "+91" + user_number;
    if (phone_number.substring(0, 3) !== "+91") {
      let phone_number = "+91" + user_number;
    }

    let appVerifier = window.recaptchaVerifier;
    console.log(phone_number);
    const sendotp = login(auth, phone_number, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        setErrorin("OTP Sent!!");
        // ...
        console.log("otp sent");
      })
      .catch((error) => {
        console.log(error);
        setErrorin("Try Again please....");
        console.log("otp not sent ");
        //  window.location.reload(true);
      });
  };

  const onSubmitOtp = (e) => {
    e.preventDefault();
    console.log(userOtp);
    if (userOtp !== undefined) {
      window.confirmationResult
        .confirm(userOtp)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          console.log(error);
        });

      console.log(userOtp);
    }
  };
  const onclickSignout = () => {
    try {
      const signed_out = logout();
    } catch (error) {
      console.log(error);
    }
  };
  //   const resetcaptcha = () => {
  //     // const widgetId = "sign-in-button";
  //     window.recaptchaVerifier.render().then(function (widgetId) {
  //       grecaptcha.reset(widgetId);
  //     });
  //   };
  return (
    <div>
      <Container fluid="sm" className="mt-3">
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={5}>
            <h2 className="mb-3">Enter Phone Number to Sign in</h2>
            <Form className="form">
              <div id="sign-in-button"></div>
              <Form.Group>
                <Form.Control
                  type="number"
                  min="1"
                  max="5"
                  name="mobile"
                  placeholder="Mobile Number"
                  onChange={(e) => {
                    setUser_number(e.target.value);
                  }}
                  required
                />
              </Form.Group>
              <Button onClick={onSignInSubmit}>submit</Button>
            </Form>
            <span>{errorin}</span>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={5}>
            <h2 className="mb-3">Enter OTP</h2>
            <Form className="form">
              <Form.Group>
                <Form.Control
                  id="otp"
                  type="number"
                  name="otp"
                  placeholder="OTP"
                  required
                  onChange={(e) => {
                    setUserOtp(e.target.value);
                  }}
                />
              </Form.Group>

              <Button onClick={onSubmitOtp}>submit otp</Button>
              {/* <input disabled value={errorin}></input> */}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
