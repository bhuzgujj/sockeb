const lowercases = "abcdefghijklmnopqrstuvwxyz"
const uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"

/**
 * @typedef {{ number?: boolean, uppercase?: boolean }} RandomCharConfig
 * @typedef {{ length?: number, charConfig?: RandomCharConfig }} RandomStringConfig
 */

/**
 * Create a random string
 * @param {RandomStringConfig | undefined} config Config obj on how to create said str (default lowercase alpha of 20 characters)
 * @return string
 */
export function str(config) {
    const length = config?.length ?? 20;
    let string = "";
    for (let i = 0; i < length; i++) {
        string = string + char(config?.charConfig)
    }
    return string;
}

/**
 * Create a random character
 * @param {RandomCharConfig | undefined} config Config obj on what kind of character you can create (default lowercase alpha)
 * @return string
 */
export function char(config) {
    let characters = lowercases
    if (config?.uppercase === true) {
        characters += uppercases
    }
    if (config?.number === true) {
        characters += numbers
    }
    const rng = Math.round((Math.random() * (characters.length + 1)) - 0.5)
    return characters.charAt(rng % characters.length)
}


/**
 * Get the character set generated for a config
 * @param {RandomCharConfig | undefined} config Config obj on what kind of character you can create (default lowercase alpha)
 * @return string
 */
export function getCharacterSetForConfig(config) {
    let characters = lowercases
    if (config?.uppercase === true) {
        characters += uppercases
    }
    if (config?.number === true) {
        characters += numbers
    }
    return characters
}