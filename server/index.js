require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { validateRequestOriginMiddleware } = require("./middlewares/validateRequestOriginMiddleware");
const { initWebchatController } = require("./controllers/initWebchatController");
const { refreshTokenController } = require("./controllers/refreshTokenController");
const { allowedOrigins } = require("./helpers/getAllowedOrigins");

const app = express();
const port = 3001;

app.use(express.json());
app.use(
    cors({
        origins: allowedOrigins
    })
);
app.listen(port, () => {
    console.log(`OWL bank website server running on port ${port}`);
});

app.post("/initWebchat", validateRequestOriginMiddleware, initWebchatController);
app.post("/refreshToken", validateRequestOriginMiddleware, refreshTokenController);
