import React, { Component } from 'react'




export default class Homeslider extends Component {


  // componentDidMount () {

  //   function Super(){
  //     let sap= document.getElementById("myImageId");
  //         sap.src="./images/test3.jfif";
  //   }

  //   $(window).ready(Super);
    
   //

  // } 

    render() {
        return (
         <div>
<div className="carousel slide" data-bs-ride="carousel" id="carouselExampleIndicators">
        <div className="carousel-indicators">
          <button aria-label="Slide 1" className="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators" type="button"></button> {/* <button aria-label="Slide 4" data-bs-slide-to="3" data-bs-target="#carouselExampleIndicators" type="button"></button>*/}
        </div>
        <div className="carousel-inner">
          <div  className="carousel-item active">
            <a href="https://discord.gg/2kA86Q8CnU">
            <img    className="d-block w-100 " id="img1" src="./images/hl1.png" />
            <img  className="d-block w-100 " id="img2" src="./images/hm1.png" />
            </a>

        



            <div className="carousel-caption">
              {/* <h1 className="animated bounceInRight" style={{animationDelay: "1s" ,color:"black", fontSize: "49px"}}>Edumoon</h1>
              <p className="animated bounceInLeft " style={{animationDelay: "2s" ,color:"blue"}}><span>One stop solutions to students</span></p>
              <p className="animated bounceInRight" style={{animationDelay: "3s"}}><a href="#">Learn More</a></p> */}
            </div>
          </div>
          <div className="carousel-item">
           
            {/* <p alt="..." className="d-block w-100" style={{background: "rgb(7, 0, 122)",background: "linear-gradient( 210deg, rgba(7, 0, 122, 1) 2%, rgba(8, 8, 134, 1) 35%, rgba(0, 145, 175, 1) 100% )"}}></p> */}
          
              {/* <h1 className="animated bounceInRight kite" style={{animationDelay: "1s"}}> Crack EAMCET in 30 Days</h1> */}
              {/* <div className="text-white mt-md-3 animated bounceInLeft" style={{animationDelay: "2s",fontSize: "calc(100% + 1.1vw)"}}> Still in search of a better crash course for EAMCET? EduMoon is providing the 30-days EAMCET crash course at just Rs.1999/- and the course instructors are toppers from AU.
              </div>
             <p className="animated bounceInLeft d-none d-md-block" style={{animationDelay: "2s"}}></p>
              <p className="animated bounceInRight" style={{animationDelay:"3s"}}><a href="#">Learn More</a></p> */}
               <a href="#/tutions">
            <img    className="d-block w-100 " id="img1" src="./images/hl2.png" />
            <img  className="d-block w-100 " id="img2" src="./images/hm2.png" />
            </a>
            </div>
         
       
          <div className="carousel-item">
            {/* <img alt="..." className="d-block w-100" src="./images/carousel4.jpg" />
            <div className="carousel-caption">
              <h1 className="animated bounceInRight" style={{animationDelay:"1s"}}></h1>
              <p className="animated bounceInLeft d-none d-md-block" style={{animationDelay: "2s"}}></p> */}

<a href="#/dbms">
            <img    className="d-block w-100 " id="img1" src="./images/hl3.png" />
            <img  className="d-block w-100 " id="img2" src="./images/hm3.png" />
            </a>
    
            {/* </div> */}
          </div>
               
          {/* <div className="carousel-item">
            <img  className="d-block w-100" src="./images/samuelSusan.jpeg" />
            <div className="carousel-caption">
              <h5 className="animated bounceInRight" style={{animationDelay: "1s"}}></h5>
              <p className="animated bounceInLeft d-none d-md-block" style={{animationDelay: "2s"}}></p>
              <p className="animated bounceInRight" style={{animationDelay: "3s"}}><a href="#">view More</a></p>
            </div>
          </div> */}
        </div><button className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" className="carousel-control-prev-icon"></span> <span className="visually-hidden">Previous</span></button> <button className="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" className="carousel-control-next-icon"></span> <span className="visually-hidden">Next</span></button>
      </div>



     

         </div>
        );
    }
}
