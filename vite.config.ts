import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

 
 

export default defineConfig({
  root: './client/client',  // This points Vite to the correct folder
  plugins: [react()],
});


 