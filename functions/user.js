const sampleUsers = {
    "jenn-riannon": {
        name: "Jenn Riannon",
        profilePic: "https://www.random-name-generator.com/images/faces/female-white/49.jpg",
        description:
            "I'm Jenn, and I'm dedicated to helping people find the home loan that comfortably fits their needs in the San Francisco area. As a President's Club member and a trusted partner to many people in this community, I'm here to guide you through every step of the home loan process. Call me today if you're ready to get started or would like more information.",
        role: "Credit Solutions Advisor",
        nmls: "1127543",
        phone: "202.918.2132",
        address: "2418 Simpson Street, Fiatt, Illinois"
    },
    "keith-cox": {
        name: "Keith Cox",
        profilePic: "https://www.random-name-generator.com/images/faces/male-white/03.jpg",
        description:
            "I'm Keith, and I'm dedicated to helping people find the home loan that comfortably fits their needs in the San Francisco area. As a President's Club member and a trusted partner to many people in this community, I'm here to guide you through every step of the home loan process. Call me today if you're ready to get started or would like more information.",
        role: "Credit Solutions Advisor",
        nmls: "1237543",
        phone: "609.278.6558",
        address: "4367 Dark Hollow Road, Trenton, New Jersey"
    },
    "patric-griffin": {
        name: "Patrick M Griffin",
        profilePic: "https://www.random-name-generator.com/images/faces/male-white/03.jpg",
        description:
            "I'm Patric, and I'm dedicated to helping people find the home loan that comfortably fits their needs in the San Francisco area. As a President's Club member and a trusted partner to many people in this community, I'm here to guide you through every step of the home loan process. Call me today if you're ready to get started or would like more information.",
        role: "Credit Solutions Advisor",
        nmls: "22035588",
        phone: "662-281-6963",
        address: "2778 Oxford Court, Oxford, MS 38655"
    }
};

const sendResponse = (data, status = 200) => {
    const response = new Twilio.Response();
    response.setStatusCode(status);
    response.appendHeader("Access-Control-Allow-Origin", "*");
    response.appendHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
    response.appendHeader("Content-Type", "application/json");
    response.setBody(data);
    return response;
};

exports.handler = function (context, event, callback) {
    const { userId } = event;

    if (!sampleUsers[userId]) {
        return callback(null, sendResponse("User doesn't exist", 400));
    }
    return callback(null, sendResponse({ ...sampleUsers[userId] }));
};
