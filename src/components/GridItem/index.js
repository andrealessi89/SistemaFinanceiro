import React from 'react';
import * as C from "./styles";
import {
    FaArrowAltCircleUp,
    FaArrowAltCircleDown,
    FaCommentDollar,
    FaTrashAlt,
  } from "react-icons/fa";



const GridItem = ({item, onDelete}) => {
  return (
    <C.Tr>
        <C.Td>{item.desc}</C.Td>
        <C.Td>{item.amount}</C.Td>
        <C.Td alignCenter>
            {item.expense ? (
                <FaArrowAltCircleDown color="red" />
            ) : (
                <FaArrowAltCircleUp color="green"/>
            )} 
        </C.Td>
        <C.Td>
            <FaTrashAlt onClick={() => onDelete(item.id)} />
        </C.Td>
    </C.Tr>
  )
}

export default GridItem