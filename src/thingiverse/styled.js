import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Header = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #248bfb;
`;
export const Logo = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  width: 220px;
  height: 24px;
  padding-left: 20px;
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 620px;
  height: 40px;
  background: #0063ce;
  border-radius: 3px;
  input {
    box-sizing: border-box;
    border: none;
    outline: none;
    color: #fff;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    padding: 0 10px;
    width: 0;
    flex: 1 1 auto;
    margin: 0;
    border-radius: 3px;
    background-color: #0063ce;
    ::-webkit-input-placeholder {
      color: #fff;
      opacity: 0.5;
    }
  }
  svg {
    width: 16px;
    height: 16px;
    color: #fff;
    transform: rotate(90deg);
    margin-left: 10px;
  }
  .Close {
    padding: 10px;
    cursor: pointer;
  }
`;
export const Content = styled.div`
  display: grid;
  box-sizing: border-box;
  justify-content: center;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  margin-bottom: 10px;
  margin-top: 60px;
`;
export const ThingsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 340px;
  border-radius: 3px;
  background-color: #fff;
`;
export const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 38px;
`;
export const Name = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
  color: #555;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`;
export const Image = styled.div`
  display: flex;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  img {
    width: 300px;
    height: 225px;
  }
`;
export const Avatar = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  padding: 10px;
  img {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    line-height: 25px;
    padding: 0;
  }
`;
export const FooterBox = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 100%;
`;
export const LeftContainer = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  p {
    opacity: 0.8;
    color: #555;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    padding: 0;
    margin: 0;
  }
  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    color: #555;
  }
`;
export const RightContainer = styled.div`
  display: flex;
  width: 100px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: column;
  border-left: 1px solid #eee;
`;
export const LikeBox = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid #eee;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  svg {
    margin-right: 10px;
  }
  p {
    opacity: 0.8;
    color: #555;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    padding: 0;
    margin: 0;
  }
`;
export const ShareBox = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  svg {
    margin-right: 10px;
  }
  p {
    opacity: 0.8;
    color: #555;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    padding: 0;
    margin: 0;
  }
`;
