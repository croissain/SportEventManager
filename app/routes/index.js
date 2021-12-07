const tournamentRouter = require('./tournament');
// const teamRouter = require('./team');
// const schedulerRouter = require('./scheduler');
// const authRouter = require('./auth');
// const userRouter = require('./user');
// const recordRouter = require('./record');
const homeRouter = require('./home');

function route(app) {
    app.use('/tournament', tournamentRouter);
    // app.use('/team', teamRouter);
    // app.use('/scheduler', schedulerRouter);
    // app.use('/auth', authRouter);
    // app.use('/user', userRouter);
    // app.use('/record', recordRouter);
    app.use('/', homeRouter);
}

module.exports = route;
