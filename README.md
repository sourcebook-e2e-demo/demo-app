# demo-app

Minimal TypeScript demo application used to exercise the Sourcebook
end-to-end pipeline: extract → generate wiki → serve over MCP → drift on push.

## Modules

- `src/logger.ts` — leveled `Logger`.
- `src/math.ts` — `add`, `multiply`, `sum` helpers.
- `src/greeter.ts` — `Greeter`, depends on `Logger`.
- `src/index.ts` — `main`, wires everything together.
