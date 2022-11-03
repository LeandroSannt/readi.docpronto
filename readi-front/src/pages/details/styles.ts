import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
max-width: 1024px;
margin: 0 auto;
    height: 92vh;
    display: flex;
    flex-direction: column;

`

export const Create = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
  form{
    width: 100%;
    h1{
      text-align:center;
    }
    .gridDiv{
      padding: 0 20px ;
      display: grid;
      grid-template-columns: 1fr 1fr;
      height:calc(100vh - 389px);

      @media(max-width:870px){
        grid-template-columns: 1fr;
       
      }

      .form{
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        .contentLabel{
          display: flex;

          @media(max-width:720px){
            flex-direction: column;
          }

          select{
            border-radius: 10px;
            padding: 16px;
            width: 100%;
            border: 2px solid var(--blue);
            color: #666360;
            display: flex;
            align-items: center;
            margin-left: 8px;

            @media(max-width:720px){
              margin-left: 0px;
              margin-top: 8px;
              margin-bottom: 8px;
            }
          }
        }
      }
    }

  }

`

export const AvatarInput = styled.div`
  position: relative;
  align-self: center;
  img {
    width: 85%;
    height: 270px;
    object-fit: cover;
    padding: 10px;

    @media(max-width:870px){
      width: 100%;
      }

      @media(max-width:720px){
        width:100%;
        height: 220px;
      }
  }
  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #ff9000;
    border: none;
    border-radius: 50%;
    right: 90px;
    bottom: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s;
    cursor: pointer;

    @media(max-width:870px){
      right: 0;
    }
    
    input {
      display: none;
    }
    &:hover {
    }
    svg {
      color: #312e38;
    }
  }
`;

export const Loader = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`