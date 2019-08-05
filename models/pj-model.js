const sha256 = require('js-sha256');

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope

    let getUserUsingName = (user, callback) => {

        let queryString = 'SELECT * FROM users WHERE users.name = $1';
        let values = [user.name];

        dbPoolInstance.query(queryString, values, (error, result) => {
            if( error ){
                callback(error, null);
            } else {
                if ( result.rows.length > 0 ){
                    if (sha256(user.password) === result.rows[0].password){
                        callback(null, result.rows[0]);
                    } else {
                        callback(null, 'pass');
                    }
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let createNewUser = (newUser, callback) => {

        let queryString = 'SELECT * FROM users WHERE name = $1';
        let values = [newUser.name];

        dbPoolInstance.query(queryString, values, (error, result) => {

            if ( error ){
                callback(error, null);
            }

            let hashedPass = sha256(newUser.password);
            let queryString = `INSERT INTO users (name, password) VALUES ($1, $2) RETURNING id, name`;
            let values = [ newUser.name, hashedPass ];

            if (result.rows.length === 0) {
                dbPoolInstance.query(queryString, values, (error, result) => {
                    if( error ){
                        callback (error, null);
                    } else{
                        if( result.rows.length > 0 ){
                            callback (null, result.rows[0]);
                        } else{
                            callback (null, null);
                        }
                    }
                });
            } else if ( newUser.name !== result.rows[0].name ){
                dbPoolInstance.query(queryString, values, (error, result) => {
                    if( error ){
                        callback (error, null);
                    } else{
                        if( result.rows.length > 0 ){
                            callback (null, result.rows[0]);
                        } else{
                            callback (null, null);
                        }
                    }
                });
            } else {
                callback(null, 'taken');
            }
        });
    };

    let getUserUsingId = (userId, callback) => {

        let queryString = 'SELECT * FROM users WHERE id = $1';
        let values = [userId];

        dbPoolInstance.query(queryString, values, (error, result) => {
            if ( error ){
                callback(error, null);
            } else {
                if ( result.rows.length > 0 ){
                callback(null, result.rows[0]);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let createSuggestions = (newSuggestions, callback) => {
      console.log("Suggesttiiiiooooonnnn~~~")
        let queryString = `INSERT INTO suggestion (title, composer, reason) VALUES ($1, $2, $3)`;
        let values = [
            newSuggestions.title,
            newSuggestions.composer,
            newSuggestions.reason
            ];

        dbPoolInstance.query(queryString, values, (error, result) => {
            if( error ){
                callback(error, null);
            } else {
                if( result.rows.length > 0 ){
                    callback(null, result.rows[0]);
                } else{
                    callback(null, null);
                }
            }
        });
    };
    //query Select from database to front;
    let queryLibrary = (newLibrary, callback) => {
      console.log("query library in progress");
      let queryStatement = `SELECT * FROM songs`;

      dbPoolInstance.query(queryStatement, (error, results) => {
          if( error) {
            callback(error, null);
          } else {
            if (results.rows.length > 0) {
              console.log("completed query success");
              // console.log(results.rows);
              callback(null, results.rows);
            } else {
            callback(null, null);
            }
          }
      })
    };

    let createLibrary = (newLibrary, callback) => {
      console.log("Libraryyyy~~~~")
      let queryString = `INSERT INTO songs (title, composer, genre, category, performance_date) VALUES ($1, $2, $3, $4, $5)`;
      let values = [
        newLibrary.title,
        newLibrary.composer,
        newLibrary.genre,
        newLibrary.category,
        newLibrary.performance_date
      ];


      dbPoolInstance.query(queryString, values, (error, result) => {
        if( error ){
          callback(error, null);
        } else {
            if( result.rows.length > 0 ){
              callback(null,result.rows[0]);
            } else {
              callback(null, null);
            }
        }
      });
    };

  return {
    // newLibrary,
    getUserUsingName,
    createNewUser,
    getUserUsingId,
    createSuggestions,
    createLibrary,
    queryLibrary
  };
};
