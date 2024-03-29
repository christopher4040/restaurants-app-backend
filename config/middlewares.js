module.exports = ({ env }) => [
  'strapi::errors',
  // {
  //   name: 'strapi::security',
  //   config: {
  //     contentSecurityPolicy: {
  //       useDefaults: true,
  //       directives: {
  //         'connect-src': ["'self'", 'https:'],
  //         'img-src': [
  //           "'self'",
  //           'data:',
  //           'blob:',
  //           'dl.airtable.com',
  //           `${env('AWS_BUCKET')}.s3.${env('AWS_REGION')}.amazonaws.com`
  //         ],
  //         'media-src': [
  //           "'self'",
  //           'data:',
  //           'blob:',
  //           'dl.airtable.com',
  //           `${env('AWS_BUCKET')}.s3.${env('AWS_REGION')}.amazonaws.com`
  //         ],
  //         upgradeInsecureRequests: null,
  //       },
  //     },
  //   },
  // },
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', 'res.cloudinary.com'],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'res.cloudinary.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      header: '*',
      origin: '*'
    },
  },
  // 'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
