const Jimp = require("jimp")
const fs = require("fs")
exports.run = async (client, message, args) => {

Jimp.read("https://cdn.glitch.com/b94d084b-e5f6-4bf9-bc57-563c25d6c68e%2Fimagem%20(1).png?1538783939685", function (err, image) {
    if (err) throw err;
    Jimp.loadFont(Jimp.FONT_SANS_64_BLACK).then(function (font) {
    
let gs = args.join(" ")
if (!gs) return message.channel.send("Escreva alguma coisa")
    image.resize(719, 519)
        image.print(font, 10, 20, gs, 750)
        image.write("maikaimg/laranjo.jpg")

  message.channel.send({
  files: [{
    attachment: 'maikaimg/laranjo.jpg',
    name: 'laranjo.jpg'
  }]
})

          setTimeout(function () {
                fs.unlink("maikaimg/laranjo.jpg");
        }, 5000);
      })
})

}
 module.exports.help = {
  name: "laranjo"
 }