import { spawn } from 'child_process';

console.log('Starting Vite development server...');

const viteProcess = spawn('npm', ['run', 'dev'], {
  cwd: '/home/user/webapp',
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_ENV: 'development'
  }
});

viteProcess.on('error', (error) => {
  console.error('Failed to start Vite:', error);
});

viteProcess.on('exit', (code) => {
  console.log(`Vite process exited with code ${code}`);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down...');
  viteProcess.kill();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('Shutting down...');
  viteProcess.kill();
  process.exit(0);
});