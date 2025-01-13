import jwt from "jsonwebtoken";

const generateJwtToken = (userId, res) => {
    try {
        const token = jwt.sign({ userId }, process.env.SECRET_KEY, { expiresIn: "30d" });
        console.log(token)

        res.cookie("jwt", token, {
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
            httpOnly: true,
            sameSite: process.env.NODE_ENV === "production" ? "None" : "Strict",
            secure: process.env.NODE_ENV === "production",
            path: "/",
        });

        return token;
    } catch (error) {
        console.error("Error generating JWT token:", error);
        throw new Error("Token generation failed");
    }
};

export default generateJwtToken;
