# ⚡ Vite + ⚛ React

![Vite + React](https://fullstackcode.dev/wp-content/uploads/2022/01/vitereact.png)

## 🔥 Usage

```sh
git clone `https://github.com/mpAdriel/vite-react.git`
cd `vite-react`
npm `install`
npm run `dev`
```

## 🌈 Features

- [Vite](https://vitejs.dev/) + [React](https://es.reactjs.org/)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) (standard)
- [React Router Dom](https://reactrouter.com/)
- [Redux](https://es.redux.js.org/)
- File to make API requests using [fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch) (file - `API.js`)
- File to validations forms (file - `Validation.js`)
- Translations using [i18n-js](https://www.npmjs.com/package/i18n-js) (file - `i18n.js`)
- Environment variables
- Form Validations
- Use CSS and SCSS

## 📦 Generate build

To build development:

```sh
cd vite-react
npm run build
```

To build production:

```sh
cd vite-react
npm run build:pro
```

To preview this build run this:

```sh
cd vite-react
npm run preview
```

## 👨🏼‍💻 Scripts

| Command             | What does that do?                            |
| ------------------- | --------------------------------------------- |
| npm run `dev`       | Run project                                   |
| npm run `pro`       | Run project (mode producion )                 |
| npm run `build`     | Generate build development                    |
| npm run `build:pro` | Generate build production                     |
| npm run `preview`   | Run preview from build generated              |
| npm run `format`    | Format all code with Prettier                 |
| npm run `lint`      | Fix code with ESLint (files `.js` and `.jsx`) |

```json
{
  "dev": "vite",
  "pro": "vite --mode production",
  "build": "vite build --mode development",
  "build:pro": "vite build --mode production",
  "preview": "vite preview --port 4020",
  "format": "prettier --write .",
  "lint": "eslint --fix . --ext .js,.jsx"
}
```

## ♻ Maintainer

- [Adriel Martín](https://github.com/mpAdriel)

## ⚙ My settings.json vscode

```json
{
  "workbench.colorTheme": "Aura Soft Dark",
  "workbench.iconTheme": "icons",
  "editor.guides.bracketPairs": true,

  "git.ignoreMissingGitWarning": true,

  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "eslint.alwaysShowStatus": true,
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  "javascript.updateImportsOnFileMove.enabled": "always",
  "svg.preview.mode": "svg"
}
```

## 🙌 My extensions vscode

- Aura Theme
- Better Comments
- Error Lens
- ES7 + React/Redux/React-Native snippets
- ESLint
- Icons
- Live Server
- Prettier - Code formatter
- Quokka.js
- SVG
- Thunder Client
- XML
