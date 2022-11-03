import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid var(--blue);
  color: #666360;
  display: flex;
  align-items: center;

  display: flex;
  align-items: center;


  & + div {
    margin-left: 8px;
  }

  @media(max-width:720px){
    margin-left: 0px;
    margin-top: 8px;
    }



  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: var(--blue);
      border-color: var(--blue);
    `}
  ${props =>
    props.isField &&
    css`
      color: var(--blue);
    `}
  input{
    flex: 1;
    border: 0;
    background: transparent !important;
    display: flex;
    color: #666360;
        
    }
    input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #232129 inset;
    }
    /* Cor do texto do autocomplete */
    input:-webkit-autofill {
        -webkit-text-fill-color: #fff !important;
    }
    svg{
      margin-right: 16px;
    }
  svg {
    margin-right: 16px;
  }

  
`;

export const Error = styled.div`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #f4ede8;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;