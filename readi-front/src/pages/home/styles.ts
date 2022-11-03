import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
max-width: 1024px;
margin: 0 auto;
padding: 0 10px;
`

export const Filters = styled.div`

  margin-top: 20px;

  select{
    border-radius: 4px;
    padding: 16px;
    border: 1px solid var(--blue);
    color: #666360;
    display: flex;
    align-items: center;
    margin-left: 8px;
  }

  >div{
    margin: 20px 0;
    display: flex;
    gap: 10px;
  }

`