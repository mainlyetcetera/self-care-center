# Self Care Center
## Contributors
*Eric Campbell*
*Joe Haefling*

### How to Use
Upon page load, you will see your **main interactive tool**, the radio buttons in the center of the page. These buttons determine which type of self-care you receive! Clicking on one changes the background gradient color to suit that particular type of self-care! Clicking the `Receive Message` button will calmly fade out the meditator below and fade in your message! You may continue to click the `Receive Message` button for additional phrases!

#### Technologies

- JavaScript
- HTML
- CSS
- Github
- Google Chrome Developer Tools

#### Wins

- successful matching of the comp
- successful setup of HTML and CSS pages
- successful fade in and out of messages
- successful fade out of meditation icon
- attempted to make code dry by incorporating more functions to handle repetitive lines of code
- successfully make buttons change color on hover

#### Areas of Improvement

- need to figure out and implement background gradients fading in and out so they're not so jarring
- can certainly have made the css more dry
- likely some spots I could make the JS more dry, as well
- did not finish the chosen CYOA
- took forever to actually be able to match the comp
- removed change in background color as was too jarring

### Reflection
My main goal was to become stronger with my use of *HTML* and *CSS*. My learning style is to beat my head against a problem enough times that it becomes familiar to me. This was how I decided on the `CSS Animations` as my **CYOA**. I wanted to play with these technologies more!

I definitely discovered the good practice of doing much of my styling using the *Developer Tools*, then transitioning that writing over to the editor. It was a huge pain to make each small style change in the editor to go see if it did anything I wanted it to do over on the page itself. This did, however, run me into another small issue: the sizing of the page is slightly different with the tools pulled up, so I ended up doing some minor adjustment after using the tools to accommodate for that.

I fixed a small glitch that occurred as I was fading the messages in and out. It looks like due to my fade in and fade out effects both taking 3 seconds allowed for the briefest of moments where the message could fully display before disappearing and fading in. I fixed this by making the fade out take .1 second longer. This made it impossible for that window of time to occur!

I took out the changing of the background color gradient because, without the fade in and out, it is simply too jarring and too distracting from the page as a whole.

Overall, I consider this project a win. I have gone from next-to-no experience writing and manipulating `HTML` and `CSS` to having some. I am more confident navigating those types of pages now and troubleshooting issues as they arise.
