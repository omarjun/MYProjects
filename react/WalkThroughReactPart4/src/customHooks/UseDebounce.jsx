
function UseDebounce(cb, delay = 500) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout((c) => {
      cb(...args);
    },delay)
  }
}

export default UseDebounce