### Overview
City State was made for my Bachelor's Thesis about different structures in Tech Trees. It's a fairly short city building game that was made to see how different tech tree structures of tech trees affect the gameplay experience. To do that I still needed to design an interesting and fun game, and I focused I worked on it afterwards to add some ‘juice’ to the game.

### Tooltips
Implemented tool tips and icons to clearly display what everything does and icons to help the game feel and player learning. Having an UI that was easy to navigate was a high priority, as the focus for the participants should be on the mechanics.

### AdjacencyPlanning
When I started working on the game I knew I wanted some form of adjacency bonuses. Depending on where you place buildings they could give different bonuses or penalties based on other nearby buildings and features. At first I didn't really know why I felt like it was needed, mostly that most strategy/city building games had it and it made sense.

&nbsp;

During development, when I was trying to figure out how I wanted to do adjacency bonuses I realized why they are important. They add flavor and theme to your city, by dividing it in regions and making parts distinct. If every part has the same buildings then it becomes boring, but if a smithy needs to be put next to a mine, then players are rewarded for specializing districts. Players could always make an industrial district with mines and smithies, but by adding adjacency bonuses you reward them for it.

### AdjacencyImplementation
I wanted to design the specialization in a way that gives players control and feel like they make interesting decisions. Instead of directly stating ‘this is or could be a good industrial region, you can only put mines here’ I let players plan out their own city and build districts how they want to. Before this I had already implemented fisheries and farm buildings that require coast and river plots respectively. They create regions in a sense, but those regions are predefined by the map layout, and not the player's choices.

&nbsp;

The different colored triangles above buildings mark different regions. Some buildings affect other buildings in the same region. A smithy (the building in white region next to the wall) produces 1 iron for every mine in the region. Some buildings encourage different strategies, like the market (yellow building next to river) produces 1 culture for every unique type of building in the region, meaning that there is also a strategy in building a diverse region.

### Terrain
One of the first design decisions I made was regarding the terrain. I compared other strategy and City Building games, did I want it grid or hex-based, or use a free placement similar to Cities Skylines and most other City Builders?

&nbsp;

I decided on neither of them. Looking at it, grids and hexes are great for random map generation and turn based movement. But with neither of them in the game, I saw little point in using them. Similarly, free building placement seemed like it would be harder to code and balance. Free placement generally works well in games with a road and traffic system like in City Skylines, where players plot out roads and place buildings next to them. Road placement and traffic are common mechanics in city building games and you know, cities overall. But trying to implement a road system in a small game like this would be hard and beyond the scope of the project.

### Uncertainty
Overall I like the ‘plot’ system as I call it. It works, and is easy to code and implement. It did however remove a common source of uncertainty in games like this, the random terrain generation. This meant that the game only has three possible sources of uncertainty, random technology, barbarians and the expedition mechanic Since the random technology is a choice and only on for half the games for the study. and the expeditions is something players don't have to interact with you could be left with only the barbarians as a source of uncertainty. For the sake of this project that was fine, but if I were to continue working on the game I would want to add more sources of uncertainty.

### FutureLessons
Still for the time I had on the project I think not trying to implement terrain generation was a good decision, the prototype would probably not have been completed in time if I tried. It's better to have a finished small game than a larger game stuck as a prototype. If I had done the project with more time or a team, I would have loved to try to make a terrain generation system with either a grid or hexes. Having that would have added another source of uncertainty and replayability. Alternatively I could look into other ways of adding randomness, like variation in what technologies and resources pop up.
