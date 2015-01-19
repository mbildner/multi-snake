function handle (element, eventName, callback) {
  element.addEventListener(eventName, callback);
  return element.removeEventListener.bind(element, eventName, callback);
}

function once (element, eventName, callback) {
  var clearListener = handle(element, eventName, function () {
    callback.apply(null, arguments);
    clearListener();
  });
}
