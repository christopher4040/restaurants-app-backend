module.exports = [
  'strapi::errors',
  // {
  //   name: 'strapi::security',
  //   config: {
  //     contentSecurityPolicy: {
  //       useDefaults: true,
  //       directives: {
  //         'connect-src': ["'self'", 'https:'],
  //         'img-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com'],
  //         'media-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com'],
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
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'strapi.io',
            'yourBucketName.s3.yourRegion.amazonaws.com',
            `${env('AWS_BUCKET')}.s3.${env('AWS_REGION')}.amazonaws.com`
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'strapi.io',
            'yourBucketName.s3.yourRegion.amazonaws.com',
            `${env('AWS_BUCKET')}.s3.${env('AWS_REGION')}.amazonaws.com`
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
