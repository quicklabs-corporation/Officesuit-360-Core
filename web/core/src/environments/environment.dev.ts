// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// `.env.ts` is generated by the `npm run env` command
import env from './.env';

export const environment = {
  production: false,
  version: env.npm_package_version + '-dev',
  serverUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'fr-FR'],
  api: {
    auth: '/api/auth',
    whitelabel: '/api/tracking/whiteLabel',
    register: '/api/tracking/register',
    tracking: '/api/tracking',
    user: '/api/tracking/user',
    role: '/api/tracking/role',
    url: '/api/tracking/',
    circle: '/api/tracking/circle',
    polygon: '/api/tracking/polygon',
    line: '/api/tracking/line',
    driver : '/api/tracking/driver'
  },
  socket: { tcp: 1865, alert_topic: 'TRACK/ALERT/', host: 'dev.simplytrack.in', ws: 1875, live_topic: "TRACK/LOC/" },
  logger: {
    debug: {
      enabled: true,
    },
    info: {
      enabled: true,
    },
    warn: {
      enabled: true,
    },
    error: {
      enabled: true,
    },
  },
  idleTimeOut: {
    idle: 600,
    timeout: 60,
    ping: 120,
  }
};
