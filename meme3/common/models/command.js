module.exports = function(Command) {
  /**
   * Get the latests image of blog
   * @param {Function(Error)} callback
   */

  Command.meme = function(callback) {
    var jsdom = require("jsdom");

    jsdom.env(
      "http://yonkiblog.com/category/humor/",
      ["http://code.jquery.com/jquery.js"],
      function (err, window) {
        if (err){
          console.log(err);
        } else {
          console.log("Successfully downloaded humor category");
        }
        var $ = window.$;
        var image_url = $(".entry-content img")[0].src;
        var response = {
          'response_type': 'in_channel',
          // 'text': 'Aquí está tu moza, pirata',
          text: "Ni pizca de gracia:\n<" + $(".entry-title a")[0].href + "|" + $(".entry-title a")[0].text + ">",
          'attachments': [{
              image_url: image_url,
              thumb_url: image_url,
              author_name: 'Yonkiblog'
          }]
        };

        callback(null, response);
      }
    );
  };
};
