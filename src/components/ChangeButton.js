import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => props.theme.cardWrapperBg};
  color: ${(props) => props.theme.cardButtonBg};

  font-size: 1em;
  margin-bottom: 1em;
  margin-left: 2em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: flex;
  justify-content: center;
`;

function ChangeThemeButton() {
  const { setThemeName, theme, themeName } = useContext(ThemeContext);
  return (
    <div>
      <Button
        onClick={() =>
          setThemeName((prev) =>
            prev === "firstTheme" ? "secondTheme" : "firstTheme"
          )
        }
      >
        Change Theme
      </Button>
    </div>
  );
}

export default ChangeThemeButton;
