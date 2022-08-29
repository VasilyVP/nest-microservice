const Net = require('net');

const port = 3000;
const host = 'localhost';

const client = new Net.Socket();

client.connect({ port, host }, () => {
  console.log('TCP established');

  const msgStr = JSON.stringify({
    pattern: { cmd: 'sum' },
    data: [1, 2, 3],
    id: 1,
  });

  client.write(`${msgStr.length}#${msgStr}`);
});

client.on('data', (chunk) => {
  const res = chunk.toString().replace(/^(.*#)/, '');
  const response = Number(JSON.parse(res).response);
  console.log('Data received: ', response);

  client.end();
});

client.on('end', function () {
  console.log('Requested an end to the TCP connection');
});
