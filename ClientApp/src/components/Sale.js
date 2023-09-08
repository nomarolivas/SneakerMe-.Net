import React, { Component } from 'react'; //This was here before


export class Sale extends Component{
    static displayName = Sale.name;

    render(){

        return (
            <div className="salePage">

                <div className='divider'>
                    <h1> </h1>

                </div>

                <div className="pageTitle">
                    <h2 className="salePageTitle">Sale</h2>
                    <h4 className="salePageDesc"> Items are discounted for a limited time. Get them before they're gone!</h4>
                </div>

                <div className="row">

                    <div className="column">

                        <img src={require('./images/adidas-Yeezy-Boost-350-V2-Cream.webp')} alt="Yeezy 350 Cream" width="280" height="200" />
                        <h3>Adidas Yeezy 350 Cream</h3>
                        <strike className="salePrice" >$220</strike>
                        <p>$120</p>
                        <button className='addToCart'>Add to cart</button>
                    </div>

                    <div className="column">

                        <img src={require('./images/Adidas-Yeezy-500-Blush.webp')} alt="Yeezy 500 Blush" width="300" height="200" />
                        <h3>Adidas Yeezy 500 Blush</h3>
                        <strike className="salePrice">$200</strike>
                        <p>$100</p>
                        <button className='addToCart'>Add to cart</button>
                    </div>

                    <div className="column">

                        <img src={require('./images/Yeezy-750.jpeg')} alt="Yeezy 750 Grey Gum" width="350" height="200" />
                        <h3>Adidas Yeezy 750 Grey Gum</h3>
                        <strike className="salePrice">$300</strike>
                        <p>$220</p>
                        <button className='addToCart'>Add to cart</button>
                    </div>

                    <div className="column">

                        <img src={require('./images/Yeezy-Slide-Bone.webp')} alt="Yeezy Slide Pure" width="300" height="200" />
                        <h3>Adidas Yeezy Slide Pure</h3>
                        <strike className="salePrice">$120</strike>
                        <p>$80</p>
                        <button className='addToCart'>Sold Out</button>
                    </div>

                    <div className="column">

                        <img src={require('./images/supreme_af1.jpeg')} alt="Supreme x Nike Air Force 1" width="300" height="200" />
                        <h3>Supreme x Nike Air Force 1</h3>
                        <strike className="salePrice">$150</strike>
                        <p>$100</p>
                        <button className='addToCart'>Sold Out</button>
                    </div>

                </div>

                <div className='footer'> Nomar Olivas @ 2023 </div>


            </div>  

        );

    }
}