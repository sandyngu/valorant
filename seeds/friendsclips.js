exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('friendsclips').del()
      .then(function () {
        // Inserts seed entries
        return knex('friendsclips').insert([
            {
                date: "06.30.2021",
                agent: "Andrew",
                video: "http://127.0.0.1:8887/Friends Val Clips/5K Pistol Andrew.mp4",
                description: "Acesuuuuuuuu pistol round."
            },
            {
                date: "11.22.2020",
                agent: "Ian",
                video: "http://127.0.0.1:8887/Friends Val Clips/Ian's 5K.mp4",
                description: "Precise Op gunplay."
            },
            {
                date: "10.13.2020",
                agent: "Andrew",
                video: "",
                description: "REPLACE"
            },
            {
                date: "10.07.2020",
                agent: "Andrew",
                video: "http://127.0.0.1:8887/Friends Val Clips/Told Raymond its a 4K Arrow.mp4",
                description: "4K Odin."
            },
            {
                date: "12.19.2020",
                agent: "Tim",
                video: "http://127.0.0.1:8887/Friends Val Clips/Replay_2020.12.19-00.46_Trim.mp4",
                description: "Acesuuuuuuu."
            },
            {
                date: "10.13.2020",
                agent: "Andrew",
                video: "https://valorantclips.s3.us-east-2.amazonaws.com/Friends%20Val%20Clips/1v4%20Pistol%20Andrew.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLWVhc3QtMSJGMEQCIEtfAa1Lb%2FapQWcWwXMc%2FYqsDgqqZ3bWJo2t4zv1CungAiAw%2FHy7P%2BBdQH8VDZR1QWnkghGYa%2Frx9OjT8GwpcucOQir2AggaEAAaDDE3OTY5NzQ0NDgzNyIM%2B4LnvEj7Kh4CLj7sKtMCYmeMTkjjp74A8PIDUfloZekcHeqPtpe8fPUZCBeMKtwq5CXhvnFX533sn1g31Ny4qxJO6XAnC1BNM%2BgsL4MhB0SHVt6EN5hKE41QJBsQ%2BwVT4pPuUFIL8r0ItH6qKb3N0AX39eZRVk%2FhRlbymLGmDzsiS3qDIHI3HdHue5XymaPN%2FAELzIp9eDy0kqzrAnFAoDBguDoUVD5Le1P6iaCiqP8tufZqEsI3WZWRj%2B%2FnSt78wSCnt87soryX1ysYpTxYUjSCVvYpGz10nnvhuD4UB3q7jzdmzLGNXlOSvhIu2OAAThhAvavDcP%2F3g8rCirLh4q5hDwz5I5pM3ZLMKtQzaGJT4i4IvM8A57rLsc62EGC%2FlwVpqVJ9slDs3WCnUkH1cUPbsDO7SVRUriBsuh0MHKUl7MwWzyZz3gz7bEFmEDc4%2B2PO97KmvchhoYyFJrQ1WtEPMOrupYgGOrQCT4e9uhgkfNVCqU%2FAHX1CLrde8UZlji85TeKWQg%2FumClXdtiW9UAQVJnsZiGFY1llawQ6LXXXIQMEPw35DeVoXrDgj8ZL3IsDFkCzlS5t3vckTNMIrLi6l1PN746u0zF0hKvXwjhH%2BxGNQ2SoSbhdeXxmbM5Ms%2FNDB2j5mDluh8qwcOzPtaPGyvoKvut6peXK1Oze1CP%2FasQgXpaf92vRgvx8ORRfG6rvyvBSEfE%2Bm2dxytn3RbV23OhjmY2PFVOzU34iWEaG9ADBm66%2FBZfJll0NY%2FeftpwKKG9VEtMs0%2FmJZN8d%2BFx32nZAK0l4rTtJa4vQJ9nmcBaf%2BANB7Jk6jUdZPKGUXlaFwRzexfZfyl9y857pF9Yz9G5aKjxojF6T9exphqWLDxiiYnox6QKC1YkcMX4%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210803T183236Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASTVWNM7S73DLOZOH%2F20210803%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=05982e361fde8ecf15d57a40dec8e50b73640e6a853401630fe32f2e26d562ad",
                description: "1v4 pistol round."
            },
            {
                date: "11.28.2020",
                agent: "Andrew",
                video: "http://127.0.0.1:8887/Friends Val Clips/Andrew 6K.mp4",
                description: "1v6!!!!!!!!"
            },
            {
                date: "02.23.2021",
                agent: "Andrew",
                video: "http://127.0.0.1:8887/Friends Val Clips/YOLO - 4K Andrew.mp4",
                description: "4K."
            },
            {
                date: "06.16.2021",
                agent: "Bruce",
                video: "http://127.0.0.1:8887/Friends Val Clips/Bruce-Clutch-Moments-clip-from-Jun-16,-2021.mp4",
                description: "3K pistol clutch."
            },
            {
                date: "04.23.2021",
                agent: "Kyle",
                video: "http://127.0.0.1:8887/Kyle's Amazing Clutch - VALORANT   2021-04-23 16-58-40.mp4",
                description: "Kyle's precise gunplay clutch."
            },
            {
                date: "07.12.2021",
                agent: "Raymond",
                video: "http://127.0.0.1:8887/Friends Val Clips/Raymond-Clutch-1v3-Moments-clip-from-Jul-12,-2021.mp4",
                description: "Clutching an eco 1v3."
            },
            {
                date: "07.12.2021",
                agent: "Tim",
                video: "http://127.0.0.1:8887/Friends Val Clips/IS_THAT_A_CLIP.mp4",
                description: "Acesuuuuuuuuuu."
            },
            {
                date: "07.12.2021",
                agent: "Tim",
                video: "http://127.0.0.1:8887/Friends Val Clips/WHY_ARE_YOU_ALIVE.mp4",
                description: "1v3 shoulda died doe."
            }
        ]);
    });
};