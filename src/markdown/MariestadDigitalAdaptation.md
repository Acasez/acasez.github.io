### Overview
I made a digital, solo only, adaption of the Mariestad Board Game. It has most of the features of a physical board game and an inbuilt tutorial. It has support to be played in both English and Swedish and has options for different amounts of starting pollution, to provide different levels of challenge.

&nbsp;

When I made my Unity Asset for layered tooltips I also updated this project to feature them.

### IdeaAndStart
When I was making the Unity Script that put together the cards for the Board Game, I got the idea of trying to actually make a digital adaptation. It would be nice to play and an easier way to show people the game design of the board game without having to sit down and play it. I had also gotten really into playing solo Terraforming Mars at https://terraforming-mars.herokuapp.com, and I liked the idea of making something similar.

&nbsp;

I did most of the game code in spring 2024 as the game was being printed, and had a playable version in May. But for the initial versions I just used the games boards for UI, which looked awkward and was inefficient on a digital screen. I knew I wanted to fix something better, but I was a bit tired of the game then and took a few months break from the project.

&nbsp;

In the fall of 2024 I took a remote course in UI design from Uppsala University and decided that was a good time to fix the UI of the digital adaption.

### GameBoardDesign
The first part of this was splitting up the game boards and moving elements around for a more natural feeling layout that follows strategy genre conventions. Money, Income and tags were moved to the top of the screen where resources generally are in strategy games. Many resources that used tracks in the board game were made into numbers instead to take advantage of the digital format.

&nbsp;

I also changed the size of green energy and traffic tracks as the current size was way to fit for solo play. The pollution track I did a large redesign on, making into a dynamic display that shows the next couple of steps and their bonus rewards. This removes a lot of unused game elements and creates a nice visual of ‘pulling’ in pollution. It also allowed me to create an alternative setting where the bonuses on the track are randomly placed.

### DoTweenMicroAnimations
I also wanted to add more feeling or ‘juice’ into the game. For this I added some micro animations using the DoTween plugin for unity which I found absolutely perfect for this. It allows you to add easy animations of things moving between points, scaling up or down or rotating. While none of these things are particularly hard to do in code, DoTween is so much faster and easier than doing it by hand. A line like the one above is so much quicker to write and use than having to deal with Unity's default ways of doing scaling, timers and more. I will definitely use this plugin for future projects that would benefit from something like it.
