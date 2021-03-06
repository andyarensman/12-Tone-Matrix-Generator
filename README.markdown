# React: 12-Tone Matrix Generator

[View the App](https://twelve-tone-matrix-generator.herokuapp.com/)

***Update 8/6/21 - Currently working on CSS in another branch***

This React app is made for music theory or composition students studying 12-tone music. The user enters the tone row and is shown every possible form the row can take as well as the intervals for the prime row. You can read more about 12-tone music below: [What is 12-Tone Music?](#what-is-12\-tone-music)

Here you can see an example of the app in use:

![Example Image](https://i.imgur.com/jFDulzU.gif)

# Creating the App

This was the first app I ever created and was originally made as a pen on CodePen.io: [https://codepen.io/arensmandy/pen/mdRBXNy](https://codepen.io/arensmandy/pen/mdRBXNy). Since creating the app on CodePen, I have refactored the code to work in a normal code editor.

The project was created as a way to practice React while going through the [freeCodeCamp certification](https://www.freecodecamp.org/learn/front-end-libraries/) on front end development libraries. I also used it as a way to practice refactoring and using Git with GitHub.

In the future I would like to add various playback functions so the user can hear what their tone rows sound like in the various forms. At some point I would also like to add more CSS to make the app more visually appealing. Currently there isn't a way for the user to select the direction of the interval, so this could be another feature added - however, this shouldn't cause any problems for music students and if implemented would slow down the entry process.

In terms of the code, I spent I lot of time refactoring to hopefully make it cleaner to read. I think there is probably a better way to disable the buttons, so I may revisit this later.

# What is 12-Tone Music?

In traditional western classical music, there are twelve unique notes that can be used:

- C, C#/Db, D, D#/Eb, E, F, F#/Gb, G, G#/Ab, A, A#/Bb, and B

These notes are used to make scales and chords for the western music you know and love, but all 12 notes typically won???t be heard in a short period of time.

Composers who write twelve-tone music, or ***serialism***, create a sort-of melody, called a ***tone row***, using all twelve notes ***without repeating any note***. For example:

- Bb, E, F#, D#, F, A, D, C#, G, Ab, B, C (from [Arnold Schoenberg???s Variations for Orchestra](https://www.youtube.com/watch?v=iL1XzH6gpAY&ab_channel=BartjeBartmans]))

One of the key aspects of the row is the distance between each note - the ***interval*** (ex: major 3rd). The composer then takes this ***prime row***, and creates new rows out of it by:

- ***Transposing*** the row (same intervals, but starting on a different note)
- ***Inverting*** the row (same intervals, but in the opposite direction: if it was a major third UP instead you go a major third DOWN)
- Playing the row backwards (called ***retrograde***)
- or any combination of the three

If you enter the example tone row into my app, you will see all possible forms of the prime row. The letters are P(Prime - all the transpositions), I(Inversion), R(Retrograde), and RI(Retrograde-Inversion). The numbers refer to the starting note of P and I and go up stepwise. So in the Schoenberg example above, Bb would be 0, B is 1, C is 2, etc. ***Note: It seems like music theorists will sometimes number the notes differently (sometimes 0 is always C).***

With all of these options of rows to use, the composer is able to create a piece of music. They use as many or as few rows as they like. Sometimes they will use the first few notes of a row to create a chord, then continue the row. Sometimes they will repeat a note in a row before finishing it out. Multiple rows can often happen simultaneously between multiple instruments or one instrument will start a row and another instrument will finish it. With all this going on, it can be quite challenging to find every row when analyzing the music.

If you want to read more about serialism, [check out the Wikipedia article here](https://en.wikipedia.org/wiki/Twelve-tone_technique).

# Tutorials & Guides Used:

- FreeCodeCamp Front End Development Libraries - React: [freeCodeCamp certification](https://www.freecodecamp.org/learn/front-end-libraries/#react)

# License
[MIT License](https://choosealicense.com/licenses/mit/)
