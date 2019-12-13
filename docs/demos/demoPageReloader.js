(function() {
  // based on pieces of https://github.com/ionic-team/stencil/blob/4960fbe11444a18def3ce48ab46b018c416f9472/src/dev-server/dev-client/client-web-socket.ts
  const getSocketUrl = function getSocketUrl(location) {
    return location.protocol === "https:" ? "wss:" : "ws:" + "//" + location.hostname + ":" + location.port + "/";
  };

  const clientWebSocket = new window.WebSocket(getSocketUrl(window.location), ["xmpp"]);

  clientWebSocket.addEventListener("message", function(message) {
    if (message.data.indexOf("rebuild finished") > -1) {
      window.location.reload();
    }
  });
})();
