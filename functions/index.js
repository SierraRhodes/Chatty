const functions = require("firebase-functions");
const axios = require("axios");

exports.createChatEngineUser = functions.auth.user().onCreate((user) => {
  console.log("Creating ChatEngine user for:", user.email);
  return axios.post(
    "https://api.chatengine.io/users/",
    {
      username: user.email,
      secret: user.uid,
      email: user.email,
      first_name: user.displayName,
    },
    { headers: { "Private-Key": "cd4236bf-eeb0-4df9-a53a-04f9d199e07d" } }
  ).then((response) => {
    console.log("ChatEngine user created successfully:", response.data);
  })
  .catch((error) => {
    console.error("Error creating ChatEngine user:", error);
  });
});

exports.deleteChatEngineUser = functions.auth.user().onDelete((user) => {
  console.log("Deleting ChatEngine user for:", user.email);
  return axios.delete("https://api.chatengine.io/users/me/", {
    headers: {
      "Project-ID": "c16a06c0-9cc6-4a76-9f80-47b448adf730",
      "User-Name": user.email,
      "User-Secret": user.uid,
    },
  }).then(() => {
    console.log("ChatEngine user deleted successfully");
  })
  .catch((error) => {
    console.error("Error deleting ChatEngine user:", error);
  });
});
