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
    // const [imageNum, setImageNum] = useState(1);
    return (
      // <div>
      //   <h1>Hello, world!</h1>
      //   <p>Welcome to your new single-page application, built with:</p>
      //   <ul>
      //     <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
      //     <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
      //     <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
      //   </ul>
      //   <p>To help you get started, we have also set up:</p>
      //   <ul>
      //     <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
      //     <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
      //     <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
      //   </ul>
      //   <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
      // </div>
      <div className="homePage">

      <div className='divider'>
          <h1> </h1>
          </div>

          <div className="pageTitle">

          

          </div>

      <div className="image-slider">
          

      {/* <SimpleImageSlider
      style={{ margin: '0 auto', padding: '0', width: '100% auto'}}
          width= {1070} 
          height={600}
          navMargin={0}
          images={sliderImages}
          showBullets={true}
         

          showNavs={true}
          autoPlay={true} 
          onStartSlide = {(index, length) => {
              setImageNum(index);
          }}
          autoPlayDelay = {4}
                  
      /> */}

      </div>  

          <div className='dividerForPara'>
              <h1> </h1>
          </div>

          <div className='latestReleases'>
              <h1> Latest Releases </h1>
          </div>

          <div className="row">

          <div className="column">
          <img src={require('./images/Jordan-1-L-F.webp')} alt="Air Jordan 1 Lost & Found" width="300" height="200"/>
             <h3>Air Jordan 1 Lost & Found</h3>
             <p>$200</p>
             

          </div>

          <div className="column">
          <img src={require('./images/Air-Jordan-4-Retro-SB-Pine-Green-Product.webp')} alt="Air Jordan 4 SB Pine Green" width="300" height="200"/>
             <h3>Air Jordan 4 SB Pine Green </h3>
             <p>$225</p>
             

          </div>

          <div className="column">

              <img src={require('./images/Yeezy-750.jpeg')} alt="Yeezy 750 Grey Gum" width="350" height="200"/>
              <h3>Adidas Yeezy 750 Grey Gum</h3>
              
              <p>$220</p>
              
          </div>
      </div>

      <div className='footer'> Nomar Olivas @ 2023 </div> 

  </div>


    );
  }
}
