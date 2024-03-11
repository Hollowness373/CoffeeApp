import React from "react";
import { View, Text, StyleSheet } from "react-native"
import Introduction from "./src/screens/Introduction";
import { ThemeProvider } from "./src/component/ThemeContext";


const App = () => {


  return(
    <ThemeProvider>
      <Introduction/>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }

});

export default App;