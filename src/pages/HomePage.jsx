import React, { useState } from "react";
import { AppState } from "../AppState.js";
import { router } from "../Router.jsx";
import { Route } from "react-router-dom";

export default function HomePage() {
  const [count, setCount] = useState(0)
  const [car, createCar] = useState(Car)

  return (
    <div className="home-page">
      <div className="container my-3">
        <div className="row justify-content-end">
          <div className="col-4 text-end">
            <div className="card">
              <div className="card-body">
                <button className="btn btn-success my-1" onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <button className="btn btn-danger my-1" onClick={() => createCar((car) => )}>Create Car</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}