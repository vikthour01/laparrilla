import React from "react";
import BarRecipesBody from "../BarRecipes/BarRecipesBody";
import Layout from "../Layout/Layout";
import BarRecipesHeader from "../BarRecipes/BarRecipesHeader";
import BarRecipesModal from "../BarRecipes/BarRecipesModal";
import AddCoursesModal from "../Courses/AddCoursesModal";
import AddBaseTypeModal from "../BaseType/AddBaseTypeModal";
import BarRecipesButtons from "../BarRecipes/BarRecipesButtons";

const BarRecipes = () => {
  return (
    <div>
      <Layout />
      <BarRecipesModal/>
      <AddCoursesModal/>
      <AddBaseTypeModal/>
      <div className="relative md:ml-[60px] ml-0">
        <BarRecipesHeader/>
        <BarRecipesButtons/>
        <BarRecipesBody />
      </div>
    </div>
  );
};

export default BarRecipes;
