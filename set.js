import React from "react";
import Car from "./Car";

function App() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center mt-4">Car List</h1>
      <Car brand="Tesla" model="Model S" year="2024" color="Red" />
      <Car brand="BMW" model="X5" year="2023" color="Black" />
      <Car brand="Toyota" model="Fortuner" year="2022" color="White" />
    </div>
  );
}

export default App;
export (vaurls)