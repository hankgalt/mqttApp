var mqtt = require('mqtt'),
  client  = mqtt.connect({
    port: 1883,
    host: 'localhost',
    connectTimeout: 350,
    reconnectPeriod: 300
  });
 
client.on('connect', function () {
  client.subscribe('presence');
  client.publish('presence', 'Hello mqtt')
});
 
client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(message.toString());
  client.end();
});

console.log('Client started...');