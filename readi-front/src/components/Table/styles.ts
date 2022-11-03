import styled from 'styled-components'

export const Container = styled.div`
  overflow: auto;
  height:calc(100vh - 389px);
  position: relative;
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  
  svg{
    margin: 5px;
  }

  .edit{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(66, 140, 203,0.2);
    border-radius: 5px;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: transform 400ms;

    &:hover{
      transform: scale(1.1);
    }
  }
}


td, th {
  text-align: left;
  padding: 8px;
  
}

td:has(img){
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img{
    width: 35px;
    height: 35px;
    object-fit: cover;
    border-radius: 50%;
    border:solid 1px var(--blue) ;
    margin-right: 10px;
  }
}

th{
  color: var(--blue);
  position: -webkit-sticky; // this is for all Safari (Desktop & iOS), not for Chrome
    position: sticky;
    top: 0;
    z-index: 1; // any positive value, layer order is global
    background: #fff; // any bg-color to overlap
}

tr:nth-child(even) {
  background-color: red;
}
`