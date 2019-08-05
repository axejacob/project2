module.exports = (app, allModels) => {
  /*
   *  =========================================
   *    ALL ROUTES FOR PLAYJAY CONTROLLER
   *  =========================================
   */
  // require the controller
  const playJayControllerCallbacks = require('./controllers/pj-controller')(allModels);

  app.get('/index', playJayControllerCallbacks.showIndex);

  app.get('/login', playJayControllerCallbacks.showLogin);
  app.post('/home', playJayControllerCallbacks.checkLogin);

  app.get('/register', playJayControllerCallbacks.showCreateUser);
  app.post('/register', playJayControllerCallbacks.createUser);


  app.get('/home', playJayControllerCallbacks.showHome);

  app.get('/suggestions', playJayControllerCallbacks.showCreateSuggestions);
  app.post('/suggestions', playJayControllerCallbacks.createSuggestions);

  //make library
  app.get('/library', playJayControllerCallbacks.showCreateLibrary)
  app.post('/library', playJayControllerCallbacks.createLibrary)

  app.get('/profile', playJayControllerCallbacks.showUserProfile);

  app.post('/logout', playJayControllerCallbacks.logout);

  app.get('*', playJayControllerCallbacks.redirect);
};
