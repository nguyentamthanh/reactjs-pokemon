function MainScreen({ setStatusMatch, setTotalOfBlocks }) {
  function onStart(item) {
    setStatusMatch("match");
    setTotalOfBlocks(item);
  }
  return (
    <div>
      <h1>POKEMON BY THANH KUN</h1>
      <p>Select mode game to start game</p>
      <div>
        <button onClick={() => onStart(16)}>
          <span>4x4</span>
          <span>Easy</span>
        </button>
        <button onClick={() => onStart(36)}>
          <span>6x6</span>
          <span>Normal</span>
        </button>
        <button onClick={() => onStart(64)}>
          <span>8x8</span>
          <span>Hard</span>
        </button>
        <button onClick={() => onStart(100)}>
          <span>10x10</span>
          <span>Super Hard</span>
        </button>
      </div>
    </div>
  );
}
export default MainScreen;
