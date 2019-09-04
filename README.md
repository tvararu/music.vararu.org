# music.vararu.org [![CircleCI](https://circleci.com/gh/tvararu/music.vararu.org.svg?style=svg)](https://circleci.com/gh/tvararu/music.vararu.org)

Install correct version of `node` using `nvm`:

```bash
nvm <.nvmrc
```

Install dependencies:

```bash
yarn global add now
```

Run locally:

```bash
now dev
open http://localhost:3000
```

Deploy:

```bash
yarn deploy
```

Run cypress end to end tests:

```bash
yarn run cypress open
```

## License

[MIT](LICENSE.txt).
