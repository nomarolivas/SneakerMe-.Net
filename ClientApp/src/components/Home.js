import React, { Component } from 'react'; 

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div className="homePage">
                <div className='divider'>
                    <h1> </h1>
                </div>
                <div className="pageTitle">

                </div>

                <div className='dividerForPara'>
                    <h1> </h1>
                </div>

                <img src={require('./images/stockPic5.jpeg')} alt="Stock pic 2" height={"50%"} width={"100%"}></img>

                <div className='latestReleases'>
                    <h1> Latest Releases </h1>
                </div>

                <div className="row">

                    <div className="column">
                        <img src={require('./images/Jordan-1-L-F.webp')} alt="Air Jordan 1 Lost & Found" width="250" height="150" />
                        <h3>Air Jordan 1</h3>
                        <h3>1 Lost & Found</h3>
                        <p>$200</p>
                        <button className='addToCart'>Add to cart</button>


                    </div>

                    <div className="column">
                        <img src={require('./images/Air-Jordan-4-Retro-SB-Pine-Green-Product.webp')} alt="Air Jordan 4 SB Pine Green" width="230" height="150" />
                        <h3>Air Jordan 4 SB Pine Green </h3>
                        <p>$225</p>
                        <button className='addToCart'>Add to cart</button>


                    </div>

                    <div className="column">

                        <img src={require('./images/Yeezy-750.jpeg')} alt="Yeezy 750 Grey Gum" width="300" height="150" />
                        <h3>Adidas Yeezy 750 Grey Gum</h3>

                        <p>$220</p>
                        <button className='addToCart'>Add to cart</button>

                    </div>
                </div>

                <div className='footer'> Nomar Olivas @ 2023 </div>

            </div>

        );
    }
}



