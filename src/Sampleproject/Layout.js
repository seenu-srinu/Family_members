import { Outlet, Link } from "react-router-dom";
const Layout=()=>{
    return(
        <>
         <nav>

            <ul>
               <li>
                <Link to="/">Home</Link>
               </li>
               <li>
                <Link to="/contact">Contact</Link>
               </li>
               <li>
                <Link to="blogs">Blogs</Link>
               </li>
                <li>
                    <Link to="familydetails">Familydetails</Link>
                </li>
                <li>
                    <Link to="app">App</Link>
                </li>
                <li>
                    <Link to="sample">Sample</Link>
                </li>
               <li>
                <Link to="uploadfiles">Uploadfiles</Link>
               </li>
               <li>
                <Link to="mobilenum">
                    Mobilenum</Link>
               </li>
               <li>
                <Link to="phone">Phone</Link>
               </li>
               <li>
                <Link to="SampleProject">SampleProject</Link>
               </li>
               <li>
                <Link to="Bootstrap">Bootstrap</Link>
               </li>
               <li>
                <Link to="Practicehere">Practicehere</Link>
               </li>
            </ul>
         </nav>
         <Outlet/>

        </>
    )
}

export default Layout;