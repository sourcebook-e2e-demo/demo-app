import { Logger } from "./logger";

/**
 * Builds greeting messages and records each one through an injected
 * {@link Logger}.
 *
 * The logger is a constructor dependency so callers decide where the greeting
 * audit trail goes.
 */
export class Greeter {
  constructor(private readonly logger: Logger) {}

  greet(name: string): string {
    const message = `Hello, ${name}! Welcome aboard.`;
    this.logger.info(`greeted ${name} at ${new Date().toISOString()}`);
    return message;
  }
}
