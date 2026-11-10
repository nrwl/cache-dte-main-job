/**
 * Vitest global setup that gives each library test run a realistic load.
 *
 * Vitest runs global setup once per project, so the whole library costs
 * UNIT_TEST_CPU_SECONDS of fixed-work compute plus UNIT_TEST_SLEEP_MS of idle
 * wait, interleaved across UNIT_TEST_BLOCKS rounds the way a real run
 * alternates between CPU work and I/O. The compute scales with hardware, the
 * sleep does not.
 *
 * Set UNIT_TEST_CPU_SECONDS=0 and UNIT_TEST_SLEEP_MS=0 to run at full speed.
 */
import { burnCpu, envNumber, sleep, UNITS_PER_SECOND } from './burn.mjs';

export default async function setup() {
  const cpuSeconds = envNumber('UNIT_TEST_CPU_SECONDS', 2);
  const sleepMs = envNumber('UNIT_TEST_SLEEP_MS', 3_000);
  const unitsPerSecond = envNumber(
    'UNIT_TEST_UNITS_PER_SECOND',
    UNITS_PER_SECOND,
  );
  const blocks = Math.max(1, Math.round(envNumber('UNIT_TEST_BLOCKS', 10)));

  const totalUnits = Math.round(cpuSeconds * unitsPerSecond);
  const unitsPerBlock = Math.round(totalUnits / blocks);
  const sleepPerBlock = sleepMs / blocks;

  const startedAt = Date.now();

  for (let i = 0; i < blocks; i++) {
    if (unitsPerBlock > 0) {
      burnCpu(unitsPerBlock);
    }
    await sleep(sleepPerBlock);
  }

  if (process.env['UNIT_TEST_CPU_REPORT']) {
    console.log(
      `[test-delay] ${blocks} blocks of ${unitsPerBlock.toLocaleString()} units ` +
        `+ ${sleepPerBlock.toFixed(0)}ms sleep took ${(
          (Date.now() - startedAt) /
          1000
        ).toFixed(2)}s`,
    );
  }
}
