import React from "react";
import KitchenRecipesBody from "../KitchenRecipes/KitchenRecipesBody";
import Layout from "../Layout/Layout";
import KitchenRecipesHeader from "../KitchenRecipes/KitchenRecipesHeader";
import KitchenRecipesModal from "../KitchenRecipes/KitchenRecipesModal";
import AddCoursesModal from "../Courses/AddCoursesModal";
import AddBaseTypeModal from "../BaseType/AddBaseTypeModal";


const KitchenRecipes = () => {
  return (
    <div>
      <Layout />
      <KitchenRecipesModal/>
      <AddCoursesModal/>
      <AddBaseTypeModal/>
      <div className="relative md:ml-[60px] ml-0">
       <KitchenRecipesHeader/>
        <KitchenRecipesBody />
      </div>
    </div>
  );
};

export default KitchenRecipes;
