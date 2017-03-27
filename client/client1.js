var mqtt = require('mqtt'),
  client  = mqtt.connect({
    port: 1883,
    host: 'localhost',
    connectTimeout: 350,
    reconnectPeriod: 300
  });

client.on('connect', function () {
  client.subscribe('presence');
  client.publish('presence', 'Client 1 is alive.. Test Ping! ' + Date());

  client.end();
});