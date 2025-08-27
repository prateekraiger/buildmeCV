export default {
  apps: [{
    name: 'buildmecv-dev',
    script: 'vite',
    args: 'dev --host 0.0.0.0 --port 3000',
    cwd: '/home/user/webapp',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    }
  }]
};