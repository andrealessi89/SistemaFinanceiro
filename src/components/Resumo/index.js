import React from 'react'
import ResumoItem from '../ResumoItem';
import * as C from "./styles";
import {
  FaArrowAltCircleUp,
  FaArrowAltCircleDown,
  FaCommentDollar,
} from "react-icons/fa"

const Resumo = ({income, expense, total}) => {
  return (
    <C.Container>
      <ResumoItem title="Entradas" Icon={FaArrowAltCircleUp} value={income}/>
      <ResumoItem title="Saídas" Icon={FaArrowAltCircleDown} value={expense}/>
      <ResumoItem title="Total" Icon={FaCommentDollar} value={total}/>
    </C.Container>
  )
}

export default Resumo