const path = require("path")

module.exports = {
    target: "serverless",
    webpack: config => {
        config.resolve.modules = [
            path.resolve(__dirname, "src"),
            "node_modules",
        ]

        return config
    },
}
