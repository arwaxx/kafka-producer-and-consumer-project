/*This code exports a function named consume that listens to a Kafka topic called 
"test-topic" for messages and creates or deletes offers 
based on the contents of the messages.*/


const { createOffer, deleteOffer } = require("../utilities/offerUtilites"); //This line imports two functions from a file called "offerUtilities.js" located in the "../utilities" directory.
const { Kafka } = require("kafkajs"); //This line imports the Kafka class from the "kafkajs" package.

function consume() {  //This line defines the consume function.
  async function consumeOffers() {  //This line defines an asynchronous function called consumeOffers that will be used to connect to the Kafka broker and consume messages from the "test-topic" topic.
    const kafka = new Kafka({  /*This line creates a new Kafka instance with a client ID of "my-app" and specifies the address of the Kafka broker.*/
      clientId: "my-app",
      brokers: ["kafka:9092"],
      consumer: {
        groupId: 'test-group',
        sessionTimeout: 30000,
        maxWaitTimeInMs: 60000,
      },
    });

    

    const consumer = kafka.consumer({ groupId: "test-group" }); //This line creates a new Kafka consumer instance with a group ID of "test-group".
    await consumer.connect();
    await consumer.subscribe({ topic: "test-topic", fromBeginning: true }); //This line subscribes to the "test-topic" topic and sets the fromBeginning option to true to ensure that all messages in the topic are consumed.
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {   //This line starts the consumer and specifies a callback function to be executed for each message consumed from the "test-topic" topic. The function extracts the contents of the message and logs them to the console, then calls either the deleteOffer or createOffer function depending on the value of the deleteFlag property in the message object.
        const obj = JSON.parse(message.value.toString());
        console.log("======================================================");
        console.log(obj); // STDOUT
        console.log("======================================================");

        if (obj.deleteFlag) {
          console.log("DELETE AN OFFER");
          deleteOffer(obj.offer, obj.amount);
        } else {
          console.log("CREATE AN OFFER");
          createOffer(obj.offer, obj.amount);
        }
      },
    });
  }
  consumeOffers();
}

module.exports = consume;


/*The offersConsumer.js file listens to a Kafka topic for incoming messages containing offer data.
 When an offer message is received, it calls the offerUtilities.js file to create or delete offers in 
 the database based on the message content.*/ 
