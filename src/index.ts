import { buildPacket } from './transmit.ts';

const first = buildPacket(112, null, 'demo-device-key');
const second = buildPacket(131, first.reading, 'demo-device-key');
console.log(JSON.stringify([first, second], null, 2));
