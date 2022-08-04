import styled from "styled-components";

export const FeedbackOptionsWrap = styled.div`
 display: flex;
 gap:20px;
 
 `;

export const FeedbackButton = styled.button`
 padding: 20px auto;
  width: 100px;
  height: 40px;

  background-color: lightgrey;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  border:none;
  border-radius:3px;
  cursor: pointer;
  
  &:hover{
    background-color:grey;
    
  }
  `;