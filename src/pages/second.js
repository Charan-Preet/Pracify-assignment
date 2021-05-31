import React from "react";
import "tachyons";
import "./second.css";

export default function Second() {
  return (
    //   image
    <div>
      <div className="flex center w-100">
        <img
          className="center w-100 pointer"
          src="https://i.postimg.cc/MpTfwDQv/Screenshot-2021-05-31-Zeplin-Projects.png"
        />
      </div>
      {/* Jane doe */}
      <div class="flex flex-column center mt4 bg-white">
        <div class="w-25 pa3 center">
          <code>
            <img
              className="flex center"
              src="https://i.postimg.cc/rwNd5H2n/Group-86.png"
            />
          </code>
        </div>
        <div class="w-25 pa1 center">
          <code className="round-image flex center"></code>
        </div>
        <div class="w-25 pa0 center">
          <code className="title flex center">Jane Doe</code>
        </div>
        <div class="w-70 pa0 center tc">
          <code className="paragraph">
            Thank you for all the amazing produce and products you deliver each
            week… you make my life so easy an bring goodness into our family
            eating. I’ve been roasting a lot of brussel sprouts and
          </code>
        </div>
        <div class="w-20 center pa0 mt4">
          <code className="flex justify-center">
            <span className="dot-1 mr1"></span>
            <span className="dot mr1"></span>
            <span className="dot mr1"></span>
            <span className="dot mr1"></span>
          </code>
        </div>
      </div>

      {/* subscribe out newsletter */}
      <div>
        <div class="flex flex-column center bg-white w-100">
          <div class="w-25 pa3 mr2 center mt6 w-100 tc">
            <code
              className="title w-90"
              style={{
                fontSize: "40px",
              }}
            >
              Subscribe to Our Newsletter
            </code>
          </div>
          <div class="w-60 pa3 mr2 center">
            <code className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </code>
          </div>
          <div class="w-70 pa3 mr2 mt5 center">
            <code>
              <div class="flex justify-between w-70 center">
                <div class="w-60 pa2 flex center">
                  <code className="mail cursor">Enter your email address</code>
                </div>
                <div class="w-40 pa3">
                  <code className="tc">
                    <div className="submit-button pa3 pointer">Submit</div>
                  </code>
                </div>
              </div>
            </code>
          </div>
        </div>
      </div>

      {/* Read our Blog */}
      <div class="flex flex-column center bg-white center">
        <div class="w-25 pa3 mt6 flex center">
          <code className="center">
            <img
              className="center"
              src="https://i.postimg.cc/4dQmPgsY/Group-114.png"
            />
          </code>
        </div>
        <div className="w-25 pa3 mr2 center tc">
          <code className="title">Read Our Blog</code>
        </div>
        <div className="w-60 pa3 mr2 tc center">
          <code className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </code>
        </div>
        {/* cards */}

        <div className="flex justify-center">
          <div className="w-25 pa3 mr2">
            <code className="center pa1">
              <div class="flex flex-column">
                <div class="center w-100">
                  <code className="pa1">
                    <img
                      className="center"
                      src="https://i.postimg.cc/YCnKmPH7/eucalyptus-essential-oil-soap-green-background-zero-waste-natural-organic-bathroom-tools-80743-2766.jpg"
                    />
                  </code>
                </div>
                <div className="w-100 pa3 tc">
                  <code className="card-title">Blog Post One</code>
                </div>
                <div className="w-100 pa3 tc center">
                  <code className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                  </code>
                  <div
                    className="tc mt2 underline pointer"
                    style={{
                      textDecorationColor: "#00dbd0",
                      textDecorationThickness: "2px",
                      fontSize: "16px",
                      fontWeight: "normal",
                      fontStretch: "normal",
                      fontStyle: "normal",
                      lineHeight: "1.36",
                      letterSpacing: "normal",
                      textAlign: "center",
                      color: "#374b5c",
                    }}
                  >
                    Read More
                  </div>
                </div>
              </div>
            </code>
          </div>
          <div className="w-25 pa3 mr2">
            <code className="center pa1">
              <div class="flex flex-column">
                <div class="center w-100">
                  <code className="pa1">
                    <img
                      className="center"
                      src="https://i.postimg.cc/kXT4sq3R/containers-with-products-table-with-copy-space-23-2148366089-2x.jpg"
                    />
                  </code>
                </div>
                <div className="w-100 pa3 center tc">
                  <code className="card-title">Blog Post One</code>
                </div>
                <div className="w-100 pa3 tc">
                  <code className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                  </code>
                  <div
                    className="tc mt2 underline pointer"
                    style={{
                      textDecorationColor: "#00dbd0",
                      textDecorationThickness: "2px",
                      fontSize: "16px",
                      fontWeight: "normal",
                      fontStretch: "normal",
                      fontStyle: "normal",
                      lineHeight: "1.36",
                      letterSpacing: "normal",
                      textAlign: "center",
                      color: "#374b5c",
                    }}
                  >
                    Read More
                  </div>
                </div>
              </div>
            </code>
          </div>
          <div className="w-25 pa3 mr2">
            <code className="center pa1">
              <div class="flex flex-column">
                <div class="center w-100">
                  <code className="pa1">
                    <img
                      className="center"
                      src="https://i.postimg.cc/158hxQVq/potted-plant-near-cosmetics-bottles-jars-23-2147787938-2x.jpg"
                    />
                  </code>
                </div>
                <div className="w-100 pa3 tc">
                  <code className="card-title">Blog Post One</code>
                </div>
                <div className="w-100 pa3 tc">
                  <code className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                  </code>
                  <div
                    className="tc mt2 underline pointer"
                    style={{
                      textDecorationColor: "#00dbd0",
                      textDecorationThickness: "2px",
                      fontSize: "16px",
                      fontWeight: "normal",
                      fontStretch: "normal",
                      fontStyle: "normal",
                      lineHeight: "1.36",
                      letterSpacing: "normal",
                      textAlign: "center",
                      color: "#374b5c",
                    }}
                  >
                    Read More
                  </div>
                </div>
              </div>
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
