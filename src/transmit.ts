import { computeChecksum, signPayload } from 'xpr-demo-crypto';
import { computeTrend, processReading, type ProcessedReading, type Trend } from 'xpr-demo-sensor';

export type TransmitPacket = {
  reading: ProcessedReading;
  trend: Trend | null;
  checksum: string;
  signature: string;
};

export function buildPacket(
  rawMgdl: number,
  previous: ProcessedReading | null,
  deviceKey: string,
): TransmitPacket {
  const reading = processReading(rawMgdl, new Date());
  const trend = previous == null ? null : computeTrend(previous, reading);
  const body = JSON.stringify({ reading, trend });
  return { reading, trend, checksum: computeChecksum(body), signature: signPayload(body, deviceKey) };
}
