const { Kafka } = require("kafkajs");

function produce({offer, amount}, deleteFlag) {
  const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["kafka:9092"],
  });

  const producer = kafka.producer();

  async function sendMessage() {
    await producer.connect();
    await producer.send({
      topic: "test-topic",
      messages: [
        {
          key: "offer",
          value: JSON.stringify({
            offer,
            amount,
            deleteFlag,
          }),
        },
      ],
    });
    console.log("OFFER SENT!!!!!!!!");
    await producer.disconnect();
  }

  sendMessage();
}

module.exports = produce;

/*a function named produce is defined, which is used to send messages to the Kafka broker. The function 
takes two parameters, offer and amount, which are used to create a message payload.
 The produce function creates a new Kafka producer instance,connects to the broker, 
 sends a message to the test-topic topic, and then disconnects from the broker.*/