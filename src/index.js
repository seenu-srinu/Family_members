import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Practice from './Practice';
import Familydetails from './Familydetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Sampleproject/Layout";
import Home from "./Sampleproject/Home";
import Blogs from "./Sampleproject/Blogs";
import Contact from "./Sampleproject/Contact";
import Nopage from './Sampleproject/Nopage';
import Uploadfiles from './Uploadfiles';
import MobileNumber from './Sampleproject/Mobilenum';
import Mobilenum from './Sampleproject/Mobilenum';
import Phone from './Sampleproject/Phone';
import SampleProject from './SampleProject';
import Bootstrap from './Sampleproject/Bootstrap';
import { ThemeProvider } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Practicehere from './Sampleproject/Practicehere';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';





const Sampleproject=()=>{
  return(
 <BrowserRouter>
   <Routes>
        <Route path="/" Component={Layout}>
          <Route index Component={Home} />
          <Route path="blogs" Component={Blogs}/>
          <Route path="contact" Component={Contact} />
          <Route path="*" element={<Nopage />} />
          <Route path="familydetails" Component={Familydetails}/>
          <Route path="Mobilenum" Component={Mobilenum}/>
          <Route path="/app" Component={App}/>
          <Route path="/SampleProject" Component={SampleProject}/>
          <Route path="uploadfiles" Component={Uploadfiles}/>
          <Route path="phone" Component={Phone}/>
          <Route path="Bootstrap" Component={Bootstrap}/>
          <Route path="Practicehere" Component={Practicehere}/>
        </Route>
    </Routes>
   </BrowserRouter>

  )
}
    

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
  {/* <App /> */}
    {/*<Familydetails/>*/}
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Sampleproject/>
    </ThemeProvider>
    

    </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
