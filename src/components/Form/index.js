import React, { useState } from 'react'
import Grid from '../Grid';
import * as C from './styles'
const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const generateId = () => Math.round(Math.random() * 1000);

    
    const handleSave = () => {
        if(!desc || !amount){
            alert("informe a descrição e o valor");
            return;
        }else if (amount < 1){
            alert("O valor tem que maior que 0");
            return 0;
        }

        const transaction = {
            id: generateId(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        };

        handleAdd(transaction);

        setDesc("");
        setAmount("")
    };
  return (
    <>
    <C.Container>
          <C.InputContent>
              <C.Label>Descrição</C.Label>
              <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
          </C.InputContent>
          <C.InputContent>
              <C.Label>Valor</C.Label>
              <C.Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)} />
          </C.InputContent>
          <C.RadioGroup>
              <C.Input
                  type="radio"
                  id="rIncome"
                  defaultChecked
                  name="group1"
                  onChange={() => setExpense(false)} />
              <C.Label htmlFor="rIncome">Entrada</C.Label>
              <C.Input
                  type="radio"
                  id="rExpenses"
                  name="group1"
                  onChange={() => setExpense(true)} />
              <C.Label htmlFor="rExpenses">Saida</C.Label>
              <C.Button onClick={handleSave}>Adicionar</C.Button>
          </C.RadioGroup>
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
      </>
  );
};

export default Form