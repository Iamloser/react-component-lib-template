import type {Config} from 'jest';

const config: Config = {
    preset: "ts-jest",
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        ".(css|less|scss)$": "identity-obj-proxy",
    },
};

export default config;