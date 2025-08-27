export default {
  apps: [{
    name: 'buildmecv-dev',
    script: 'npm',
    args: 'run dev',
    cwd: '/home/user/webapp',
    env: {
      NODE_ENV: 'development'
    }
  }]
};