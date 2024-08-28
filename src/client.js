/** @type boolean */
let initialized = false;

/**
 * Connect to a websocket server.
 * @return boolean Wether you created a new client of not
 */
export function start() {
    if (initialized) {
        return false;
    }
    initialized = true;
    return initialized;
}