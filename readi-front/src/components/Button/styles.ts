import styled from 'styled-components'

export const Container = styled.button`
    padding: 12px 14px;
    color: #fff;
    background-color:var(--blue);
    border-radius: 4px;
    border: none;
    transition: 200ms;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    font-size: 20px;

    svg{
      margin-right: 10px;
    }

    &:hover{
      filter: brightness(.8);
    }
    
`