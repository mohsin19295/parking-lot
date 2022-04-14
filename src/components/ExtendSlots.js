import React from "react";
import { useDispatch } from "react-redux";
import { extendSlot } from "../reducers/actions";
import "bootstrap/dist/css/bootstrap.css";

function ExtendSlots() {
  let dispatch = useDispatch();
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <div className="text-center">
        <h1>You will get 8 Spaces at a time</h1>
        <button
          onClick={() => {
            dispatch(extendSlot());
          }}
          className="btn btn-primary  mx-2"
        >
          <strong>CLICK HERE FOR NEW SPACES</strong>
        </button>

        <hr />
      </div>
    </div>
  );
}

export default ExtendSlots;
