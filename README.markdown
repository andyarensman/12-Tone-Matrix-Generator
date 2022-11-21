# React: 12-Tone Matrix Generator

[View the App](https://12-tone-matrix-generator.vercel.app/)

This React app is made for music theory or composition students studying 12-tone music. The user enters the tone row and is shown every possible form the row can take as well as the intervals for the prime row. You can read more about 12-tone music below: [What is 12-Tone Music?](#what-is-12\-tone-music)

Here you can see an example of the app in use:

![Example Image](https://i.imgur.com/jFDulzU.gif)

# Creating the App

This was the first app I ever created and was originally made as a pen on CodePen.io: [https://codepen.io/arensmandy/pen/mdRBXNy](https://codepen.io/arensmandy/pen/mdRBXNy). Since creating the app on CodePen, I have refactored the code to work in a normal code editor and am hosting it on Vercel.

The project was created as a way to practice React while going through the [freeCodeCamp certification](https://www.freecodecamp.org/learn/front-end-libraries/) on front end development libraries. I also used it as a way to practice refactoring and using Git with GitHub.

The algorithm to solve the matrix is fairly simple if you understand music theory. Each of the tweleve notes is assigned a number from 0-11. C is 0, C# is 1 ... B is 11. A user's input would look something like this after the conversion: `[0, 4, 5, 8, 9, 2, 3, 6, 7, 11, 10, 1]`. To get the interval bewetween the notes, you just subtract one note's value from the other. The absolute value of this number is then used as an index to grab the name of the inveral from an array. So C(0) to E(4) is a differnce of 4, which is a major third. To tranpose the notes, you simply add the interval to each note's number. So if you wanted to go up by four notes, you would add 4 to each note's number. If a note is above 11, you subtract 12 from it to keep it in the range of 0-11.

In the future I would like to add various playback functions so the user can hear what their tone rows sound like in the various forms. At some point I would also like to add more CSS to make the app more visually appealing. Currently there isn't a way for the user to select the direction of the interval, so this could be another feature added - however, this shouldn't cause any problems for music students and if implemented would slow down the entry process.

I spent I lot of time refactoring to hopefully make it cleaner to read. I think there is probably a better way to disable the buttons, so I may revisit this later.

# What is 12-Tone Music?

In traditional western classical music, there are twelve unique notes that can be used:

- C, C#/Db, D, D#/Eb, E, F, F#/Gb, G, G#/Ab, A, A#/Bb, and B

These notes are used to make scales and chords for the western music you know and love, but all 12 notes typically won’t be heard in a short period of time.

Composers who write twelve-tone music, or ***serialism***, create a sort-of melody, called a ***tone row***, using all twelve notes ***without repeating any note***. For example:

- Bb, E, F#, D#, F, A, D, C#, G, Ab, B, C (from [Arnold Schoenberg’s Variations for Orchestra](https://www.youtube.com/watch?v=iL1XzH6gpAY&ab_channel=BartjeBartmans]))

One of the key aspects of the row is the distance between each note - the ***interval*** (ex: major 3rd). The composer then takes this ***prime row***, and creates new rows out of it by:

- ***Transposing*** the row (same intervals, but starting on a different note)
- ***Inverting*** the row (same intervals, but in the opposite direction: if it was a major third UP instead you go a major third DOWN)
- Playing the row backwards (***retrograde***)
- or any combination of the three

If you enter the example tone row into my app, you will see all possible forms of the prime row. The letters are P (Prime - all the transpositions), I (Inversion), R (Retrograde), and RI (Retrograde Inversion). The numbers refer to the starting note of P and I and go up stepwise. So in the Schoenberg example above, Bb would be 0, B is 1, C is 2, etc. ***Note: It seems like music theorists will sometimes number the notes differently (sometimes 0 is always C).***

With all of these options of rows to use, the composer is able to create a piece of music. They use as many or as few rows as they like. Sometimes they will use the first few notes of a row to create a chord, then continue the row. Sometimes they will repeat a note in a row before finishing it out. Multiple rows can often happen simultaneously between multiple instruments or one instrument will start a row and another instrument will finish it. With all this going on, it can be quite challenging to find every row when analyzing the music.

If you want to read more about serialism, [check out the Wikipedia article here](https://en.wikipedia.org/wiki/Twelve-tone_technique).

# Tutorials & Guides Used:

- FreeCodeCamp Front End Development Libraries - React: [freeCodeCamp certification](https://www.freecodecamp.org/learn/front-end-libraries/#react)
