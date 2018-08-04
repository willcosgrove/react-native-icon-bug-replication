# Bug Reproduction

[![Click to watch as a video](http://c.willl.me/tUVD/Screen%252520Recording%2525202018-08-04%252520at%25252010.32%252520AM.gif)](http://c.willl.me/tU9u)

1. Build and run the app for iOS:
    ```
    react-native run-ios
    ```
2. Click on the play button to navigate to the second screen and see that the play button on the second (purple) screen is also solid.
3. Navigate back to the first screen (swipe from left hand side of screen to right)
4. Close the app and reopen the app
5. Navigate back to the second screen by tapping the play button.
6. Play button on purple screen is now be rendering in "regular" style instead of solid, but it should still be rending as solid.  If it is not rendering as regular, repeat steps 3-5 a few times.  I can usually replicate it within 3 attempts.
