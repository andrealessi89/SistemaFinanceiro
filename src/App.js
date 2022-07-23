import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Resumo from "./components/Resumo";
import GlobalStyle from "./styles/global";

const App = () => {
    const data = localStorage.getItem("transactions");
    const [transactionsList, setTransactionsList] = useState(
        data ? JSON.parse(data) : []
    );
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);

    const handleAdd = (transaction) => {
        const newArrayTransaction = [...transactionsList, transaction];
        setTransactionsList(newArrayTransaction);

        localStorage.setItem("transactions", JSON.stringify(newArrayTransaction));
    }

    useEffect(() => {
        const amountExpense = transactionsList
        .filter((item) => item.expense)
        .map((transaction) => Number(transaction.amount));

        const amountIncome = transactionsList
        .filter((item) => !item.expense)
        .map((transaction) => Number(transaction.amount));

        const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const income = amountIncome.reduce((acc, cur) => acc + cur,0).toFixed(2);

        const total = Math.abs(income - expense).toFixed(2);
        setIncome(`R$ ${income}`);
        setExpense(`R$ ${expense}`);
        setTotal(`${Number(income) < Number(expense) ? "-" : ""} R$ ${total}`);
    }, [transactionsList])
    return (
    <>
    <Header />
    <Resumo income={income} expense={expense} total={total}/>
    <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList}/>
    <GlobalStyle />
    </>
    );
}

export default App;