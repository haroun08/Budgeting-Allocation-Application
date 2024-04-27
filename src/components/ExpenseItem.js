import React, { useContext } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Import icons
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, selectedCurrency } = useContext(AppContext); // Get selected currency from context

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    const decreaseAllocation = (name) => { // Decrease allocation function
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>${selectedCurrency}{props.cost}</td> {/* Display selected currency */}
            <td>
                <button className="btn btn-sm btn-success mr-2" onClick={() => increaseAllocation(props.name)}>
                    <FaPlus /> {/* Plus icon */}
                </button>
                <button className="btn btn-sm btn-warning" onClick={() => decreaseAllocation(props.name)}>
                    <FaMinus /> {/* Minus icon */}
                </button>
            </td>
            <td>
                <button className="btn btn-sm btn-danger" onClick={handleDeleteExpense}>
                    <TiDelete /> {/* Delete icon */}
                </button>
            </td>
        </tr>
    );
};

export default ExpenseItem;
