function sendResponse(data, status = 200) {
    const response = new Twilio.Response();
    response.setStatusCode(status);
    response.appendHeader("Access-Control-Allow-Origin", "*");
    response.appendHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
    response.appendHeader("Content-Type", "application/json");
    response.setBody(data);
    return response;
}

exports.handler = async function (context, event, callback) {
    const { roomSid, rules } = event;

    const client = context.getTwilioClient();

    try {
        const recordingRulesResponse = await client.video.rooms(roomSid).recordingRules.update({ rules });
        return callback(
            null,
            sendResponse({
                recordingRulesResponse
            })
        );
    } catch (err) {
        return callback(
            null,
            sendResponse(
                {
                    message: "Cannot update recording rules"
                },
                400
            )
        );
    }
};
