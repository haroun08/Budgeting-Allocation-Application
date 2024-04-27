import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './budget.css';

const Budget = ({ selectedCurrency }) => {
    const { budget, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [errorMessage, setErrorMessage] = useState('');

    const handleBudgetChange = (event) => {
        const updatedBudget = event.target.value;
        setNewBudget(updatedBudget);
        
        const totalSpending = expenses.reduce((total, expense) => total + expense.cost, 0);

        if (updatedBudget < totalSpending) {
            setErrorMessage("The budget cannot be lower than the total allocated spending.");
        } else if (updatedBudget > 20000) {
            setErrorMessage("The value cannot exceed £20,000");
        } else {
            setErrorMessage('');
        }
    };

    return (
        <div className='budget-container'>
            <div className='budget-header'>
                <span className='budget-title'>Budget: </span>
                <span className='budget-amount'> {selectedCurrency} </span>
            
                <input className='budget-input' type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
            </div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
    );
};

export default Budget;
