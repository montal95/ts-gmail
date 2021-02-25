import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid whitesmoke;
  .left_header {
    display: flex;
    align-items: center;
    padding-left: 20px;
    img {
      margin-left: 10px;
      object-fit: container;
    }
  }
  .middle_header {
    height: 56px;
    display: flex;
    flex: 0.7;
    align-items: center;
    background-color: whitesmoke;
    padding: 10px;
    border-radius: 5px;
    margin: 5px 0;
    .MuiSvgIcon-root {
      color: grey;
    }
    input {
      border: none;
      width: 100%auto;
      padding: 5px;
      font-size: medium;
      outline-width: 0;
      background-color: transparent;
    }
  }
  .right_header {
    display: flex;
    padding-right: 20px;
  }
`
