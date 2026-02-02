REFLECTION

1. **What was the hardest part to understand?**
One thing I found difficult was understanding how 'this' works inside methods. At first, I was confused about how the same method could work for different playlists. After looking over the code, I realized that 'this' refers to the playlist object calling the method, so each playlist manages its own data.

2. **How does this code use this to tie data and behavior together?**
This code uses 'this' to link the playlist’s information with what it can do. Each method uses this to get and change the playlist’s details, like songs and currentSong. For example, when skipSong() is used, this.songs means the song list of the playlist that called the method.

3. **What would you do differently if you wrote this object from scratch?**
If I wrote this object from scratch, I would prevent duplicate songs from being added to the playlist. I would also consider storing songs as objects rather than strings so that additional information, such as the artist or duration, can be included.