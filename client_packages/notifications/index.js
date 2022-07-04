let browser = null;

// player.call("ClassicNotify", [TEXTFORSPAWNINGNOTIFY]) // Notify --From server call

mp.events.add("ClassicNotify", (enteredTextofNOTIFY) => {
    if(browser == null){
        browser = mp.browsers.new('package://notifications/index.html')
        mp.gui.chat.activate(true) 
    }
    browser.execute(`NotifyArray("${enteredTextofNOTIFY}")`) 
})

mp.events.add("HideNotify", () => {
    if(browser != null){
        mp.gui.chat.activate(true)
        browser.destroy()
        browser = null;
    }
})

mp.events.add("consoleCommand", (command) => {
    if(command == "Notify"){
	    mp.events.call("ClassicNotify", "Test text for notify.")
    }
});