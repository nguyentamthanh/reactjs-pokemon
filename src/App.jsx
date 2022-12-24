import { useState, useEffect } from "react";
import InteractScreen from "./components/InteractScreen";
import MainScreen from "./components/MainScreen";
import { shuffled } from "./utils/array";
function App() {
  // data
  const [statusMatch, setStatusMatch] = useState("default");
  const [totalOfBlocks, setTotalOfBlocks] = useState(0);
  const [cardContext, seTcardContext] = useState([]);
  const [startAt, setStartAt] = useState(null);

  // useEffect
  useEffect(() => {
    onHandleBeforeStart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalOfBlocks]);
  // function

  function onHandleBeforeStart() {
    const firstCards = Array.from(
      { length: totalOfBlocks / 2 },
      (_, i) => i + 1
    );
    const secondCards = [...firstCards];
    const cards = [...firstCards, ...secondCards];
    setStartAt(new Date().getTime());
  }
  return (
    <div>
      {statusMatch === "default" && (
        <MainScreen
          setStatusMatch={setStatusMatch}
          setTotalOfBlocks={setTotalOfBlocks}
        />
      )}
      {statusMatch === "match" && <InteractScreen />}
    </div>
  );
}

export default App;
