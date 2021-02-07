# Reak
Reaksi tanpa "si" nanti dibaca orang cedal sebagai leak, tapi ini ga ada sangkut pautnya sama kesenian itu. Lalu repo buat apa sih ini?
Proof of work React App sebagai front-end dari RESTful API, fitur meliputi: Create User, Login, Show Product, Create Product, Update Product, Delete Product.
Bukan Aplikasi Web semestinya, hanya ntuk belajar saja.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

Catatan:

- Menggunakan hooks hanya di komponen level.
- Komponen memanggil hooks dengan urutan, sehingga akan memudahkan render jika hooks tidak berada di dalam fungsi atau kondisi.
- Komponen dapat berisi hooks sebanyak yang dibutuhkan untuk render, bahkan memiliki hooks sendiri/ hooks khas (sebuah fungsi berperan sebagai hooks).
- Hooks khas komponen dapat menggunakan  hooks standar sebarapun banyaknya untuk menghasilkan data yang diperlukan. Namun tetap menggunakan aturan standar penggunaan hooks, yaitu tidak digunakan di dalam fungsi (kecuali hooks custom/ hooks khas yang bagaimanapun tetap sebuah fungsi yang menggunakan hooks standar) ataupun kondisi.
- Hooks khas dapat digunakan sebagai logic untuk suatu komponen atau digunakan untuk berbagai komponen yang menggunakan data yang sama.
- Akses REACT_APP_NOT_SECRET_CODE variabel env di file js menggunakan process.env.REACT_APP_NOT_SECRET_CODE.
- Atau gunakan variabel env standar NODE_ENV dengan process.env.NODE_ENV
    - npm start = 'development'
    - npm test = 'test'
    - npm run build = 'production'
- Prioritas pemanggilan variabel env
    - npm start: .env.development.local, .env.local, .env.development, .env
    - npm run build: .env.production.local, .env.local, .env.production, .env
    - npm test: .env.test.local, .env.test, .env (note .env.local is missing)