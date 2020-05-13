import AWS from "aws-sdk";

const ses = new AWS.SES({ region: "us-east-2" });

async function sendMail(event, context) {
  const params = {
    Source: "ethan.blumenthal@gmail.com",
    Destination: {
      ToAddresses: [recipient],
    },
    Message: {
      Body: {
        Text: {
          Data: "Hello from Ethan!",
        },
      },
      Subject: {
        Data: "Test Email",
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export const handler = sendMail;
