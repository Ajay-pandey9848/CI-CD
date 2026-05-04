/* global module, process */
module.exports = {
  webServer: {
    command: 'npm start',
    port: 8080,
    timeout: 120000,
    reuseExistingServer: !process.env.CI,
    stdout: 'pipe',
    stderr: 'pipe'
  },
  testDir: 'e2e-tests'
}

