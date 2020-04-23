/**
 * Método genérco para retornar mensagens do servidor.
 * 
 * @param {Object} response Objeto de resposta do servidor
 * @param {Number} status Status da resposta do servidor
 * @param {Object} content Conteúdo da resposta do servidor
 */
function result(response, status, content) {
    response.status(status);
    response.json(content);
}

/**
 * Retorna uma resposta 200 (OK).
 * 
 * @param {Object} response Objeto de resposta do servidor
 * @param {Object} content Conteúdo da resposta do servidor
 */
function success(response, content = {}) {

    const body = {
        success: true,
        data: content
    }

    return result(response, 200, body);
}

/**
 * Retorna uma resposta 200 sem corpo(OK).
 * 
 * @param {Object} response Objeto de resposta do servidor
 */
function ok(response) {
    return response.sendStatus(200);
}



/**
 * Retorna uma resposta 400 (BAD REQUEST).
 * 
 * @param {Object} response Objeto de resposta do servidor
 * @param {Object} error Objeto de erro do servidor
 */
function badRequest(response, error) {

    const body = {
        success: false,
        error: error
    }

    return result(response, 400, body);
}

/**
 * Retorna uma resposta 401 (UNAUTHORIZED).
 * 
 * @param {Object} response Objeto de resposta do servidor
 * @param {Object} error Objeto de erro do servidor
 */
function unauthorized(response, error) {

    const body = {
        success: false,
        error: error
    }

    return result(response, 401, body);
}

/**
 * Retorna uma resposta 404 (NOT FOUND).
 * 
 * @param {Object} response Objeto de resposta do servidor
 * @param {Object} error Objeto de erro do servidor
 */
function notFound(response, error) {

    const body = {
        success: false,
        error: error
    }

    return result(response, 404, body);
}

/**
 * Retorna uma resposta 500 (INTERNAL SERVER ERROR).
 * 
 * @param {Object} response Objeto de resposta do servidor
 * @param {Object} error Objeto de erro do servidor
 */
function internalError(response, error) {

    const body = {
        success: false,
        error: error
    }

    return result(response, 500, body);
}

module.exports = {
    ok,
    success,
    badRequest,
    unauthorized,
    notFound,
    internalError
}
