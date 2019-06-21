

module.exports = {
    assertMandatoryParam: (parameter) => {
        if(!process.env[parameter]) {
            throw new Error(`Missing mandatory ENV variable ${parameter}`);
        }
    }
}
