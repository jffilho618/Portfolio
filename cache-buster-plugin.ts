import type { Plugin } from 'vite';

export function cacheBusterPlugin(): Plugin {
  return {
    name: 'cache-buster',
    transformIndexHtml(html) {
      const timestamp = Date.now();
      return html.replace(
        '<script type="module" src="/src/main.tsx"></script>',
        `<script type="module" src="/src/main.tsx?v=${timestamp}"></script>`
      );
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
        next();
      });
    }
  };
}
