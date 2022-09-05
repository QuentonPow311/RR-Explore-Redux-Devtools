import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addGroceryItem, buyGroceryItem, clearBoughtGroceries, clearGroceryList } from "../features/counterSlice";

export default function GroceryList () {
    const { groceries, bought } = useSelector(state => state.groceries);
    const [newItem, setNewItem] = useState('');
    const dispatch = useDispatch();

    return <>
            <h2> GroceryList </h2>
            <ul>
            {groceries.map((item, key) => {
                return <li>
            <span>{item.name}</span>
            <button type ='text' onClick={() => {
                dispatch(buyGroceryItem(item.id));
                     }}>Buy?</button>
                </li>

            })}

        </ul>
            <h3>Purchased: </h3>
        <ul>
        {
            bought.map((item, key) => {
                return<li key={key}>{item.name}</li>
            })
        }
        </ul>
        <form action={onSubmit}> 
        <input type='text' value={newItem} onChange={
            e => setNewItem(e.target.value)
        }></input>
        <button> Add Item</button>
        </form>
            </>
        }