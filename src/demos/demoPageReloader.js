(function() {
  const getSocketUrl = (location) =>
    `${location.protocol === "https:" ? `wss:` : `ws:`}//${location.hostname}:${location.port}/`;

  const clientWebSocket = new window.WebSocket(getSocketUrl(window.location), ["xmpp"]);

  clientWebSocket.addEventListener("message", (message) => {
    if (message.data.indexOf("rebuild finished") > -1) {
      window.location.reload();
    }
  });
})();
