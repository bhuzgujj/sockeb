import {char, str, getCharacterSetForConfig} from "../src/random.js";
import {describe, test} from "node:test";
import assert from "node:assert";

const configs = [
    {number: true, uppercase: true},
    {number: true},
    {uppercase: true},
    {},
    undefined
];
for (const config of configs) {
    describe(`using a char config: ${JSON.stringify(config)}`, ()=> {
        test(`when requesting a random character, it should give you a character`, () => {
            for (let i = 0; i < 1000; i++) {
                const c = char(config);
                assert.strictEqual(c.length, 1)
            }
        });
        
        test(`when generating a string a config, it generate random str`, () => {
            const conf = {
                length: 50,
                charConfig: config
            };
            for (let i = 0; i < 100; i++) {
                assert.notEqual(str(conf), str(conf))
            }
        });
        
        test(`when selecting a character config, it should return from the character sets`, { timeout: 5000 }, () => {
            const ref = new Set(getCharacterSetForConfig(config));
            const sets = new Set(getCharacterSetForConfig(config));
            while(sets.size !== 0) {
                const c = char(config);
                assert.strictEqual(ref.has(c), true)
                sets.delete(c)
            }
        })
    })
}