import { Greeter } from "./greeter";
import { Logger } from "./logger";
import { sum } from "./math";

/**
 * Entry point: greets a fixed set of users and prints a running total.
 *
 * Wires together {@link Logger}, {@link Greeter}, and {@link sum} to exercise
 * the cross-module import edges the wiki dependency graph is expected to
 * surface.
 */
export function main(): void {
  const logger = new Logger("main");
  const greeter = new Greeter(logger);

  for (const name of ["Ada", "Linus", "Grace"]) {
    console.log(greeter.greet(name));
  }

  logger.info(`total = ${sum([1, 2, 3, 4])}`);
}

main();
