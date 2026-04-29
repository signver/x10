# x10sible

Minimal framework for a plugin-like approach for your project.

# Contributing

Minimal Rollup build setup for a TypeScript library transpiled with Babel.

## Build target

- Source: `src/**/*.ts`
- Output format: ESM
- Output directory: `lib`

## Scripts

- `npm run build`: clean `lib` and build with Rollup
- `npm run clean`: remove `lib`
- `npm run typecheck`: run TypeScript type checks

## Notes

- Rollup preserves module structure (`preserveModules`) so files remain ESM-friendly for npm publishing.
- Babel is applied after TypeScript transpilation and targets modern browsers using the package `browserslist` config.

