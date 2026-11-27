import{i as e,t}from"./index-BP2NCw0F.js";import{a as n,i as r,n as i,r as a,t as o}from"./ImageDisplay-BpYshgOJ.js";import{t as s}from"./ProjectLinks-CsePodlU.js";import{t as c}from"./List-CrffEs_b.js";/* empty css                */var l=e(),u=`### Overview\r
To Hel and Back is a Norse mythology-inspired hack-and-slash roguelike. You play as Sif, fighting through levels with a battle axe and a throwing axe that lets you teleport to its landing point. Between levels, you choose runes that shape your build.\r
\r
### AxeThrow\r
One of the challenges of To Hel and Back was making the game feel unique with the limited time and resources we had. One mechanic we used to solve this was the axe throw. Sif, the main character has two axes, a battle axe she uses in melee and a throwing axe.\r
\r
&nbsp;\r
\r
The player can throw their axe, then by clicking again, teleport to where the axe landed. This can be used to reposition, get out of harm's way, teleport to ranged enemies to attack them in melee and more.\r
\r
&nbsp;\r
\r
The teleport is however, the player's only movement tool, and needs to be thrown before it can be used. We talked about having a dash mechanic, but chose not to, as only having the axe throw led to more tactical play and planning.\r
\r
### HomingEnemies\r
We had multiple ideas for how to make interesting enemies that feel different. Enemies with a charge attack, enemies with shields that can only be attacked from one direction, enemies with different weapons. However all of those would require more assets and coding, and our programmers and artists already had a lot on their plate.\r
\r
&nbsp;\r
\r
We started with two enemies, one melee and one ranged, then made a larger stronger version of both for variety. To further differentiate the larger ranged enemy I tried making their attack different, from the smaller variant. I tried having it shooting multiple projectiles, exploding projectiles and settled on giving it slower homing projectiles.\r
\r
&nbsp;\r
\r
Alone the player has a few different options for avoiding these, such as making sharp turns, leading them into pillars or teleporting away with their axe. During intense combat encounters they are great for keeping players on their toes, and often serve as a priority target to fight. From feedback it seems like the players like these enemies, finding them challenging but not overly hard.\r
\r
### AggressionAndGameFlow\r
One problem we were trying to fix at the end stage of development was the fact that the optimal tactic was to engage as few enemies as possible at a time. While we wanted to promote tactical play, pulling in one enemy at a time from aggro range is not engaging gameplay and doesn't fit the viking theme of the game. We also wanted to avoid mechanics requiring the use of more buttons.\r
\r
&nbsp;\r
\r
Some people on the team suggested some mechanic that penalized not fighting enemies when possible, like losing health when not in combat. However I would rather want a mechanic that rewarded you for being in battle, instead of penalizing you for being out of it. Mechanics that punish the player have to be clearly displayed and easy to understand otherwise they can feel annoying and unfair.\r
\r
&nbsp;\r
\r
While we didn't have time to implement it, I designed a combo mechanic where you build up an aggression meter by hitting enemies and then healed based on the size of your combo when you stopped. This would be a risk-reward mechanic as you would have to stop your combo to heal.\r
\r
&nbsp;\r
\r
Another alternative would be that the player would enter a ‘viking fury’ after hitting with x attacks in quick succession, where they would have a percentile life steal to restore health\r
\r
### CharacterDesign\r
While To Hel and Back is finished and the team has split of to work on new projects, we still had lots of ideas that never got implemented. We were discussing bosses, new weapons, new levels and more things.\r
\r
&nbsp;\r
\r
One of my favorite things design wise that I didn't design was how our enemies looked. Aside from having a cool model thanks to our graphics team they also came up with the idea of the animal heads. There is actually only one character model in the game, Sif's (the main characters) model. The enemies also use this model, but due to the animal masks they wear and some color magic you might not notice that at first.\r
\r
&nbsp;\r
\r
This animal theme was also a really fun design prompt; designing enemies based on Scandinavian animals and the folklore around them. Implemented in the game we have the melee enemy with a wolf mask and the ranged enemies with a crow mask. I also have design notes and ideas for some other animals if I ever do a similar project.\r
\r
### OtherBiomes\r
Another thing I designed that never got implemented was the root levels, where the roots of Yggdrasil reach down through the floor and provide terrain. We were discussing this being the next 'biome' in the game but we never got that far. Still I really like that idea and wish I could see one of those levels with same level of art and polish that our current levels have\r
\r
&nbsp;\r
\r
Similarly I had designed levels with holes and gaps in them that you could throw your axe over. We never got time to make assets for the edges and implement them but it could have been a fun challenge, especially in combination with some more enemies.\r
`,d=t(),f=i(u);function p(){let e=(0,l.c)(13),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,d.jsx)(n,{title:`To Hel And Back`,subtitle:`Norse mythology inspired hack and slash roguelike`}),e[0]=t):t=e[0];let i;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,d.jsxs)(r,{children:[(0,d.jsx)(a,{name:`Overview`,description:f.Overview,children:(0,d.jsx)(s,{itchLink:`https://10hpstudios.itch.io/to-hel-and-back`,youtubeLink:`https://www.youtube.com/watch?v=7FwxtrYJtMs`})}),(0,d.jsx)(o,{imageLocation:`images/ToHelAndBack/axeattack.jpg`,altText:`Screenshot of the game during play, showing the main character Sif attacking enemies`,coverImage:!1})]}),e[1]=i):i=e[1];let u;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(u=(0,d.jsx)(o,{imageLocation:`images/ToHelAndBack/PillarInUnity.jpg`,altText:`A screenshot of the game in the Unity Editor`,coverImage:!1}),e[2]=u):u=e[2];let p;e[3]===Symbol.for(`react.memo_cache_sentinel`)?(p=(0,d.jsxs)(r,{children:[u,(0,d.jsx)(c,{listHeader:`Things I worked on`,listContent:[`Worked on design document with rest of the team, planned out features`,`Planned out level designs in Unity using the Probuilder addon.`,`Worked with the graphics team on level design and appearance`,`Balanced by the different enemies and player attacks`,`Organizing playtests and adapting the game after feedback`,`Designed the attacks of different enemies with help from the programmers`,`Designed and balanced the rune system, the roguelike perks`]})]}),e[3]=p):p=e[3];let m;e[4]===Symbol.for(`react.memo_cache_sentinel`)?(m=(0,d.jsxs)(r,{children:[(0,d.jsx)(o,{imageLocation:`images/ToHelAndBack/earlydesigndraft.jpg`,altText:`Screenshot of a level design wireframe in Unity overlaid with a UI concept`,imageCaption:`Early design draft made by taking a screenshot and laying over UI elements`,coverImage:!1}),(0,d.jsx)(o,{imageLocation:`images/ToHelAndBack/probuilder.jpg`,altText:`Screenshot of two copies a level draft in Unity, one with Probuilder shapes and one with actual models`,imageCaption:`I started by mapping out levels with Probuilder shapes then replaced them with actual models. Green cylinder represents the player, red represents a melee enemy and blue represents a ranged enemyl`,coverImage:!1})]}),e[4]=m):m=e[4];let h,g;e[5]===Symbol.for(`react.memo_cache_sentinel`)?(h=(0,d.jsxs)(r,{children:[(0,d.jsx)(o,{imageLocation:`images/ToHelAndBack/runechoice.jpg`,altText:`Screenshot of the rune choice menu, presenting three options.`,imageCaption:`The game has powerups in forms of runes that you can choose between at end of each level. I worked on designing and balancing them`,coverImage:!1}),(0,d.jsx)(o,{imageLocation:`images/ToHelAndBack/lightpath.jpg`,altText:`Screenshot of a level from above`,imageCaption:`I worked with assets and lighting alongside our graphical team.`,coverImage:!1})]}),g=(0,d.jsx)(`hr`,{}),e[5]=h,e[6]=g):(h=e[5],g=e[6]);let _;e[7]===Symbol.for(`react.memo_cache_sentinel`)?(_=(0,d.jsxs)(r,{contentReverse:!0,children:[(0,d.jsx)(a,{name:`Axe Throw`,description:f.AxeThrow}),(0,d.jsx)(o,{imageLocation:`images/ToHelAndBack/axethrow.gif`,altText:`Gif of Throwing the axe and teleporting to it.`,coverImage:!1})]}),e[7]=_):_=e[7];let v;e[8]===Symbol.for(`react.memo_cache_sentinel`)?(v=(0,d.jsxs)(r,{children:[(0,d.jsx)(a,{name:`Homing Enemies`,description:f.HomingEnemies}),(0,d.jsx)(o,{imageLocation:`images/ToHelAndBack/homingenemies.gif`,altText:`Gif of large ranged enemy shooting homing projectiles`,coverImage:!1})]}),e[8]=v):v=e[8];let y,b;e[9]===Symbol.for(`react.memo_cache_sentinel`)?(b=(0,d.jsxs)(r,{contentReverse:!0,children:[(0,d.jsx)(a,{name:`Aggression and Game Flow`,description:f.AggressionAndGameFlow}),(0,d.jsx)(o,{imageLocation:`images/ToHelAndBack/axeattack.jpg`,altText:`Screenshot of the player attacking`,coverImage:!1})]}),y=(0,d.jsx)(`hr`,{}),e[9]=y,e[10]=b):(y=e[9],b=e[10]);let x;e[11]===Symbol.for(`react.memo_cache_sentinel`)?(x=(0,d.jsxs)(r,{children:[(0,d.jsx)(a,{name:`Character Design`,description:f.CharacterDesign}),(0,d.jsx)(o,{imageLocation:`images/ToHelAndBack/playermodel.jpg`,altText:`Screenshot of the player in Unity`,imageCaption:`The player model in Unity. All enemy models are just this one with a recolor and an attached mask`,coverImage:!1})]}),e[11]=x):x=e[11];let S;return e[12]===Symbol.for(`react.memo_cache_sentinel`)?(S=(0,d.jsxs)(d.Fragment,{children:[t,i,p,m,h,g,_,v,b,y,x,(0,d.jsxs)(r,{contentReverse:!0,children:[(0,d.jsx)(a,{name:`Other Biomes`,description:f.OtherBiomes}),(0,d.jsx)(o,{imageLocation:`images/ToHelAndBack/treebiome.jpg`,altText:`Screenshot of my probuilder draft for the Yggdrasil biome`,imageCaption:`The player model in Unity. All enemy models are just this one with a recolor and an attached mask`,coverImage:!1})]})]}),e[12]=S):S=e[12],S}export{p as default};