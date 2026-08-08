import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import Header from "./components/Header"
import { useState,useEffect } from "react"
import UserContext from "./utils/userContext"

import Body from "./components/Body"
import Footer from "./components/Footer"
import Error from "./components/Error"
import Contact from "./components/Contact"
import ResMenu from "./components/ResMenu"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Carts from "./components/Carts"
const About = lazy(()=> import("./components/About"));





const AppLayout= ()=>{
     const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Gaurav Choudhary",
    };
    setUserName(data.name);
  }, []);

    return(
      <div className="app">
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
       <Header/>
       <Outlet/>    
      <Footer/>
        </UserContext.Provider>
         </Provider>
        </div>

    )
}


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
             {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<Suspense fallback={<h1>this is lazy loading used by suspense</h1>}><About/></Suspense>
            },

            {
                path:"/contact",
                element:<Contact/>
            },
                        {
                path:"/restaurents/:restaurantId",
                element:<ResMenu/>
            },
            {
                path:"/cart",
                element:<Carts/>
            },
        ],
        errorElement:<Error/>
    }    
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)