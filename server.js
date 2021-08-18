const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const bcrypt = require('bcrypt');
const db = require('./models')
// const routes = require('./controllers');
// const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// const hbs = exphbs.create({ helpers });

// const sess = {
//   secret: 'User session',
//   cookie: {},
//   resave: false,
//   saveUnititialized: true,
//   store: new SequilizeStore({
//     db: sequelize
//   })
// };

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(routes);


sequelize.sync({ force: true }).then(() => {
app.listen(PORT, () => console.log('Now listening'));
});