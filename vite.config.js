import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: './', // 상대 경로로 변경 → 정적 배포 시 깨짐 방지
});
