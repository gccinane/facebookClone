import styled from 'styled-components'

export const Header = styled.header`
  background: #4267b2;
  padding: 35px;
  font-size: 25px;
  color: #fff;
  
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 38px;
    flex: 1;
  }
  p {
    font-size: 17px;
    
    padding-right: 15px;
  }
  svg {
    
    border: 5px solid;
    border-color: #fff;
    border-radius: 30px;
    background: #fff;
    color: #4267b2;
   
  }
  
  
`;