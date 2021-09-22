import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood } from "../features/customerSlice";

interface IProps {
  id: string;
  name: string;
  food: string[];
}

const CustomerCard = ({ id, name, food }: IProps) => {
  const dispatch = useDispatch();
  const [custFood, setFood] = useState<string>("");

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((fo) => {
            return <p>{fo}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input value={custFood} onChange={(e) => setFood(e.target.value)} />
          <button
            onClick={() => {
              if (!custFood) return;
              dispatch(addFood({ id, food: custFood }));
              setFood("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
