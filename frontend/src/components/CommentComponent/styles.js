import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  img {
      float: left;
      border-radius: 50px;
      width: 35px;
      margin: 15px  20px;
      height: 35px;
  }
`;

export const Comment = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 15px;
  background: #ccc;
  border-radius: 15px;
  height: auto;
  min-height: 8px;
  overflow: hidden;
  width: 670px;


  h1 {
    text-align: left;
    padding-left: 15px;
    margin-left: 10px;
    word-break: normal;
    flex: 0  33%;
    font-size: 15px;
  }

  p {
    text-align: left;
    flex-wrap: wrap;
    margin-top: 13px;
    flex: 3;
    padding-left: -35px;
    word-break:break-all;
  }
`


