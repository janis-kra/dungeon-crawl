const state = mobx.observable({
  world: {},
  pressedKeys: ({
    up: false,
    down: false,
    left: false,
    right: false
  })
});

const MOVEMENT = {
  UP: 'up',
  DOWN: 'down',
  LEFT: 'left',
  RIGHT: 'right',
  NONE: 'none'
};

const MOVEMENT_KEYS = {
  38: MOVEMENT.UP,
  87: MOVEMENT.UP,
  40: MOVEMENT.DOWN,
  83: MOVEMENT.DOWN,
  37: MOVEMENT.LEFT,
  65: MOVEMENT.LEFT,
  39: MOVEMENT.RIGHT,
  68: MOVEMENT.RIGHT
};

const keyDown = (evt) => {
  const dir = MOVEMENT_KEYS[evt.keyCode];
  if (typeof dir === 'string') {
    state.pressedKeys[dir] = true;
  }
};

const keyUp = (evt) => {
  const dir = MOVEMENT_KEYS[evt.keyCode];
  if (typeof dir === 'string') {
    state.pressedKeys[dir] = false;
  }
};

const Player = () => {
  return (
    <div id='player'></div>
  );
};

const Screen = mobxReact.observer(() => {
  window.onkeydown = keyDown;
  window.onkeyup = keyUp;
  return (
    <div className='screen'>
      <span>Up:{ JSON.stringify(state.pressedKeys) }</span>
    </div>
  );
});

const App = () => (
  <div>
    <Screen />
    <Player />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
