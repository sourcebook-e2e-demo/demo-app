/** Severity levels accepted by {@link Logger}. */
export type LogLevel = "debug" | "info" | "warn" | "error";

/**
 * Minimal leveled logger that writes structured lines to stdout.
 *
 * Each line is prefixed with an ISO timestamp and the upper-cased level so the
 * output can be grepped or shipped to a log collector without extra parsing.
 */
export class Logger {
  constructor(private readonly scope: string) {}

  log(level: LogLevel, message: string): void {
    const ts = new Date().toISOString();
    console.log(`${ts} [${level.toUpperCase()}] (${this.scope}) ${message}`);
  }

  info(message: string): void {
    this.log("info", message);
  }

  error(message: string): void {
    this.log("error", message);
  }
}
