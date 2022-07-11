const sampleUsers = {
    "jenn-riannon": {
        name: "Jenn Riannon",
        description:
            "I'm Jenn, and I'm dedicated to helping people find the home loan that comfortably fits their needs in the San Francisco area. As a President's Club member and a trusted partner to many people in this community, I'm here to guide you through every step of the home loan process. Call me today if you're ready to get started or would like more information.",
        role: "Credit Solutions Advisor",
        nmls: "1127543",
        phone: "202.918.2132"
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
