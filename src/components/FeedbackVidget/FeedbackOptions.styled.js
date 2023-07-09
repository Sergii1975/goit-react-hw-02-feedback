import styled from 'styled-components';

export const Container = styled.li`
  margin-top: 20px;
  list-style:none;
  
`;

export const Wrapper = styled.ul`
display: flex;
padding:0;
align-items: center;
justify-content: center;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  
  &:hover {
    background-color: #e0e0e0;
  }
`