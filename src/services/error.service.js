// Services
const LogService = require('./log.service');
const ResponseService = require('./response.service');

/**
 * Emite um erro de requisição inválida
 * 
 * @param {Object} request Objeto de requisição
 * @param {Object} response Objeto de resposta
 * @param {String} message Mensagem personalizada de erro
 * @param {Object} error Objeto de erro
 */
function invalidRequest(request, response, message, error) {

    // Loga o erro com o body da requisição
    LogService.error(message, request.originalUrl, error);

    // Emite o erro de requisição inválida
    ResponseService.badRequest(response, { ...error, message });
}

/**
 * Emite um erro interno do servidor (Código: 202).
 * 
 * @param {Object} request Objeto de requisição
 * @param {Object} response Objeto de resposta
 * @param {String} message Mensagem personalizada de erro
 * @param {Object} error Objeto de erro
 */
function internalError(request, response, message, error) {

    // Loga o erro com o body da requisição
    LogService.error(message, request.originalUrl, error);

    // Emite o erro de requisição inválida
    ResponseService.internalError(response, error);
}

/**
 * Emite um erro interno do servidor (Código: 203).
 * 
 * @param {Object} request Objeto de requisição
 * @param {Object} response Objeto de resposta
 * @param {String} message Mensagem personalizada de erro
 * @param {Object} error Objeto de erro
 */
function notFound(request, response, message, error) {

    // Loga o erro com o body da requisição
    LogService.error(message, request.originalUrl, error);

    // Emite o erro de requisição inválida
    ResponseService.notFound(response, error);
}

/**
 * Emite um erro de autorização (Código: 401).
 * 
 * @param {Object} request Objeto de requisição
 * @param {Object} response Objeto de resposta
 * @param {String} message Mensagem personalizada de erro
 * @param {Object} error Objeto de erro
 */
function unauthorized(request, response, message, error) {

    // Loga o erro com o body da requisição
    LogService.error(message, request.originalUrl, error);

    // Emite o erro de requisição inválida
    ResponseService.unauthorized(response, { ...error, message });
}

module.exports = {
    invalidRequest,
    internalError,
    notFound,
    unauthorized
}
