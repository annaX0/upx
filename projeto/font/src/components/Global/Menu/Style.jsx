import styled from "styled-components";

export const MenuClose = styled.div`
  background-color: #233828;
  height: 100vh;
  width: 3%;
  /* width: 15%; */
  transition: 1s;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  /* padding: 20px 0; */

  :hover {
    width: 15%;
    transition: 1s;

    a {
      display: flex;
      transition: 1s;
    }

    img {
      display: flex;
    }

    h4 {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
    }
  }

  svg {
    color: white;
    width: 49px;
    cursor: pointer;

    :hover {
      opacity: 0.5;
      transition: 1s;
    }
  }
`;

export const LinkPages = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  /* align-items: center; */

  a {
    display: flex;
  }
`;
export const BtnPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  :hover {
    background-color: #4a7856;
    border-radius: 50px;
    width: 100%;
    transition: 1s;
    height: 45px;
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    display: none;
    font-size: 16px;
    text-align: start;
  }
`;
export const ButtonOut = styled.div`
  margin-bottom: 3%;
`;

export const ImageProfile = styled.div`
  height: 5rem;
  width: 5rem;
  border-radius: 50px;
  /* background-color: white; */
  transition: 500ms;
  display: flex;
  justify-content: center;
  margin: auto;

  img {
    display: none;
    width: 5rem;
    height: 5rem;
    border-radius: 50px;
    background-color: white;
  }

  :hover {
    border: 2px solid white;
    background-color: transparent;
    padding: 2px;
    display: flex;
  }
`;

export const Profile = styled.div`
  color: white;

  h4 {
    font-weight: 400;
    display: none;
  }
`;

export const Body = styled.div`
    display: flex;
    align-items: flex-start;

`
export const Name = styled.h4`
  text-align: center;
`
