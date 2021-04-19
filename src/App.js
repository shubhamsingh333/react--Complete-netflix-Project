import React from "react";
// import ReactDOM from "react-dom";
import Card from "./Cards";
import Sdata from "./Sdata";

// function ncard (val){

// };

const App = ()=> (
  <>
    <h1> List of top 3 Netflix series </h1>
    {Sdata.map( (val) => {
      return (
        <Card
          key = {val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })}
    ;
  </>
);
 export default App;