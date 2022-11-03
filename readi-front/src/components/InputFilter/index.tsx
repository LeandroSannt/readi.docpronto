import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerStyle?: React.CSSProperties;
}

const InputFilter:React.FC<InputProps> = ({ ...rest}) =>{
  return(
    <Container>
      <input {...rest} type="text" />
    </Container>
  )
}
export default InputFilter