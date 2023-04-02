function generateCode(length) {
  let code = "";
  let schema = "0123456789";

  while (code.length !== length) {
    code += schema.charAt(Math.floor(Math.random() * schema.length));
  }
  return code;
}

module.exports = generateCode;
