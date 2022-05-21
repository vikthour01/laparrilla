import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllRecipes from "./Components/Pages/AllRecipes";
import AddRecipes from "./Components/Pages/AddRecipes";
import { DataContextProvider } from "./Components/store/storeContext";
import Layout from "./Components/Layout/Layout";
import RecipePage from "./Components/Pages/RecipePage";
import BarRecipes from "./Components/Pages/BarRecipes";
import KitchenRecipes from "./Components/Pages/KitchenRecipes";
import UsersPage from "./Components/Pages/UsersPage";
import UserDetailPage from "./Components/Pages/UserDetailPage"
import EditUsersPage from "./Components/Pages/EditUsersPage"
import BaseTypePage from "./Components/Pages/BaseTypePage";
import CoursesPage from "./Components/Pages/CoursesPage";
import AddUsersPage from "./Components/Pages/AddUsersPage";


function App() {
  return (
    <div className="bg-[#B7B8B9] relative">
      <DataContextProvider>
        <Router>
          <Layout />
          <Routes>
            <Route path="/" element={<AllRecipes />} />
            <Route path="/addrecipes" element={<AddRecipes />} />
            <Route path="/recipepage" element={<RecipePage />} />
            <Route path="/barrecipes" element={<BarRecipes />} />
            <Route path="/kitchenrecipes" element={<KitchenRecipes/>} />
            <Route path="/users" element={<UsersPage/>}/>
            <Route path="/user/view/:id" element={<UserDetailPage/>}/>
            <Route path="/edit" element={<EditUsersPage/>}/>
            <Route path="/adduser" element={<AddUsersPage/>}/>
            <Route path="/basetype" element={<BaseTypePage/>}/>
            <Route path="/courses" element={<CoursesPage/>}/>
          </Routes>
        </Router>
      </DataContextProvider>
    </div>
  );
}

export default App;
