import React, { Component } from 'react'; //This was here before
// import React, { useState } from "react";
// import SimpleImageSlider from "react-simple-image-slider";

// const sliderImages = [
//     {
//        url: 'https://images.unsplash.com/photo-1669205073423-5da5a5280572?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
//     },
//     {
//         url: "https://images.unsplash.com/photo-1552346154-7841f684d259?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     },
//     {
//         url: "https://images.unsplash.com/photo-1530202218-5a52c6d42753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     },
//     {
//         url: "https://images.unsplash.com/photo-1513135404525-778c503bbd0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
//     },
//     {
//         url: "https://images.unsplash.com/photo-1604852116498-d442170c1738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     },
//     {
//         url: "https://images.unsplash.com/photo-1622831617330-bc799d6236b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     },
//     {
//         url: "https://images.unsplash.com/photo-1678266622924-c7c38ddc25e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
//     },
//  ];



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

          {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            
                            
                            <img src={require('./images/stockPic2.jpeg')} alt="Stock pic 2" height={"600"} width={"100%"}></img>
                            
                            
                        <div class="carousel-item ">
                            <img src={require('./images/stockPic2.jpeg')} alt="Stock pic 2"></img>
                        </div>
                        <div class="carousel-item">
                            <img src={require('./images/stockPic3.jpeg')} alt="Stock pic 3"></img>
                        </div>
                        <div class="carousel-item">
                            <img src={require('./images/stockPic4.jpeg')} alt="Stock pic 4"></img>
                        </div>
                        <div class="carousel-item">
                            <img src={require('./images/stockPic5.jpeg')} alt="Stock pic 5"></img>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only"></span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only"></span>
                    </a>
            </div>
            </div> */}

            

          <div className='latestReleases'>
              <h1> Latest Releases </h1>
          </div>

          <div className="row">

          <div className="column">
          <img src={require('./images/Jordan-1-L-F.webp')} alt="Air Jordan 1 Lost & Found" width="250" height="150"/>
             <h3>Air Jordan 1</h3>
             <h3>1 Lost & Found</h3>
             <p>$200</p>
             <button className='addToCart'>Add to cart</button>
             

          </div>

          <div className="column">
          <img src={require('./images/Air-Jordan-4-Retro-SB-Pine-Green-Product.webp')} alt="Air Jordan 4 SB Pine Green" width="230" height="150"/>
             <h3>Air Jordan 4 SB Pine Green </h3>
             <p>$225</p>
             <button className='addToCart'>Add to cart</button>
             

          </div>

          <div className="column">

              <img src={require('./images/Yeezy-750.jpeg')} alt="Yeezy 750 Grey Gum" width="300" height="150"/>
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


// function Slider() {
//     $(".slider #1").fadeIn("fade, 500");
//     $(".slider #1").delay(5500).hide("slide", { direction: 'left' }, 500);

//     var sc = $(".slider img").size();
//     var count = 2;

//     setInterval(function (){
//         $(".slider #" + count).show("slide",{direction:'right'}, 500);
//         $(".slider #" + count).delay(5500).hide("slide", {direction:'left'}, 500);

//         if(count == sc){
//             count = 1;
//         }else{
//             count = count + 1;
//           }
//         }, 6500);
//     }
