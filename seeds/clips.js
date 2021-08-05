exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('clips').del()
      .then(function () {
        // Inserts seed entries
        return knex('clips').insert([
            {
                date: "04.22.2021",
                agent: "Sage",
                video: "http://127.0.0.1:8887/!! Ace Sage - VALORANT 2021-04-22 22-49-41.mp4",
                description: "Saving the lost round with my acesuuuu."
            },
            {
                date: "05.17.2021",
                agent: "Sage",
                video: "http://127.0.0.1:8887/!! 4K Salvaged Sage - VALORANT   2021-05-17 17-27-06_Trim.mp4",
                description: "Whiffing-turned-precise-gunplay"
            },
            {
                date: "05.21.2021",
                agent: "Reyna",
                video: "http://127.0.0.1:8887/!! Eco Ace Reyna - VALORANT   2021-05-21 21-10-03_Trim.mp4",
                description: "Oh, just acing on an eco round."
            },
            {
                date: "05.05.2021",
                agent: "Sage",
                video: "http://127.0.0.1:8887/!! 4K Clutch Sage - VALORANT   2021-05-05 20-01-13_Trim.mp4",
                description: "Killin' 4 of 'em by myself."
            },
            {
                date: "05.22.2021",
                agent: "Reyna",
                video: "http://127.0.0.1:8887/!! 4K Reyna - VALORANT   2021-05-22 22-45-03_Trim.mp4",
                description: "4K pistol round."
            },
            {
                date: "05.28.2021",
                agent: "Reyna",
                video: "http://127.0.0.1:8887/!! 4K Reyna - VALORANT   2021-05-28 13-41-52_Trim.mp4",
                description: "4K pistol round."
            },
            {
                date: "05.08.2021",
                agent: "Sage",
                video: "http://127.0.0.1:8887/!! 4K Sage - VALORANT   2021-05-08 23-15-01_Trim_Trim.mp4",
                description: "4K tappin' heads, 13-0!"
            },
            {
                date: "05.25.2021",
                agent: "Brimstone",
                video: "http://127.0.0.1:8887/!! 3K Brim - VALORANT   2021-05-25 23-02-48_Trim.mp4",
                description: "3K headshots."
            },
            {
                date: "05.21.2021",
                agent: "Brimstone",
                video: "http://127.0.0.1:8887/!! 3K Flick Brim - VALORANT   2021-05-21 22-56-07_Trim.mp4",
                description: "Kyle reacting to ma flick."
            },
            {
                date: "05.17.2021",
                agent: "Sage",
                video: "http://127.0.0.1:8887/!! 4K Salvaged Sage - VALORANT   2021-05-17 17-27-06_Trim.mp4",
                description: "Whiffed-turned-precise-gunplay pt. 2."
            },
            {
                date: "05.29.2021",
                agent: "Reyna",
                video: "http://127.0.0.1:8887/SteelSeries Moments/VALORANT__2021-05-29__15-27-49.mp4",
                description: "Reyna ace."
            },
            {
                date: "06.08.2021",
                agent: "Brimstone",
                video: "http://127.0.0.1:8887/SteelSeries Moments/4K-Brim-Moments-clip-from-Jun-08,-2021.mp4",
                description: "4K pistol round."
            },
            {
                date: "06.13.2021",
                agent: "Sage",
                video: "http://127.0.0.1:8887/SteelSeries Moments/4K-Sage-Moments-clip-from-Jun-13,-2021.mp4",
                description: "4K on Sagé."
            },
            {
                date: "06.20.2021",
                agent: "Brimstone",
                video: "http://127.0.0.1:8887/SteelSeries Moments/4K-Clutch-Brim-Moments-clip-from-Jun-20,-2021.mp4",
                description: "1v4 clutchhhh."
            },
            {
                date: "06.20.2021",
                agent: "Phoenix",
                video: "http://127.0.0.1:8887/SteelSeries Moments/4K-Phoenix-Moments-clip-from-Jun-20,-2021.mp4",
                description: "4K."
            },
            {
                date: "06.23.2021",
                agent: "Sage",
                video: "http://127.0.0.1:8887/SteelSeries Moments/VALORANT__2021-06-23__20-16-34.mp4",
                description: "4K pistol round."
            },
            {
                date: "07.05.2021",
                agent: "Sage",
                video: "http://127.0.0.1:8887/SteelSeries Moments/Ace-No-1st-Kill-Moments-clip-from-Jul-05,-2021.mp4",
                description: "Ace no 1st kill."
            },
            {
                date: "06.20.2021",
                agent: "Brimstone",
                video: "http://127.0.0.1:8887/SteelSeries Moments/4K-Clutch-Brim2-Moments-clip-from-Jun-20,-2021.mp4",
                description: "4K clutch."
            },
            {
                date: "06.20.2021",
                agent: "Brimstone",
                video: "http://127.0.0.1:8887/SteelSeries Moments/Ace-Brim-Moments-clip-from-Jun-20,-2021.mp4",
                description: "Go get that ace, babe."
            },
            {
                date: "06.19.2021",
                agent: "Brimstone",
                video: "http://127.0.0.1:8887/SteelSeries Moments/4K-Brim-Moments-clip-from-Jun-19,-2021.mp4",
                description: "4K pistol round."
            },
            {
                date: "06.17.2021",
                agent: "Brimstone",
                video: "http://127.0.0.1:8887/SteelSeries Moments/4K-Clutch-Moments-clip-from-Jun-17,-2021.mp4",
                description: "1v4 clutch!"
            },
            {
                date: "06.14.2021",
                agent: "Brimstone",
                video: "http://127.0.0.1:8887/SteelSeries Moments/Ace-Moments-clip-from-Jun-14,-2021.mp4",
                description: "Acesuuuuuuuuuuuuu."
            },
            {
                date: "05.28.2021",
                agent: "Reyna",
                video: "http://127.0.0.1:8887/SteelSeries Moments/Moments-clip-from-May-28,-2021.mp4",
                description: "1v4 clutch, 00.03 defuse."
            },
            {
                date: "07.01.2021",
                agent: "Sage",
                video: "http://127.0.0.1:8887/SteelSeries Moments/4K-Pistol-Sage-Moments-clip-from-Jul-01,-2021.mp4",
                description: "4K pistol round."
            },
            {
                date: "07.01.2021",
                agent: "Sage",
                video: "http://127.0.0.1:8887/!! CRAZY - VALORANT   2021-03-09 18-10-00.mp4",
                description: "Raymond and Tim React to Flick."
            },
            {
                date: "07.14.2021",
                agent: "Brimstone",
                video: "http://127.0.0.1:8887/SteelSeries Moments/VALORANT__2021-07-14__17-54-27.mp4",
                description: "ACE!"
            },
            {
                date: "07.06.2021",
                agent: "Sage",
                video: "http://127.0.0.1:8887/SteelSeries Moments/Stolen-Ace-Sage-Moments-clip-from-Jul-06,-2021.mp4",
                description: "Stolen ace :(."
            },
            {
                date: "08.03.2021",
                agent: "Sage",
                video: "http://127.0.0.1:8887/SteelSeries Moments/http://127.0.0.1:8887/SteelSeries Moments/VALORANT__2021-08-03__21-06-10.mp4",
                description: "4K redemption xd."
            },
            {
                date: "08.04.2021",
                agent: "Sage",
                video: "http://127.0.0.1:8887/SteelSeries Moments/4K-Pistol-Sage-Moments-clip-from-Aug-04,-2021.mp4",
                description: "4K pistol trigger discipline?"
            }
            
          ]);
      });
  };
  