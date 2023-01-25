const CryptoJS = require("crypto-js");

const key = CryptoJS.enc.Hex.parse("0123456789abcdef0123456789abcdef");
const ciphertext = CryptoJS.enc.Hex.parse("6bc1bee22e409f96e93d7e117393172a");

const plaintext = CryptoJS.AES.decrypt(ciphertext, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.NoPadding
});

console.log(plaintext.toString(CryptoJS.enc.Utf8));

export const joe = plaintext.toString(CryptoJS.enc.Utf8)
