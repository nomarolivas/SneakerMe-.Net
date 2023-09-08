import React, { Component } from 'react'; //This was here before


export class About extends Component{
    static displayName = About.name;

    render(){

        return(
            <div classname="aboutUsPage">
                <div className='divider'>
                    <h1> </h1>
                </div>

                <div className="pageTitle">
                    <h2 className="pageTitleHistory">Our Mission</h2>


                </div>

                <div className="coverPic">
                    <img src={require('./images/sneakerPile.jpeg')} alt="Pile of sneakers" width="100%" />
                </div>

                <div className='dividerForPara'>
                    <h1> </h1>
                </div>


                <img src={require('./images/sneakerShelf.webp')} alt="Nike Dunk Low Medium Olive" className="historyPic" />


                <h2 className="historyBio">Our History</h2>

                <p className="historyBioPara">Founded in 2000 by Nomar Olivas and Marina Villasenor, SneakerMe was created through a shared passion for fashion, design, art, and music. Through this passion for culture the collective vision was to bring world-renowned names, emerging designers and unearthing brands from all corners of the globe. 23 years later, SneakerMe is now a leading sneaker destination, offering its global community unique experiences via the online store.</p>

                <div className='dividerForParaBottom'>
                    <h1> </h1>
                </div>

                <img src={require('./images/sneakerStore.webp')} alt="Nike Dunk Low Medium Olive" className="shoeShelf" />

                <h2 className="offerBio">What We Offer</h2>

                <p className="offerBioPara">SneakerMe, the leading online destination for sneaker enthusiasts, offers an unparalleled shopping experience when it comes to purchasing the latest and most sought-after sneakers. With a meticulous curation of top-tier brands and exclusive releases, SneakerMe provides a wide selection that caters to every individual's style and preference. The user-friendly interface and intuitive navigation make browsing through their extensive catalog a breeze.</p>

                <div className='dividerForPara'>
                    <h1> </h1>
                </div>

                <div className='footer'> Nomar Olivas @ 2023 </div>

            </div>




        )


    }
}