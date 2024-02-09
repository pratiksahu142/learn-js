// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 

function logMsg(obj) {
    if (obj && obj.errMsg) {
        console.error(obj.errMsg);
    } else {
        console.warn("The provided object does not contain an errMsg property.");
    }
}

// Example usage:

let errorObject1 = { errMsg: "This is an error message." };
let errorObject2 = { message: "This object doesn't have errMsg property." };

logMsg(errorObject1); // Logs: This is an error message.
logMsg(errorObject2); // Logs: The provided object does not contain an errMsg property.