import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import eslintPlugin from 'vite-plugin-eslint';
import EnvironmentPlugin from 'vite-plugin-environment';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default ({ mode }) => {
    // eslint-disable-next-line no-undef
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return defineConfig({
        plugins: [react(), tsconfigPaths(), eslintPlugin({ cache: false }), EnvironmentPlugin('all')],
        server: {
            watch: {
                usePolling: true,
            },
            host: true, // needed for the Docker Container port mapping to work
            strictPort: true,
            port: 3000, // you can replace this port with any port
        },
    });
};
