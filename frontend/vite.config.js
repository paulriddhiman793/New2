import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Proxies API calls to the project prediction API on port 5050
export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1",       // Bind to IPv4 loopback only (avoids ::1 vs 127.0.0.1 mismatch)
    port: 3000,
    strictPort: true,        // Exit with error if port 3000 is occupied
    proxy: {
      "/predict": "http://localhost:5050",
      "/health":  "http://localhost:5050",
      "/metrics": "http://localhost:5050",
    },
  },
});
