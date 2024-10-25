const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AfMHoptgq53YkThLVp4jje3mq2m7Ja9CNyJ178BCBCA7uajhqT1BrbZrI4ElgWAPCN-J8ob1FJgiwczK",
  client_secret: "EGDgcpyhsDqXrT04E_P3B78E9Z6Gz7CnK2TVH2U95n_o_75PLjtNcZGb4xK5QnV9N429f3pp1syBZlwd",
});

module.exports = paypal;