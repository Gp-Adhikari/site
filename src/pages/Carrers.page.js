import React, { useEffect } from "react";
import Banner from "../components/Banner.component";
import CarrersItem from "../components/CarrersItem.component";

const Carrers = () => {
  useEffect(() => {
    document.title = "Carrers - Zpro";
  }, []);
  return (
    <>
      <Banner text1="Looking For" text2="Motivated and Creative People" />
      <CarrersItem />
    </>
  );
};

export default Carrers;
