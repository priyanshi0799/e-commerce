const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views/ejs-views');

app.use(express.static(path.join(__dirname, 'public')));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', (req, res, next) => {
    console.log('This always runs');
    next();
});

//! will add /admin to all adminRoutes, hence do the filtering
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3001);
