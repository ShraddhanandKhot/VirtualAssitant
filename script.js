let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
function speak(text)
{
    let text_speak= new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
  
    window.speechSynthesis.speak(text_speak)
}
function wishMe()
{
    let day= new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good morning shraddhanand")

    }else if(hours>=12 && hours<16){
        speak("good afternoon shraddhanand")
    }
    else{
        speak("good evening Shraddhanand" )
    }
}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition=window.speechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    console.log(event)
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start()

})

function takeCommand(message){
    if(message.includes("hello") || message.includes("hey") || message.includes("hey shraddh")){
        speak("hello , what can I help you?")
    }
    else if(message.includes("who are you")){
        speak("I am viertual assistant,created by Shraddhanand")

    }
    else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com/")

    }
    else if(message.includes("open google")){
        speak("opening google")
        window.open("https://www.google.co.in/")

    }
     else if(message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com/")

    }
    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator://")

    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp")
        window.open("whatsapp://")

    }
    else if(message.includes("play song")||message.includes("on youtube"))
    {
        let text1="playing  "+message.replace("play","")+"on youtube"
        speak(text1)
        window.open(`https://www.youtube.com/results?search_query=${message}`)
    }
    else if(message.includes("chat gpt"))
    {
        speak("opening chat gpt for you")
        window.open(`https://chatgpt.com/`)
    }
  
  
   
    else{
        let finaltext="this is what i found on internet regarding"+message.replace("shraddh","")

        speak(finaltext)
        window.open(`https://www.google.com/search?q=${message.replace("shraddh","")}`)
    }
   

}