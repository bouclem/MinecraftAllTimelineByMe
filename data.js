/* ========================================
   MINECRAFT TIMELINES — DATA
   ========================================
   To add a new timeline:
   1. Create a new object in the TIMELINES array below
   2. Give it an id, name, color, icon, and entries[]
   3. Each entry needs: { year, month, title, desc, tag }
   4. Valid tags: milestone, release, update, event, alt
   5. That's it — the UI picks it up automatically.
   ======================================== */

const TIMELINES = [
  {
    id: "real",
    name: "Real Timeline",
    icon: "⛏️",
    color: "#5D8C2E",       // grass green
    colorLight: "#7DB83A",
    description: "The actual history of Minecraft",
    entries: [
      { year: 2009, month: "April", title: "The Spark", desc: "Markus 'Notch' Persson begins working on a cave-based building game, inspired by Infiniminer, Dwarf Fortress, and Dungeon Keeper.", tag: "milestone" },
      { year: 2009, month: "May", title: "Cave Game & Pre-Classic", desc: "The first test build, 'Cave Game', is shown on May 10. Days later, the Pre-Classic phase begins with basic block placing and breaking.", tag: "release" },
      { year: 2009, month: "May (late)", title: "Classic Era Begins", desc: "On May 16, the game enters Classic phase. Multiplayer is added. The game is renamed to 'Minecraft: Order of the Stone', then simply 'Minecraft'.", tag: "release" },
      { year: 2009, month: "June", title: "Survival Test", desc: "Mobs appear for the first time — arrows, pigs, creepers, skeletons, and zombies roam the blocky world. Health and damage are introduced.", tag: "update" },
      { year: 2009, month: "October", title: "Minecraft Goes Viral", desc: "Word spreads across indie gaming forums. The game gains thousands of players despite being in early development.", tag: "event" },
      { year: 2009, month: "December", title: "Indev Begins", desc: "The 'In Development' phase starts on Dec 23. Crafting, torches, tools, and inventory are added. The game starts feeling like Minecraft.", tag: "release" },

      { year: 2010, month: "February", title: "Infdev — Infinite Worlds", desc: "On Feb 27, the world becomes infinite. No more tiny maps — procedural terrain generation changes everything.", tag: "release" },
      { year: 2010, month: "June", title: "Alpha Launches", desc: "Minecraft Alpha begins June 30. Redstone, minecarts, boats, and the Nether dimension are added over the coming months.", tag: "release" },
      { year: 2010, month: "September", title: "1 Million Registered Users", desc: "The game hits a massive milestone with 1 million registered accounts, all while still in Alpha.", tag: "milestone" },
      { year: 2010, month: "December", title: "Beta Begins", desc: "Alpha ends Dec 3, Beta starts Dec 20. Beds, weather, wolves, and pistons arrive over the Beta period.", tag: "release" },

      { year: 2011, month: "January", title: "Mojang AB Founded", desc: "Notch officially founds Mojang AB with Jakob Porsér and Carl Manneh to develop Minecraft full-time.", tag: "milestone" },
      { year: 2011, month: "September", title: "Adventure Update (Beta 1.8)", desc: "Hunger bar, sprinting, creative mode, strongholds, villages, and the Ender Dragon concept arrive. A game-changer.", tag: "update" },
      { year: 2011, month: "November", title: "Minecraft 1.0 — Full Release", desc: "On November 18, at the first-ever MineCon, Minecraft officially launches. The End dimension, enchanting, brewing, and the Ender Dragon are in.", tag: "release" },

      { year: 2012, month: "March", title: "1.2 — Jungles & Iron Golems", desc: "Jungle biomes, ocelots, iron golems, and new world height (256 blocks) arrive.", tag: "update" },
      { year: 2012, month: "August", title: "1.3 — Emeralds & Trading", desc: "Villager trading, emeralds, ender chests, writable books, and adventure mode are added.", tag: "update" },
      { year: 2012, month: "October", title: "1.4 — Pretty Scary Update", desc: "Witches, bats, wither boss, beacons, anvils, and carrots on sticks. Halloween-themed release.", tag: "update" },

      { year: 2013, month: "March", title: "1.5 — Redstone Update", desc: "Hoppers, droppers, comparators, daylight sensors, and trapped chests make redstone engineering far more powerful.", tag: "update" },
      { year: 2013, month: "July", title: "1.6 — Horse Update", desc: "Horses, donkeys, mules, leads, carpets, and hardened clay. Exploration gets faster.", tag: "update" },
      { year: 2013, month: "October", title: "1.7 — The Update That Changed the World", desc: "Massive biome overhaul with mesa, mega taiga, roofed forest, and many more. Stained glass and new flowers.", tag: "update" },

      { year: 2014, month: "September", title: "1.8 — Bountiful Update", desc: "Ocean monuments, guardians, armor stands, banners, rabbits, and the new world border.", tag: "update" },
      { year: 2014, month: "September", title: "Microsoft Acquires Mojang", desc: "Microsoft buys Mojang for $2.5 billion. Notch, Porsér, and Manneh leave the company.", tag: "milestone" },

      { year: 2015, month: "Throughout", title: "Console & Pocket Editions Grow", desc: "Minecraft expands to PS4, Xbox One, Wii U, and mobile platforms. The community explodes worldwide.", tag: "event" },

      { year: 2016, month: "February", title: "1.9 — Combat Update", desc: "Attack cooldowns, dual wielding, shields, end cities, elytra, and shulkers. PvP is completely reworked.", tag: "update" },
      { year: 2016, month: "June", title: "1.10 — Frostburn Update", desc: "Polar bears, strays, husks, magma blocks, and structure blocks.", tag: "update" },
      { year: 2016, month: "November", title: "1.11 — Exploration Update", desc: "Woodland mansions, llamas, shulker boxes, observers, and totems of undying.", tag: "update" },

      { year: 2017, month: "June", title: "1.12 — World of Color Update", desc: "Concrete, glazed terracotta, parrots, advancements system, and a recipe book. Building gets colorful.", tag: "update" },
      { year: 2017, month: "September", title: "Better Together Update", desc: "Console and mobile editions merge into Bedrock Edition. Cross-platform play becomes reality. Java Edition gets its name.", tag: "milestone" },

      { year: 2018, month: "July", title: "1.13 — Update Aquatic", desc: "Oceans are completely overhauled with coral reefs, dolphins, turtles, tridents, drowned, and underwater ruins.", tag: "update" },

      { year: 2019, month: "April", title: "1.14 — Village & Pillage", desc: "Villages are redesigned, pillagers and raids arrive, foxes, berry bushes, and the new villager trading system.", tag: "update" },
      { year: 2019, month: "May", title: "Minecraft Turns 10", desc: "Minecraft celebrates its 10th anniversary. It surpasses Tetris as the best-selling video game of all time with 176 million copies sold.", tag: "milestone" },
      { year: 2019, month: "December", title: "1.15 — Buzzy Bees", desc: "Bees, beehives, honey blocks, and honeycomb. A sweet, smaller update focused on bug fixes too.", tag: "update" },

      { year: 2020, month: "May", title: "Mojang Rebrands", desc: "Mojang AB becomes Mojang Studios with a new logo and identity.", tag: "event" },
      { year: 2020, month: "June", title: "1.16 — Nether Update", desc: "The Nether gets a massive overhaul: crimson/warped forests, basalt deltas, piglins, netherite, and ancient debris.", tag: "update" },

      { year: 2021, month: "June", title: "1.17 — Caves & Cliffs Part I", desc: "Axolotls, glow squid, copper, amethyst geodes, deepslate, and lush caves arrive.", tag: "update" },
      { year: 2021, month: "November", title: "1.18 — Caves & Cliffs Part II", desc: "World generation is completely overhauled. World height extends from -64 to 320. Massive caves and mountain ranges.", tag: "update" },

      { year: 2022, month: "June", title: "1.19 — The Wild Update", desc: "Deep dark biome, the Warden, mangrove swamps, frogs, allays, and ancient cities.", tag: "update" },

      { year: 2023, month: "June", title: "1.20 — Trails & Tales", desc: "Archaeology, cherry blossom biome, armor trims, sniffers, camels, and decorated pots.", tag: "update" },
      { year: 2023, month: "October", title: "300 Million Copies Sold", desc: "Minecraft reaches over 300 million copies sold, cementing its place as the best-selling game ever.", tag: "milestone" },

      { year: 2024, month: "June", title: "1.21 — Tricky Trials", desc: "Trial chambers, the breeze mob, mace weapon, new copper and tuff variants, and the crafter block.", tag: "update" },
      { year: 2024, month: "Throughout", title: "Game Drops Begin", desc: "Mojang shifts to smaller, more frequent 'game drops' alongside major updates.", tag: "event" },

      { year: 2025, month: "March", title: "1.21.5 — Spring to Life", desc: "Nature-focused game drop adding warm and cold mob variants, new foliage blocks, and revitalizing the Overworld.", tag: "update" },
      { year: 2025, month: "April", title: "A Minecraft Movie", desc: "The live-action Minecraft movie releases in theaters, becoming the second highest-grossing video game film of all time.", tag: "milestone" },
      { year: 2025, month: "December", title: "1.21.11 — Mounts of Mayhem", desc: "Nautilus mount for underwater exploration, tiered spear weapon with mounted combat, and the Breath of the Nautilus effect. The last update before the new versioning system.", tag: "update" },

      { year: 2026, month: "March", title: "26.1 — Tiny Takeover", desc: "Baby mob overhaul across 40+ mobs, craftable name tags, golden dandelion that freezes baby aging, trumpet note block, and stonecutter shortcuts. New version numbering begins.", tag: "update" },
      { year: 2026, month: "Q2 (Upcoming)", title: "26.2 — Chaos Cubed", desc: "Upcoming game drop: sulfur caves biome with sulfur and cinnabar blocks, the sulfur cube mob that absorbs blocks and changes behavior, potent sulfur gas, and surface sulfur springs.", tag: "update" },
    ]
  },

  {
    id: "no-minecraft",
    name: "Minecraft Never Created",
    icon: "🌀",
    color: "#8B1A1A",       // nether red
    colorLight: "#D73B3B",
    description: "What if Notch never finished the cave game?",
    entries: [
      { year: 2009, month: "April", title: "The Spark", desc: "Markus 'Notch' Persson begins working on a cave-based building game, inspired by Infiniminer, Dwarf Fortress, and Dungeon Keeper.", tag: "milestone" },
      { year: 2009, month: "May", title: "⚡ DIVERGENCE — Minecraft Is Never Created", desc: "In this timeline, Notch loses interest and abandons the cave game prototype. He goes back to making small Flash games and web experiments. The project is never shared publicly.", tag: "alt" },
      { year: 2009, month: "June", title: "Infiniminer Fades Away", desc: "Without Minecraft to carry its legacy, Infiniminer is forgotten. Voxel-based games remain a niche curiosity.", tag: "alt" },

      { year: 2010, month: "Throughout", title: "Indie Games Struggle", desc: "Without Minecraft's success story, the indie game boom is slower. Fewer developers believe a solo project can go viral.", tag: "alt" },

      { year: 2011, month: "Throughout", title: "No Mojang, No MineCon", desc: "Mojang is never founded. The gaming convention scene misses one of its most beloved events.", tag: "alt" },
      { year: 2011, month: "November", title: "Terraria Launches Alone", desc: "Terraria releases but without the 'Minecraft but 2D' comparisons, it struggles to find its audience and sells modestly.", tag: "alt" },

      { year: 2012, month: "Throughout", title: "Sandbox Genre Stalls", desc: "Without Minecraft proving the market, sandbox/survival games are rare. DayZ mod still happens, but the genre is tiny.", tag: "alt" },

      { year: 2013, month: "Throughout", title: "YouTube Gaming Is Different", desc: "Without Minecraft Let's Plays, YouTube gaming grows slower. Channels like PewDiePie still rise, but the landscape is different.", tag: "alt" },

      { year: 2014, month: "Throughout", title: "No $2.5B Acquisition", desc: "Microsoft never spends $2.5 billion on Mojang. That money goes elsewhere — possibly toward other gaming acquisitions earlier.", tag: "alt" },

      { year: 2015, month: "Throughout", title: "Roblox Fills the Void", desc: "With no Minecraft dominating the kids' gaming space, Roblox grows faster and earlier, becoming the go-to creative game for young players.", tag: "alt" },

      { year: 2016, month: "Throughout", title: "No Combat Update Controversy", desc: "The gaming community never has the great 1.8 vs 1.9 PvP debate. Competitive sandbox PvP barely exists as a concept.", tag: "alt" },

      { year: 2017, month: "Throughout", title: "LEGO Games Dominate", desc: "Without Minecraft LEGO sets, LEGO doubles down on their own video games. LEGO Worlds gets way more investment and marketing.", tag: "alt" },

      { year: 2018, month: "Throughout", title: "Fortnite's Creative Mode Is King", desc: "Epic Games' Fortnite Creative becomes THE building game. There's no Minecraft to compete with for the creative sandbox crown.", tag: "alt" },

      { year: 2019, month: "Throughout", title: "Roblox: Most Popular Game Ever", desc: "Without Minecraft's 2019 renaissance, Roblox claims the title of most popular game of all time. It dominates every platform.", tag: "alt" },

      { year: 2020, month: "Throughout", title: "Pandemic Gaming — No Minecraft", desc: "During COVID lockdowns, people flock to Roblox, Animal Crossing, and Fortnite. The cozy survival-craft genre barely exists.", tag: "alt" },

      { year: 2021, month: "Throughout", title: "Voxel Games Are Niche", desc: "Games like Hytale and Veloren exist but are considered weird indie experiments, not a mainstream genre.", tag: "alt" },

      { year: 2022, month: "Throughout", title: "No Deep Dark, No Warden", desc: "The horror-in-sandbox concept never takes off. Games remain either horror OR sandbox, never both.", tag: "alt" },

      { year: 2023, month: "Throughout", title: "Roblox Hits 400M Users", desc: "Roblox is unstoppable. With no Minecraft competition, it becomes the default creative platform for an entire generation.", tag: "alt" },

      { year: 2024, month: "Throughout", title: "AI-Generated Worlds", desc: "Without Minecraft's procedural generation legacy, AI world-building takes a completely different path. Less blocky, more amorphous.", tag: "alt" },

      { year: 2025, month: "Throughout", title: "A World Without Blocks", desc: "Gaming culture is fundamentally different. No creeper memes, no 'just one more block', no Steve in Smash Bros. The void is felt.", tag: "alt" },

      { year: 2026, month: "Throughout", title: "Roblox Announces 'Roblox Universe'", desc: "With zero competition from Minecraft, Roblox launches a massive metaverse platform. It's the default creative space for an entire generation. Blocks? Never heard of them.", tag: "alt" },
    ]
  },

  {
    id: "no-microsoft",
    name: "Never Sold to Microsoft",
    icon: "🛡️",
    color: "#345EC3",       // lapis blue
    colorLight: "#5B8AF5",
    description: "What if Notch never sold Mojang to Microsoft?",
    entries: [
      // Shared with real timeline up to 2014
      { year: 2009, month: "April", title: "The Spark", desc: "Markus 'Notch' Persson begins working on a cave-based building game, inspired by Infiniminer, Dwarf Fortress, and Dungeon Keeper.", tag: "milestone" },
      { year: 2009, month: "May", title: "Cave Game & Pre-Classic", desc: "The first test build, 'Cave Game', is shown on May 10. Days later, the Pre-Classic phase begins with basic block placing and breaking.", tag: "release" },
      { year: 2009, month: "June", title: "Survival Test", desc: "Mobs appear for the first time — arrows, pigs, creepers, skeletons, and zombies roam the blocky world. Health and damage are introduced.", tag: "update" },
      { year: 2009, month: "December", title: "Indev Begins", desc: "The 'In Development' phase starts on Dec 23. Crafting, torches, tools, and inventory are added. The game starts feeling like Minecraft.", tag: "release" },

      { year: 2010, month: "February", title: "Infdev — Infinite Worlds", desc: "On Feb 27, the world becomes infinite. No more tiny maps — procedural terrain generation changes everything.", tag: "release" },
      { year: 2010, month: "June", title: "Alpha Launches", desc: "Minecraft Alpha begins June 30. Redstone, minecarts, boats, and the Nether dimension are added over the coming months.", tag: "release" },
      { year: 2010, month: "December", title: "Beta Begins", desc: "Alpha ends Dec 3, Beta starts Dec 20. Beds, weather, wolves, and pistons arrive over the Beta period.", tag: "release" },

      { year: 2011, month: "January", title: "Mojang AB Founded", desc: "Notch officially founds Mojang AB with Jakob Porsér and Carl Manneh to develop Minecraft full-time.", tag: "milestone" },
      { year: 2011, month: "November", title: "Minecraft 1.0 — Full Release", desc: "On November 18, at the first-ever MineCon, Minecraft officially launches. The End dimension, enchanting, brewing, and the Ender Dragon are in.", tag: "release" },

      { year: 2012, month: "March", title: "1.2 — Jungles & Iron Golems", desc: "Jungle biomes, ocelots, iron golems, and new world height (256 blocks) arrive.", tag: "update" },
      { year: 2012, month: "October", title: "1.4 — Pretty Scary Update", desc: "Witches, bats, wither boss, beacons, anvils, and carrots on sticks. Halloween-themed release.", tag: "update" },

      { year: 2013, month: "March", title: "1.5 — Redstone Update", desc: "Hoppers, droppers, comparators, daylight sensors, and trapped chests make redstone engineering far more powerful.", tag: "update" },
      { year: 2013, month: "October", title: "1.7 — The Update That Changed the World", desc: "Massive biome overhaul with mesa, mega taiga, roofed forest, and many more. Stained glass and new flowers.", tag: "update" },

      { year: 2014, month: "September", title: "1.8 — Bountiful Update", desc: "Ocean monuments, guardians, armor stands, banners, rabbits, and the new world border.", tag: "update" },
      { year: 2014, month: "September", title: "⚡ DIVERGENCE — Notch Refuses to Sell", desc: "Microsoft offers $2.5 billion for Mojang. In this timeline, Notch declines. He steps back from development but keeps ownership. Jeb remains lead developer under an independent Mojang.", tag: "alt" },

      { year: 2015, month: "Throughout", title: "Mojang Stays Indie", desc: "Without Microsoft's resources, Mojang remains a small Swedish studio. Updates are slower but deeply community-driven. No Bedrock Edition plans.", tag: "alt" },

      { year: 2016, month: "Throughout", title: "A Different Combat Update", desc: "Without Microsoft's influence, the combat update is more conservative. The community is less divided. Mojang listens closely to feedback and iterates.", tag: "alt" },

      { year: 2017, month: "Throughout", title: "No Bedrock, No Better Together", desc: "There's no unified Bedrock Edition. Console versions remain separate ports. Java Edition is the only 'real' Minecraft. Cross-play never happens.", tag: "alt" },

      { year: 2018, month: "Throughout", title: "Modding API Finally Ships", desc: "Without corporate priorities, Mojang focuses on what the community wants most: an official modding API. It launches in 2018, transforming the modding scene.", tag: "alt" },

      { year: 2019, month: "Throughout", title: "Minecraft Turns 10 — Still Indie", desc: "The 10th anniversary is celebrated with a massive community event. Sales are lower without Microsoft's marketing — around 120 million — but the fanbase is fiercely loyal.", tag: "alt" },

      { year: 2020, month: "Throughout", title: "Pandemic Boom Hits Different", desc: "Minecraft sees a huge player surge during COVID, but without Bedrock on every platform, the growth is more concentrated on PC and modded servers.", tag: "alt" },

      { year: 2021, month: "Throughout", title: "Caves & Cliffs — Smaller Scope", desc: "The cave overhaul happens but as a single, more focused update. Without Microsoft's budget, the scope is tighter but the execution is polished.", tag: "alt" },

      { year: 2022, month: "Throughout", title: "Notch Returns Briefly", desc: "Notch makes a surprise return to develop a small experimental game mode within Minecraft. The community is divided but intrigued.", tag: "alt" },

      { year: 2023, month: "Throughout", title: "Mojang Considers Going Public", desc: "With growing costs and competition from Roblox, Mojang considers an IPO. The indie spirit is tested as the company faces financial pressure.", tag: "alt" },

      { year: 2024, month: "Throughout", title: "No Minecraft Movie", desc: "Without Microsoft's Hollywood connections and budget, the Minecraft movie never gets made. Fans create impressive animated shorts instead.", tag: "alt" },

      { year: 2025, month: "Throughout", title: "The Indie Giant", desc: "Minecraft remains the largest independently-owned game in history. Updates are slower, there's no marketplace or microtransactions, but the modding scene is the richest in gaming.", tag: "alt" },

      { year: 2026, month: "Throughout", title: "Mojang's Next Game", desc: "After 17 years, Mojang announces a second game — a space exploration sandbox. The indie studio finally expands beyond Minecraft, funded entirely by game sales.", tag: "alt" },
    ]
  },

  // ──────────────────────────────────────────────
  // ADD MORE TIMELINES HERE! Just copy the template:
  // ──────────────────────────────────────────────
  // {
  //   id: "my-timeline",
  //   name: "My Timeline Name",
  //   icon: "🔮",
  //   color: "#5533AA",
  //   colorLight: "#7755CC",
  //   description: "Short description",
  //   entries: [
  //     { year: 2009, month: "April", title: "The Spark", desc: "Shared starting point...", tag: "milestone" },
  //     { year: 2009, month: "June", title: "⚡ DIVERGENCE", desc: "What changes here...", tag: "alt" },
  //     // ... more entries
  //   ]
  // },
];
