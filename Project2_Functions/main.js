const myEvents = new Event("myCustomeEvent")
document.addEventListener("myCustomEvent", e=> {
    console.log(e)
    document.dispatchEvent(myEvent)
})

// this is the practice of concatinating a string 
let greeting = ('Hello');
let name = ('Tavio');
str = greeting + "" + name + ".";
str = gretting.concat(" ", name, ".");
