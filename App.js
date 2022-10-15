import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentNumber, setCurrentNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");
  const buttons = [
    "Clear",
    "delete",
    "+",
    1,
    2,
    3,
    "-",
    4,
    5,
    6,
    "*",
    7,
    8,
    9,
    "/",
    0,
    ".",
    "=",
  ];

  const styles = StyleSheet.create({
    results: {
      backgroundColor: darkMode ? "#282f3b" : "#f5f5f5",
      maxWidth: "100%",
      minHeight: "35%",
      alignItems: "flex-end",
      justifyContent: "flex-end",
    },
    resultText: {
      maxHeight: 105,
      color: "black",
      margin: 15,
      fontSize: 95,
    },
    historyText: {
      color: darkMode ? "#B5B7BB" : "#7c7c7c",
      fontSize: 40,
      marginRight: 10,
      alignSelf: "flex-end",
    },
    themeButton: {
      alignSelf: "flex-start",
      bottom: "5%",
      margin: 15,
      backgroundColor: darkMode ? "#7b8084" : "#e5e5e5",
      alignItems: "center",
      justifyContent: "center",
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    buttons: {
      width: "100%",
      height: "35%",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    button: {
      borderColor: darkMode ? "#3f4d5b" : "#e5e5e5",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "24%",
      minHeight: "54%",
      flex: 2,
      borderRadius: 100,
    },
    textButton: {
      color: darkMode ? "white" : "white",
      fontSize: 28,
    },
  });

  const handleInput = (btnPressed) => {
    if (
      btnPressed === "+" ||
      btnPressed === "-" ||
      btnPressed === "*" ||
      btnPressed === "/"
    ) {
      setCurrentNumber(currentNumber + btnPressed);
      return;
    }

    switch (btnPressed) {
      case "delete":
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        return;
      case "Clear":
        setLastNumber("");
        setCurrentNumber("");
        return;
      case "=":
        setLastNumber(currentNumber + "=");
        calculate();
        return;
    }
    setCurrentNumber(currentNumber + btnPressed);
  };

  const calculate = () => {
    let lastArr = currentNumber[currentNumber.length - 1];
    if (
      lastArr === "/" ||
      lastArr === "*" ||
      lastArr === "-" ||
      lastArr === "+" ||
      lastArr === "."
    ) {
      setCurrentNumber(currentNumber);
    } else {
      let result = eval(currentNumber).toString();
      setCurrentNumber(result);
      return;
    }
  };

  return (
    <View>
      <View style={styles.results}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((btn) =>
          btn === "=" ||
          btn === "/" ||
          btn === "*" ||
          btn === "-" ||
          btn === "+" ? (
            <TouchableOpacity
              key={btn}
              style={[styles.button, { backgroundColor: "black" }]}
              onPress={() => handleInput(btn)}
            >
              <Text
                style={[styles.textButton, { color: "white", fontSize: 50 }]}
              >
                {btn}
              </Text>
            </TouchableOpacity>
          ) : btn === 0 ? (
            <TouchableOpacity
              key={btn}
              style={[
                styles.button,
                {
                  backgroundColor:
                    typeof btn === "number"
                      ? darkMode
                        ? "#303946"
                        : "#665c5c"
                      : darkMode === false
                      ? "#414853"
                      : "#ededed",
                  minWidth: "36%",
                },
              ]}
              onPress={() => handleInput(btn)}
            >
              <Text style={styles.textButton}>{btn}</Text>
            </TouchableOpacity>
          ) : btn === "." || btn === "delete" ? (
            <TouchableOpacity
              key={btn}
              style={[
                styles.button,
                {
                  backgroundColor:
                    btn === "."
                      ? darkMode
                        ? "#303946"
                        : "#665c5c"
                      : darkMode === true
                      ? "#414853"
                      : "#a38686",
                  minWidth: "37%",
                },
              ]}
              onPress={() => handleInput(btn)}
            >
              <Text style={styles.textButton}>{btn}</Text>
            </TouchableOpacity>
          ) : btn === "Clear" ? (
            <TouchableOpacity
              key={btn}
              style={[
                styles.button,
                {
                  backgroundColor:
                    typeof btn === "number"
                      ? darkMode
                        ? "#303946"
                        : "#665c5c"
                      : darkMode === true
                      ? "#414853"
                      : "#a38686",
                  minWidth: "36%",
                },
              ]}
              onPress={() => handleInput(btn)}
            >
              <Text style={styles.textButton}>{btn}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              key={btn}
              style={[
                styles.button,
                {
                  backgroundColor:
                    typeof btn === "number"
                      ? darkMode
                        ? "#303946"
                        : "#665c5c"
                      : darkMode === true
                      ? "#414853"
                      : "#ededed",
                },
              ]}
              onPress={() => handleInput(btn)}
            >
              <Text style={styles.textButton}>{btn}</Text>
            </TouchableOpacity>
          )
        )}
      </View>
    </View>
  );
}
