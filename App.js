import React, { createContext, useState } from "react";
import Router from "./src/Router/Router";

export const DataPersonContext = createContext();

const App = () => {
  const [namePerson, setNamePerson] = useState("");
  const [nameCity, setNameCity] = useState("");
  const [yearBirth, setYearBirth] = useState("");

  return (
    <DataPersonContext.Provider
      value={{
        namePerson,
        setNamePerson,
        nameCity,
        setNameCity,
        yearBirth,
        setYearBirth
      }}
    >
      <Router />
    </DataPersonContext.Provider>
  );
};

export default App;
