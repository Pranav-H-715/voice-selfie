var sr = window.webkitSpeechRecognition
var rec = new sr()



function start_btn(){
    document.getElementById("textbox").innerHTML = ""
    rec.start()
}
rec.onresult=function(e){
    console.log(e)
    var res = e.results[0][0].transcript
    console.log(res)
    document.getElementById("textbox").innerHTML = res
    if (res == "take my selfie")
        {
            system_speak()
        }
}
function system_speak(){
    var ss = window.speechSynthesis
    var selfie_talk = "Taking your selfie in 3 seconds"
    var talk = new SpeechSynthesisUtterance(selfie_talk)//SpeechSynthesisUtterance - is the function of an API that will convert text to speech.
    ss.speak(talk)
    Webcam.attach(camera)
    setTimeout(function(){
        take_selfie()
        save()
    },3000)
    camera = document.getElementById("camera")
    Webcam.set({
        width : 350,
        height : 250,
        image_format : "png",
        png_quality : 90
    })
}
function take_selfie(){
    Webcam.snap(function(data){
        document.getElementById("result").innerHTML = "<img src= '" + data + "' id='selfie_image'>"
        
    })
}
function save(){
    var link = document.getElementById("link")
    var self_image = document.getElementById("selfie_image").src
    link.href = self_image
    link.click()
}