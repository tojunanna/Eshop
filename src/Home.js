import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">

                <img src="./Images/1.jpg" alt="" className="home__image" />

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag"
                        price={11.96}
                        rating={5}
                        image="./Images/2.jpg"
                    />
                    <Product
                        id="49538094"
                        title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
                        price={239.0}
                        rating={4}
                        image="./Images/3.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="All the Light we Cannot See"
                        price={199.99}
                        rating={3}
                        image="./Images/4.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation)"
                        price={98.99}
                        rating={5}
                        image="./Images/Images/5.jpg"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro "
                        price={598.99}
                        rating={4}
                        image="./Images/Images/6.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="./Images/7.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;