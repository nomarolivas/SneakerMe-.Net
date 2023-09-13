import React, { Component } from 'react'; //This was here before


export class Sneakers extends Component{
    static displayName = Sneakers.name;

    render(){

        return(
            <div className="shoesPage">
                <div className='divider'>
                    

                </div>

                <div className="pageTitle">
                    <h2 className="pageTitleShoe">Sneakers</h2>
                    <h4 className="pageTitleShoeDesc">Nike Dunks Air Jordan 4 Air Jordan 1</h4>
                </div>

                <div className="row">

                    <div className="column">
                        <img src={require('./images/Nike_Dunk_grey.webp')} alt="Nike Dunk Low Grey Fog" width="250" height="150" />
                        <h3>Nike Dunk Low Grey Fog</h3>
                        <p>$100</p>
                        <button className='addToCart'>Add to cart</button>

                    </div>

                    <div className="column">
                        <img src={require('./images/Nike_OW_Dunk.jpeg')} alt="Off-White Nike Dunk Low" width="250" height="150" />

                        <h3>Nike Dunk Low Team Red </h3>
                        <p>$130</p>
                        <button className='addToCart'>Add to cart</button>


                    </div>

                    <div className="column">
                        <img src={require('./images/Nike_dunk_green.webp')} alt="Nike Dunk Low Medium Olive" width="250" height="150" />
                        <h3>Nike Dunk Low  Olive</h3>
                        <p>$100</p>
                        <button className='addToCart'>Add to cart</button>

                    </div>

                    <div className="column">
                        <img src={require('./images/Air-Jordan-4-Retro-SB-Pine-Green-Product.webp')} alt="Air Jordan 4 SB Pine Green" width="180" height="120" />
                        <h3>Air Jordan 4 SB Pine Green </h3>
                        <p>$225</p>
                        <button className='addToCart'>Add to cart</button>

                    </div>

                    <div className="column">
                        <img src={require('./images/jordan_4_amm.webp')} alt="A Ma Maniére x Air Jordan 4" width="200" height="120" />
                        <h3>A Ma Maniére x Air Jordan 4 </h3>
                        <p>$225</p>
                        <button className='addToCart'>Add to cart</button>

                    </div>

                    <div className="column">
                        <img src={require('./images/Jordan_4_Oreo.webp')} alt="Air Jordan 4 Oreo" width="200" height="120" />
                        <h3>Air Jordan 4 Cream Grey Oreo</h3>
                        <p>$200</p>
                        <button className='addToCart'>Add to cart</button>

                    </div>

                    <div className="column">
                        <img src={require('./images/Jordan_1_OB.webp')} alt="Air Jordan 1 Obsidian" width="200" height="120" />
                        <h3>Air Jordan 1 Obsidian</h3>
                        <p>$180</p>
                        <button className='addToCart'>Add to cart</button>

                    </div>

                    <div className="column">
                        <img src={require('./images/Jordan-1-L-F.webp')} alt="Air Jordan 1 Lost & Found" width="200" height="120" />
                        <h3>Air Jordan 1 Lost & Found</h3>
                        <p>$200</p>
                        <button className='addToCart'>Add to cart</button>

                    </div>

                    <div className="column">
                        <img src={require('./images/Jordan_1_BL.webp')} alt="Air Jordan 1 Bloodline" width="200" height="120" />
                        <h3>Air Jordan 1 Bloodline</h3>
                        <p>$180</p>
                        <button className='addToCart'>Add to cart</button>

                    </div>


                </div>

                <div className='footer'> Nomar Olivas @ 2023 </div>

            </div>




        );
    }

}