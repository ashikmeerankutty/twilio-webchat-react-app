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
    }
};

const getAgentInfo = async (req, res) => {
    const { userId } = req.body;
    if (!sampleUsers[userId]) {
        return res.status(400).send({
            status: "User doesn't exist"
        });
    }
    return res.send({ ...sampleUsers[userId] });
};

module.exports = { getAgentInfo };
