const config = {
    presets: ["next/babel"],
    plugins: [
        [
            "styled-components",
            {
                ssr: true,
            },
        ],
    ],
}

module.exports = config
