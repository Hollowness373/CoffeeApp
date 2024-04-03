import React, { useState, useEffect, useContext } from "react";
import colortheme from "../../assets/colortheme.json";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

const ThemeProvider = ({ children }) => {
  const [themes, changeTheme] = useState({});
  const [currentTheme, setCurrentTheme] = useState(true);

  const onChangeThemes = () => {
    setCurrentTheme(!currentTheme);
  };

  useEffect(() => {
    if (currentTheme === true) {
      changeTheme(colortheme.lightTheme);
    } else {
      changeTheme(colortheme.darkTheme);
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={themes}>
      <ThemeUpdateContext.Provider value={onChangeThemes}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };