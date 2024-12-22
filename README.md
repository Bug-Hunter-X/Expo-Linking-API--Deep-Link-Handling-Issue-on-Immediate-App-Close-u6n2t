# Expo Linking API Deep Link Handling Issue

This repository demonstrates a bug in the Expo `Linking` API where deep links are not reliably handled if the app is closed immediately after opening via a deep link.  The issue is that `Linking.getInitialURL` returns `null` despite the app being launched with a URL.

## How to Reproduce

1. Clone this repository.
2. Run the app using `expo start`.
3. Open a deep link to the app. 
4. Immediately close the app.
5. Attempt to open the app again using the same deep link.  The `Linking.getInitialURL` promise will resolve to `null`. 

## Solution

The solution involves adding a listener to handle the initial url event asynchronously. This allows for a more robust way to handle deep links in the expo application.