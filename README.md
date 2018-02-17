# Stacks

You’re looking at Stack Overflow’s CSS and Design Pattern Library. Stacks is an [atomic CSS library](http://johnpolacek.com/rethinking/) with classes and components for rapidly building Stack Overflow.

## Including Stacks in your project

If you’re working on Stack Overflow or Stack Overflow Careers, Stacks is already in production and you can use everything documented at https://stackoverflow.design/.

If you’d like to include Stacks elsewhere—A blog, or a prototype—Stacks is available as a standalone library that’s delivered via [NPM](https://www.npmjs.com/package/@stackoverflow/stacks). This library includes everything within the `/lib/` directory.

```
npm install --save-dev @stackoverflow/stacks
```

If you’d rather skip installing a dependency, you can include Stacks as you would normally any other CSS file. This relies on Unpkg’s CDN, and is always in sync, and up to date with `master`.

``` html
<link rel="stylesheet" href="https://unpkg.com/@stackoverflow/stacks" />
```

## Documentation

Stacks’ documentation is hosted at https://stackoverflow.design/

## Contributing

If you’d like to hack on Stacks and its documentation, check out our [Contributing guide](https://stackoverflow.design/guidelines/contributing).
