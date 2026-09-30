import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: false,

  retries: 0,

  workers: undefined,

  reporter: 'html',

  use: {
    trace: 'on-first-retry',
    headless: false,
    viewport: null,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
      browserName: 'chromium',
      viewport: null,
      launchOptions: {
        args: ['--start-maximized'],
      },
    },
    },

/*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    */
  ],
});
