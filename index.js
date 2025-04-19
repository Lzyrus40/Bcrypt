const bcrypt = require("bcrypt");

const password1 = "a2klxzNmBHhBzwNT7uRslULqqydcETVtFVrHZBIPBfHDnio3AUTVhMphR95NguDDFRndTpwC";
const password2 = "a2klxzNmBHhBzwNT7uRslULqqydcETVtFVrHZBIPBfHDnio3AUTVhMphR95NguDDFRndTpwCpass";

const main = async () => {
    const hash1 = await bcrypt.hash(password2, 10);
    const hash2 = await bcrypt.hash(password1, 10);

    const isverified = await bcrypt.compare(password1,hash1);
    const isverified2 = await bcrypt.compare(password2,hash2);
    console.log(isverified);
    console.log(isverified2)
}
main();