import { createContext, useState, useEffect } from "react";
const ThemeContext = createContext();
function ThemeContextProvider(props) {
  const themes = {
    firstTheme: {
      pageBg: "#fff",
      navbarColor: "white",
      navbarBg: "#2c3e50",
      cardWrapperBg: "#dff9fb",
      cardButtonColor: "#fff",
      cardButtonBg: "#e5195f",
    },
    secondTheme: {
      pageBg: "#2c3e50",
      navbarColor: "#3d3d3d",
      navbarBg: "#ffcccc",
      cardWrapperBg: "#CAD3C8",
      cardButtonColor: "#fff",
      cardButtonBg: "#686de0",
    },
  };

  const [themeName, setThemeName] = useState("secondTheme");

  useEffect(() => {
    const localThemeName = localStorage.getItem("themeName")
      ? localStorage.getItem("themeName")
      : localStorage.setItem("themeName", themeName);
    setThemeName(localThemeName);
  }, []);

  useEffect(() => {
    localStorage.setItem("themeName", themeName);
    const theme =
      themeName === "firstTheme" ? themes.firstTheme : themes.secondTheme;
    document.body.className = "";
    document.body.classList.add(theme.pageBg);
  }, [themeName]);

  return (
    <ThemeContext.Provider
      value={{
        theme:
          themeName === "firstTheme" ? themes.firstTheme : themes.secondTheme,
        setThemeName: setThemeName,
        themeName: themeName,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
