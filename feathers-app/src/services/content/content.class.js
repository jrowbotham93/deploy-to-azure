const { Service } = require('feathers-mongodb');

exports.Content = class Content extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('content');
    });
  }
};
