/** @type {import('jest').Config} */
const config = {
    preset: "ts-jest",
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        ".(css|less|scss)$": "identity-obj-proxy",
    },
};

export default config;