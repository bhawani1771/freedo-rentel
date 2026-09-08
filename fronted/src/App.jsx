import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './component/navbar';
import { HeroBanner } from './component/banner';
import { Card } from './component/card';
import { Review } from './component/review';
import { StatsSection } from './component/statesection';
import { FaqSection } from './component/faq';
import { Footer } from './component/footer';
import { About } from '../pages/about';
import { Blog } from '../pages/blog';
import { Revieww } from '../pages/review';
import { Form } from './component/form';
import { Login } from './component/login';
// import { Userdata } from './admin/userdata';


function Home() {

  return (

    <>
      <HeroBanner />
      <Card />
      <Review />
      <StatsSection />
      <FaqSection />
    </>

  );

}



function App() {
  return (
    <div>
      {/* <Form/> */}
      {/* <Userdata/> */}

    

       <BrowserRouter>
        <Navbar />

        <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/revieww" element={<Revieww/>}/>
      <Route path="/register" element={<Form/>}/>
      <Route path="/login" element={<Login/>}/>



        </Routes>

        <Footer />
       </BrowserRouter>




     
    </div>
  );
}


export { App };