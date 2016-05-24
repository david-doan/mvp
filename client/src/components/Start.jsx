var Start = (props) => (
  <div>
    START PAGE BABY
    <form onSubmit={props.joinRoom}>
      <input type="text" placeholder="Room" onChange={props.handleRoom} />
      <button onClick={props.joinRoom}> JOIN </button>
    </form>
    <button onClick={props.handleStartButton}>START!
    </button>
  </div>
);

window.Start = Start;