import React from "react";
import Slot from "./Slot";
import SlotInput from "./SlotInput";
import { useSelector } from "react-redux";

function List() {
  let todos = useSelector((state) => state);

  return (
    <div className="my-4">
      <br />

      <SlotInput />
      <hr />
      <h1 className="text-center">Booked Slots</h1>

      <hr />

      {todos.map((todo) => {
        return <Slot key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

export default List;
