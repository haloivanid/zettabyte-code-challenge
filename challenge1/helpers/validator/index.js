const Ajv = require('ajv').default
const yaml = require('js-yaml');
const fs = require('fs');
const CustomError = require('../customErrorHelper');

const ajv = new Ajv()

const schema = yaml.load(fs.readFileSync('./helpers/validator/schema.yml', 'utf8'))

function objectValidator(schema_name, object) {
    const validator = ajv.compile(schema[schema_name])
    const isValid = validator(object)
    if (!isValid) {
        throw new CustomError(421, "ERR_VALIDATION",
            "Wrong Object",
            validator.errors.map(err => `${err.instancePath} ${err.message}`).join())
    }
}

module.exports = objectValidator
