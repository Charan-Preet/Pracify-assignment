import React from "react";
import "./App.css";
import "tachyons";

export default function App() {
  return (
    <div>
      {/* // Navbar */}
      <div className=" flex flex-wrap justify-between">
        {/* images and organic text */}
        <div className="pa3 mr2 mt1">
          <div className="flex">
            <div className="w-50 pa1 ">
              <img src="https://i.postimg.cc/bJpZV6Vd/Group-220.png" />
            </div>
            <div className=" w-50 pa1 mr2 organic">organic</div>
          </div>
        </div>
        {/* Navlinks */}
        <div className="pa3 mt1">
          <div className="nav-link flex justify-end">
            <div
              className="mr3 underline pointer"
              style={{ textDecorationColor: "#00dbd0",
              textDecorationThickness:"3px"
            }}
            >
              Home
            </div>
            <div className="mr3 pointer">Products</div>
            <div className="mr3 pointer">Blog</div>
            <div className="mr3 pointer">About Us</div>
            <div className="mr3  pointer contact">Contact</div>
          </div>
        </div>
      </div>
      {/* body */}

      <div class="mw9 mt4 center ph3-ns">
        <div class="cf ph2-ns">
          <div class="fl w-100 w-50-ns pa2">
            <div class=" pv4">
              <div className="Healthy-life-with tj">Healthy life with</div>
              <div className="Nature-Organic tj">Nature Organic</div>
              <div className="paragraph tj">
                Vegetables are the edible parts of a plant that is used in
                cooking or can be eaten now
              </div>

              <button
                className="w-50 pointer"
                style={{
                  textDecoration: "none",
                  border: "none",
                  width: "220px",
                  height: "54px",
                  margin: "0px 344px 115px 0",
                  padding: "14px 64px 16px 48px",
                  borderRadius: "10px",
                  backgroundColor: "#00dbd0",
                }}
              >
                <div
                  className="pointer tc"
                  style={{
                    color: "#ffffff",
                    width: "108px",
                    fontFamily: "LibreBaskerville",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  Explore Now
                </div>
              </button>
            </div>
          </div>
          <div class="fl w-100 w-50-ns pa2">
            <div class="">
              <div className="flower-image container">
                <div>
                  <img src="https://i.postimg.cc/Vvr8MtwR/image.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* welcome to nature section */}

      <div className="flex flex-column center w-90">
        <div className="pa3 center">
          <img
            className="center"
            src="https://i.postimg.cc/4dQmPgsY/Group-114.png"
          />
        </div>
        <div className="w-90 tc center Welcome-to-Nature pa0">
          <h2>Welcome to Nature</h2>
        </div>
        <div className="pa0 w-40 center tc">
          <div
            className="tc center"
            style={{
              fontSize: "16px",
              fontWeight: "normal",
              fontStretch: "normal",
              fontStyle: "normal",
              lineHeight: "1.31",
              letterSpacing: "normal",
              textAlign: "center",
              color: "#374b5c",
            }}
          >
            Lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-sed-do-eiusmod-tempor-incididunt-ut-labore-et-dolore-magna-aliqua{" "}
          </div>
        </div>
          {/* card's */}
        <div className="pa3 mr2 center w-80">
          <div class="flex justify-center">
            <div className="w-25 pa1 center pointer">
              <img src="https://i.postimg.cc/0r79ZGq9/Group-207.png" />
            </div>
            <div className="w-25 pa1 center pointer">
              <img src="https://i.postimg.cc/9wPVM2BD/Group-205.png" />
            </div>
            <div className="w-25 pa1 center pointer">
              <img src="https://i.postimg.cc/0r79ZGq9/Group-207.png" />
            </div>
            <div className="w-25 pa1 center pointer">
              <img src="https://i.postimg.cc/0r79ZGq9/Group-207.png" />
            </div>
          </div>
        </div>
      </div>
      
      <second />
    </div>
  );
}
