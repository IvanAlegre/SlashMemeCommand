module.exports = function(Command) {
  /**
   * Get the latests image of blog
   * @param {Function(Error)} callback
   */

  Command.meme = function(callback) {
    var response = {
      "response_type": "in_channel",
      "text": "Ni pizca de gracia:\n<http://yonkiblog.com/a-mi-todo-esto-me-ha-venido-bien/|A mi todo esto me ha venido bien>",
      "attachments": [
        {
          "image_url": "http://41.media.tumblr.com/3a6266f1637090ebac0b5682ac8591d9/tumblr_o66xfyxWbA1s1ddrjo1_500.jpg",
          "thumb_url": "http://41.media.tumblr.com/3a6266f1637090ebac0b5682ac8591d9/tumblr_o66xfyxWbA1s1ddrjo1_500.jpg",
          "author_name": "Yonkiblog"
        }
      ]
    };

    callback(null, response);

    // var jsdom = require("jsdom");

    // jsdom.env(
    //   "http://yonkiblog.com/category/humor/",
    //   ["http://code.jquery.com/jquery.js"],
    //   function (err, window) {
    //     if (err){
    //       console.log(err);
    //     } else {
    //       console.log("Successfully downloaded humor category");
    //     }
    //     var $ = window.$;
    //     var image_url = $(".entry-content img")[0].src;
    //     var response = {
    //       'response_type': 'in_channel',
    //       // 'text': 'Aquí está tu moza, pirata',
    //       text: "Ni pizca de gracia:\n<" + $(".entry-title a")[0].href + "|" + $(".entry-title a")[0].text + ">",
    //       'attachments': [{
    //           image_url: image_url,
    //           thumb_url: image_url,
    //           author_name: 'Yonkiblog'
    //       }]
    //     };

    //     callback(null, response);
    //   }
    // );
  };
};
