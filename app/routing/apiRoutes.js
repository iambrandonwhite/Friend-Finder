// LOAD DATA
var friendProfile = require("../data/friends");

// ROUTING
module.exports = function (app) {
  
  // API GET Requests
  app.get("/api/friends", function (req, res) {
    res.json(friendProfile);
  });

  // API POST Requests
  app.post("/api/friends", function (req, res) {
    console.log(req.body);

    // Object to hold the "best match"
    var bestMatch = {
      name: '',
      photo: '',
      friendDifference: 1000
    };

    // Take the result of the user's survey POST and parse it
    var userData = req.body;
    var userScores = userData.scores;

    // [1]
    for (var i = 0; i < friendProfile.length; i++) {
      
      // [2]
      var totalDifference = 0;
      console.log(friendProfile[i].name);

      // [3]
      for (var j = 0; j < friendProfile[i].scores[j]; j++) {
        
        totalDifference = 0;
        
        // [4]
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendProfile[i].scores[j]));


        // [5]
        if (totalDifference <= bestMatch.friendDifference) {

          // [6]
          bestMatch.name = friendProfile[i].name;
          bestMatch.photo = friendProfile[i].photo;
          bestMatch.friendDifference = totalDifference;

        }
      }
    }

    // [7]
    friendProfile.push(userData);

    // [8]
    res.json(bestMatch);

    console.log(bestMatch);

  });

};
