import React from 'react'
import "./Home.css";
import Product from './Product';


{ /*
SwiperCore.use([ Navigation, Pagination, Scrollbar, Ally]);


const data = [
{
 id : 1,
 username:'hi hi ',
 testimonial:'hiiiiiii' 

},
{
    id : 2,
    username:'hi hi ',
    testimonial:'hiiiiiii' 
   
   },
   {
    id : 3,
    username:'hi hi ',
    testimonial:'hiiiiiii' 
   
   },
   {
    id : 4,
    username:'hi hi ',
    testimonial:'hiiiiiii' 
   
   }
];
*/ }
function Home() {
    return (
        <div className="home">
            <div className="home_container">
         
           {/* <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
   { data.map( user => (
      <SwiperSlide key={user.id } className="slide">
      <div  className="slide-content">
      <div className="user-image"></div>
          <img src="amazon2.png" alt=""/>

      </div>



      </SwiperSlide>


   ))}
    </Swiper> */}

           <div className="home_row">
           
           
           <Product 
               title='Upgrade your home'
               price={10000} 
               image='amazon1.PNG'
               rating={5}
           />
         
          
           <Product

           title=' Pay | Secure your car & bike'
           price={10000} 
           image='amazon2.PNG'
           rating={5}
           />
         
           <Product

          title='Top picks for your home'
          price={10000} 
          image='amazon3.PNG'
          rating={5}  
          />
       
        <Product

          title=' picks for your Knowledge'
          price={10000} 
          image='amazon4.PNG'
          rating={5}
        />

     
          
            {/* product */}
               {/* product */}
               {/* product */}
               {/* product */}
           </div>
           <div className="home_row">
       
           <Product
               title=' Style for Women | Up to 70% off'
               price={10000} 
               image='amazon5.PNG'
               rating={5}

           />
           
           <Product
               title=' Everyday essentials'
               price={10000} 
               image='amazon6.PNG'
               rating={5}
           />
           
           <Product
                title='Home essentials | Amazon Brands & more'
               price={10000} 
               image='amazon7.PNG'
               rating={5}
           />
           
             <Product
                title='Amazon Brands & more'
               price={10000} 
               image='amazon8.PNG'
               rating={5}
           />
       
          
           
                {/* product */}
                {/* product */}
                {/* product */}
                {/* product */}
           </div>
           <div className="home_row">
          
           <Product
               title='For the perfect birthday celebration'
               price={10000} 
               image='amazon10.PNG'
               rating={5}

           />
           
           <Product
               title='Up to 50% off | Refurbished mobiles'
               price={10000} 
               image='amazon11.PNG'
               rating={5}

           />
          
           
            <Product
               title=' Videogames'
               price={10000} 
               image='amazon12.PNG'
               rating={5}

           />
            
            
                {/* product */}
                
           </div>


         </div>
        </div>
    )
}

export default Home
