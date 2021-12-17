const tournamentRouter = require('./tournament');
const teamRouter = require('./team');
// const schedulerRouter = require('./scheduler');
// const authRouter = require('./auth');
// const userRouter = require('./user');
// const recordRouter = require('./record');
const authRouter = require('./auth');
const homeRouter = require('./home');
const registerRouter = require('./register');

function route(app) {
    app.use('/tournament', tournamentRouter);
    app.use('/team', teamRouter);
    // app.use('/scheduler', schedulerRouter);
    // app.use('/auth', authRouter);
    // app.use('/user', userRouter);
    // app.use('/record', recordRouter);
    app.use('/', homeRouter);
    app.use('/auth',authRouter);
    app.use('/register',registerRouter);
}

module.exports = route;
