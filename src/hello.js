"use strict";

const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello if this shows up, then your API is working fine",
      },
      null,
      2
    ),
  };
};

module.exports = {
    handler: hello,
};
