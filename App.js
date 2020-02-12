import React, { useEffect, useState } from "react";
import Routes from "./src/routes";
import * as Font from "expo-font";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const runEffect = async () => {
      await Font.loadAsync({
        Tahoma: require("./assets/fonts/Tahoma.ttf"),
        TahomaBold: require("./assets/fonts/Tahoma Bold.ttf"),
        Din: require("./assets/fonts/DIN Condensed Bold.ttf")
      });
      setFontLoaded(true);
    };
    runEffect();
  }, []);

  return <>{fontLoaded ? <Routes></Routes> : null}</>;
}
