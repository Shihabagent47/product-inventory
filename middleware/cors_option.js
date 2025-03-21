const corsOptions = {
    origin: 'https://example.com', // Allow only this domain
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type,Authorization'
  };

module.exports=corsOptions;