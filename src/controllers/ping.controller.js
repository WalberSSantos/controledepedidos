// Services
const ErrorService = require('../services/error.service');
const LogService = require('../services/log.service');
const ResponseService = require('../services/response.service');

function ping(req, res) {

    try {
        
        LogService.info('O controlador de ping-pong foi chamado.');   

        ResponseService.success(res, { result: 'Pong' });
        
    } catch (error) {
        return ErrorService.internalError(req, res, 'O controlador de ping-pong falhou.', { message: error.message, stack: error.stack });
    }
}

module.exports = {
    ping
}