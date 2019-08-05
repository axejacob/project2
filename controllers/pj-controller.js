const sha256 = require('js-sha256');

module.exports = (db) => {

    let secret = 'jarvisismycopilot'
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let showIndex = (request, response) => {
        let cookie = request.cookies;
        if (cookie.loggedin) {
            response.redirect('/home')
        } else {
            response.render('index');
        }
    };

    let showLogin = (request, response) => {
        response.render('login');
    };

    let checkLogin = (request, response) => {
        let currentUser = request.body;

        db.playjay.getUserUsingName(currentUser, (error, user) => {
            if (error) {
                console.log("error in getting file", error);
            } else {
                if (user === 'pass') {
                    response.send('wrong userpass')
                } else if (user) {
                    let hashedCookie = sha256(user.id + 'logged_id' + secret);
                    response.cookie('user_id', user.id);
                    response.cookie('loggedin', hashedCookie);
                    response.redirect('/home');
                } else {
                    response.send('Invalid UserId')
                }
            }
        });
    };


    //Register, create username etc
    let showCreateUser = (request, response) => {
      response.render('register');
    };

    let createUser = (request, response) => {
        let newUser = request.body;
        db.playjay.createNewUser(newUser, (error, user) => {
            if (error) {
                console.log("error in getting file", error);

            } else if (user === 'taken'){
                response.send('username taken!')
            } else {
                let hashedCookie = sha256(user.id + 'logged_id' + secret);
                response.cookie('user_id', user.id);
                response.cookie('loggedin', hashedCookie);

                let dataSet = {
                    user : user
                }
                response.render('welcome', dataSet);
            }
        });
    };


    let showHome = (request, response) => {
        let userId = request.cookies.user_id;
        let storedCookie = request.cookies.loggedin;

        if (storedCookie === undefined) {
            response.send('please log in!')
        } else {
            db.playjay.getUserUsingId(userId, (error, user) => {
                if (error) {
                    console.log("not found!", error);

                } else {
                    let currentCookieSesh = sha256(userId + 'logged_id' + secret)
                    if ( storedCookie === currentCookieSesh ) {
                        let dataSet = {
                            user : user
                        }
                        response.render('home', dataSet);
                    } else {
                        response.send('wrong user, who are you!')
                    }
                }
            });
        }
    };


    let showCreateSuggestions = (request, response) => {
        let userId = request.cookies.user_id;
        let storedCookie = request.cookies.loggedin;

        if (storedCookie === undefined) {
            response.send('You need to login.!')
        } else {
            db.playjay.getUserUsingId(userId, (error, user) => {
                if (error) {
                    console.log("not found!", error);

                } else {
                    let currentCookieSesh = sha256(userId + 'logged_id' + secret)
                    if ( storedCookie === currentCookieSesh ) {
                        let dataSet = {
                            user : user
                        }
                        response.render('suggestions', dataSet);
                    } else {
                        response.send('wrong user, who are you!')
                    }
                }
            });
        }
    };

    let createSuggestions = (request, response) => {
        let cookie = request.cookies;
        let newSuggestion = request.body;

        db.playjay.createSuggestions(newSuggestion, (error, user) => {
            if (error) {
                console.log("not found!", error);

            } else {
                let currentCookieSesh = sha256(cookie.user_id + 'logged_id' + secret)
                if ( cookie.loggedin === currentCookieSesh )
                {
                    response.redirect('/suggestions');
                } else {
                    response.send('wrong user, who are you!')
                }
            }
        });
    };

    //CREATE LIBRARY PAGE
    let showCreateLibrary = (request, response) => {
      let userId = request.cookies.user_id;
      let storedCookie = request.cookies.loggedin;
      db.playjay.queryLibrary( userId, (error, results) => {
        if (error) {
                console.log("not found!", error);

              } else {
         let dataSet = {
           user: userId,
           data: results,
         }
          response.render('library', dataSet);
      }
      });
      // if (storedCookie === undefined) {
      //     response.send('You need to login!')
      // } else {
      //     db.playjay.getUserUsingId(userId,(error, user) => {
      //       if (error) {
      //         console.log("not found!", error);
      //
      //       } else {
      //         let currentCookieSesh = sha256(userId + 'logged_id' + secret)
      //         if (storedCookie === currentCookieSesh )  {
      //           let dataSet = {
      //             user : user
      //            // songs: results.rows
      //           }
      //           response.render('library', dataSet);
      //         } else {
      //           response.send('wrong user, who are you!')
      //         }
      //       }
      //     });
      // }
    };

    let createLibrary = (request, response) => {
      let cookie = request.cookies;
      let newLibrary = request.body;

      db.playjay.createLibrary(newLibrary, (error, user) => {
        if(error) {
          console.log("not found!", error);

        } else {
          let currentCookieSesh = sha256(cookie.user_id + 'logged_id' + secret)
          if (cookie.loggedin === currentCookieSesh ) {
            response.redirect('/library');

          } else {
            response.send('wrong user, who are you!')
          }
        }
      });
    };

    let showUserProfile = (request, response) => {

        let userId = request.cookies.user_id;
        let storedCookie = request.cookies.loggedin;

        if (storedCookie === undefined) {
            response.send('you need to login!')
        } else {
            db.playjay.getUserUsingId(userId, (error, user) => {
                if (error) {
                    console.log("not found!", error);

                } else {
                    let currentCookieSesh = sha256(userId + 'logged_id' + secret)
                    if ( storedCookie === currentCookieSesh ) {
                        let dataSet = {
                            user : user

                        }
                        response.render('user', dataSet);
                    } else {
                        response.send('wrong user, who are you!')
                    }
                }
            });
        }
    };

    let logout = (request, response) => {
      response.clearCookie('user_id');
      response.clearCookie('loggedin');
      response.redirect('/index');
    };

    let redirect = (request, response) => {
      response.redirect('/index');
    };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    showIndex,
    showLogin,
    checkLogin,
    showCreateUser,
    createUser,
    showHome,
    showCreateSuggestions,
    showCreateLibrary,
    createLibrary,
    createSuggestions,
    showUserProfile,

    logout,
    redirect,

  };

}
