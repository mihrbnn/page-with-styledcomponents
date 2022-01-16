import styled from "styled-components";

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  background-color: ${(props) => props.theme.cardWrapperBg};
`;

export const CardHeader = styled.header`
  padding-top: 30px;
  padding-bottom: 20px;
`;

export const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.cardButtonBg};
`;

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
  padding-bottom: 30px;
`;

export const CardInput = styled.input`
  padding: 9px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;
  background-color: ${(props) => props.theme.cardWrapperBg};

  &:focus {
    border-bottom-color: ${(props) => props.theme.cardWrapperBg};
    outline: 0;
  }
`;

export const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  margin-top: 50px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme.cardButtonColor};
  background-color: ${(props) => props.theme.cardButtonBg};
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;
