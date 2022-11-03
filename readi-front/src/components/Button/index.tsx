import React, { ButtonHTMLAttributes, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

interface ButtonProps  extends ButtonHTMLAttributes<HTMLButtonElement>{
  text:string
  path?:string
  icon:ReactElement
}

const Button:React.FC<ButtonProps> = ({path,text,icon:Icon,...rest}) =>{

  const navigate = useNavigate()

  return(
    <Container onClick={() =>{path && navigate(path)}} {...rest}>
      {Icon}
      {text}
    </Container>
  )
}
export default Button