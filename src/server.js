require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const parser = require('body-parser');
const environment = require('./configuration/environment');

const LogService = require('./services/log.service');


const application = express();

application.use(cors());
application.use(parser.json({ limit: '50mb' }));
application.use(parser.urlencoded({ limit: '5mb', extended: false }));

application.use('/api', routes);

application.listen(environment.PORT || 3000, () => { 
    LogService.info(`Api rodando na porta ${environment.PORT}.`);
});
