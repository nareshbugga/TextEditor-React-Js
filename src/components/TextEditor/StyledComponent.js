/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #25262c;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  height: 100vh;
`
export const SubContainer = styled.div`
  background-color: #1b1c22;
  background-size: cover;
  display: flex;
  padding: 30px;
  width: 70vw;
`
export const Image = styled.img`
  width: 70%;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-weight: bold;
  font-family: 'Roboto';
  text-align: center;
`
export const UnOrderList = styled.ul`
  list-style-type: none;
  display: flex;
`
export const Container = styled.div`
  background-color: #25262c;
  background-size: cover;
  height: 56vh;
  border: 1px solid #cbd5e1;
  margin-right: 20px;
`
export const TextArea = styled.textarea`
  background-color: transparent;
  border-top: 1px solid #cbd5e1;
  color: #f8fafc;
  outline: none;
  padding-left: 15px;
  padding-top: 10px;
  border-bottom: none;
  font-weight: ${props => (props.bold ? 'normal' : 'bold')};
  font-style: ${props => (props.italic ? 'normal' : 'italic')};
  text-decoration: ${props => (props.underLine ? 'normal' : 'underline')};
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.value};
  cursor: pointer;
`
