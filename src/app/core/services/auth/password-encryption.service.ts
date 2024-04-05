import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root',
})
export class PasswordEncryptionService {
  constructor() {}

  encrypt(key: any, message: any) {
    const secretKey = CryptoJS.enc.Utf8.parse(key);
    const iv = CryptoJS.lib.WordArray.random(16);

    const encryptedMessage = CryptoJS.AES.encrypt(message, secretKey, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    // Combine the iv and encrypted message into a single string (for transport or storage)
    const result = iv
      .concat(encryptedMessage.ciphertext)
      .toString(CryptoJS.enc.Base64);
    return result;
  }

  decrypt(key: any, encryptedMessage: any) {
    const secretKey = CryptoJS.enc.Utf8.parse(key);

    // Decode the base64 string back to WordArray
    const ciphertextAndIV = CryptoJS.enc.Base64.parse(encryptedMessage);

    // Extract the IV and encrypted message from the combined string
    const iv = ciphertextAndIV.clone();
    iv.sigBytes = 16; // Set the IV length to 16 bytes

    const ciphertext = ciphertextAndIV.clone();
    ciphertext.words.splice(0, 4); // Remove the IV from the ciphertext
    ciphertext.sigBytes -= 16; // Set the ciphertext length accordingly

    // Create a valid CipherParams object
    const cipherParams = CryptoJS.lib.CipherParams.create({
      ciphertext: ciphertext,
      iv: iv,
      key: secretKey,
      padding: CryptoJS.pad.Pkcs7,
    });

    // Decrypt the message
    const decryptedMessage = CryptoJS.AES.decrypt(cipherParams, secretKey, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    // Convert the decrypted message to a UTF-8 string and return it
    return decryptedMessage.toString(CryptoJS.enc.Utf8);
  }
}
