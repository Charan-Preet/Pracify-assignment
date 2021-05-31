import React from "react";
import "./footer.css";
import "tachyons";

export default function Footer() {
  return (
    <div className="tc-l bg-white cover">
      <div className="w-100 ph3 pv5">
        <div className="flex justify-between">
          <div className="w-50 pa3">
            <code>
              {/* footer images and text */}
              <div className="flex flex-column">
                <div className="w-100 pa3 mr2 center">
                  <code>
                    <img src="https://i.postimg.cc/wvTqWCwM/Group-225.png" />
                  </code>
                </div>
                <div className="w-100 pa3 mr2">
                  <code
                    style={{
                      fontSize: "14px",
                      fontWeight: "normal",
                      fontStretch: "normal",
                      fontStyle: "normal",
                      lineHeight: "1.79",
                      letterSpacing: "normal",
                      textAlign: "left",
                      color: "#ffffff",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor{" "}
                  </code>
                </div>
                <div className="w-100 pa3 mr2">
                  <code
                    style={{
                      fontSize: "14px",
                      fontWeight: "normal",
                      fontStretch: "normal",
                      fontStyle: "normal",
                      lineHeight: "1.79",
                      letterSpacing: "normal",
                      textAlign: "left",
                      color: "#ffffff",
                    }}
                  >
                    © Copyright 2020 Nature
                  </code>
                </div>
              </div>
            </code>
          </div>

          <div className="w-40 pa3">
            <code>
              <div className="flex flex-column">
                <div className="w-25 pa3 mr2 underline pointer">
                  <code
                    style={{
                      fontSize: "16px",
                      fontWeight: "bolder",
                      fontStretch: "normal",
                      fontStyle: "normal",
                      lineHeight: "1.79",
                      letterSpacing: "normal",
                      textAlign: "left",
                      color: "#ffffff",
                    }}
                  >
                    Information
                  </code>
                </div>
                <div class="w-100 pa3 mr2">
                  <code>
                    {/* navlinks */}
                    <div className="flex flex-column">
                      <div className="w-40 pa1 mr2 navlinks pointer">
                        <code>About US</code>
                      </div>
                      <div className="w-40 pa1 mr2 navlinks pointer">
                        <code>Contact Us</code>
                      </div>
                      <div className="w-40 pa1 mr2 navlinks pointer">
                        <code>Products</code>
                      </div>
                      <div className="w-40 pa1 mr2 navlinks pointer">
                        <code>Terms of Services</code>
                      </div>
                      <div className="w-40 pa1 navlinks pointer">
                        <code>About Us</code>
                      </div>
                    </div>
                  </code>
                </div>
              </div>
            </code>
          </div>
          {/* <div class="outline w-25 pa3">
            <code>3</code>
          </div> */}
        </div>
      </div>
    </div>
  );
}
