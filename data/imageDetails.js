const imageDetails = [
    { id: 1, description: 'In the northern sky she dances free, Aurora weaves her tapestry. Ribbons of light, a celestial trance, Night\'s gentle waltz, a cosmic dance.' },
    { id: 2, description: 'Azure waves embrace the shore below, A dance of foam in sunlight\'s glow. Seagulls soar where white sands meet the tide, A beach view from above, where peace resides.' },
    { id: 3, description: 'Mountains watch as waves caress the land, Where peaks and shores entwine, a rugged strand. Nature\'s duet, a harmony untold, Mountain beach, where majesty unfolds.' },
    { id: 4, description: 'Beach trees sway with the ocean breeze, Their branches whispering tales of seas. Silhouetted against the sunset\'s gleam, Coastal guardians in a tranquil dream.' },
    { id: 5, description: 'Feathered melody on a limb\'s embrace, Whispers woven through leaves, a grace. Silent notes in the tree\'s embrace, A bird\'s song paints the quiet space.' },
    { id: 6, description: 'Wings dipped in hues of amber and gold, A ballet of birds, a story to be told. Silhouetted fliers in the sunset\'s glow, Chasing the day as it begins to go.' },
    { id: 7, description: 'Tiny chicks, a flurry of down, Exploring the world just above the ground. In innocence, they chirp and play, Feathers of tomorrow in the light of today.' },
    { id: 8, description: 'Mountains stand, cloaked in icy attire, Silent sentinels by the frozen fire. Snow-laden peaks in the pale moonlight, Cold whispers echoing through the night.' },
    { id: 9, description: 'Crimson, gold, a tapestry on trees, Autumn\'s farewell in a gentle breeze. Leaves pirouette in a graceful ballet, Nature\'s confetti on an October day.' },
    { id: 10, description: 'Branches ablaze in autumn\'s embrace, A symphony of hues, a painter\'s grace. Crimson and gold, a fiery spree, Fall trees whisper tales of a seasonal glee.' },
    { id: 11, description: 'Alone in purity, a blossom untold, White petals whisper secrets, stories unfold. Grace in simplicity, a pristine delight, In the garden of dreams, a star in the night.' },
    { id: 12, description: 'Rolling waves of green, an endless sea, Whispers of the wind sway the grass with glee. Sunlight kisses each blade in the open expanse, In the quiet fields, nature\'s tranquil dance.' },
    { id: 13, description: 'Homes on hills, like sentinels they stand, Surveying valleys, a view so grand. Nestled high, in nature\'s embrace, A hillside haven, a tranquil space.' },
    { id: 14, description: 'In ocean depths, a ballet unseen, Jellyfish drift, ethereal and serene. Translucent dancers of the silent sea, Graceful pulses in liquid poetry.' },
    { id: 15, description: 'On the rugged coast, a guardian tall, A lighthouse stands, keeper of all. Piercing the night with its steadfast beam, Guiding ships through the dark, a maritime dream.' },
    { id: 16, description: 'Endless ribbons of asphalt unfold, Long tiring roads, stories untold. The journey weaves through weariness and grace, Each mile a chapter, a winding embrace.' },
    { id: 17, description: 'Mountains cradle the sky with stoic might, Trees stand sentinel, a verdant sight. In the embrace of peaks and leaves, Nature whispers secrets the wind retrieves.' },
    { id: 18, description: 'Mountain peaks, where eagles soar, Reflect in waters, a tranquil lore. Mirrored majesty, the view unfolds, Nature\'s masterpiece, a sight to behold.' },
    { id: 19, description: 'Endless horizon, where blue meets blue, The ocean\'s embrace, a timeless view. Whispers of waves, a rhythmic song, Infinite depths where mysteries belong.' },
    { id: 20, description: 'Beneath the palm\'s sway, a tranquil hush, Ocean whispers, a gentle, rhythmic shush. Golden sands cradle serenity\'s reach, In peace by the beach, the soul finds its speech.' },
    { id: 21, description: 'Waters cascade, a tumultuous ballet, Against the rocks, where echoes play. A dance of resilience, a rugged duet, Rocky waters, where strength is met.' },
    { id: 22, description: 'Endless dunes in the burning sun, Sandy Sahara, where shadows run. Whispers of wind in grains that sway, A desert\'s silence, vast and golden array.' },
    { id: 23, description: 'Silent shadows beneath the sea\'s expanse, Sharks glide, in a mysterious dance. Fins cut through depths, a sleek ballet, In their realm, predators silently sway.' },
    { id: 24, description: 'Curving roads like serpents on a quest, Winding through landscapes, never at rest. A panoramic view from each bend, Snakey roads, a journey without end.' },
    { id: 25, description: 'Snakey roads slither through the hills, Twisting tales where adventure spills. Curves and turns, a winding spree, The journey unfolds, wild and free.' },
    { id: 26, description: 'Asphalt serpents winding in a chase, Through valleys deep and open space. Ribboned trails, a journey to unfold, On another snakey road, stories untold.' },
    { id: 27, description: 'Beneath the snow\'s soft, silent glow, Auroras dance in the cold\'s tableau. Frozen hues in the northern night, Snowflakes and lights weave a waltz of delight.' },
    { id: 28, description: 'Mountains crowned in blankets of white, A winter\'s embrace, a majestic sight. Silent peaks in the snow\'s serene repose, Nature\'s masterpiece as the frosty wind blows.' },
    { id: 29, description: 'In the styled garden, blooms align, Colors choreographed, a floral design. Nature\'s couture in petals arrayed, A symphony of beauty, a garden serenade.' },
    { id: 30, description: 'Sunset hues paint the sky and sand, A tranquil canvas, nature\'s soft hand. Waves whisper in the fading light, On the beach, where day takes its quiet flight.' },
    { id: 31, description: 'In the western sky, the sun descends, A blackened sunset, where night suspends. Silhouettes dance in the fading light, A canvas of shadows, embracing the night.' },
    { id: 32, description: 'On the boat, as the sun takes its bow, Reflections shimmer on waves below. A golden path on the evening tide, Sunset\'s embrace on this seafaring ride.' },
    { id: 33, description: 'Mountains blush in the sun\'s parting kiss, A fiery dance in the twilight abyss. Silhouettes etched on the eve\'s grand stage, Sunset mountains, a majestic sage.' },
    { id: 34, description: 'Tall trees, nature\'s cathedral spires, Where leaves compose woodland choirs. Stretching skyward, a symphony in green, In their embrace, a sanctuary unseen.' },
    { id: 35, description: 'Where sands meet the endless sea, The beach unfolds in serenity. Waves whisper tales upon the shore, A timeless dance, forevermore.' },
    { id: 36, description: 'Mountains wear a liquid crown, Rivers and streams cascade down. Nature\'s peaks, where waters flow, A mountain realm, both high and low.' },
    { id: 37, description: 'Cascading curtains, nature\'s art, Water falls, a rhythmic heart. Echoes in the misty air, A dance of liquid, wild and rare.' },
    { id: 38, description: 'Tall falls plummet from heights unknown, A liquid symphony, nature\'s own. Majestic torrents, a watery ballet, In the embrace of heights, they play.' },
    { id: 39, description: 'White mountains wear their snowy cap, A winter\'s tale, a tranquil nap. Silent sentinels in icy repose, Nature\'s elegance in the cold\'s impose.' },
];

module.exports = imageDetails;