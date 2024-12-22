This solution uses an event listener to handle the initial URL. This approach ensures that the app can retrieve the initial URL even if closed immediately after opening.

```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleUrl = async (url) => {
      setInitialUrl(url);
      // handle your deep link logic here
    };

    Linking.addEventListener('url', handleUrl);
    return () => Linking.removeEventListener('url', handleUrl);
  }, []);

  useEffect(() => {
    const getInitialUrl = async () => {
      const url = await Linking.getInitialURL();
      if (url) {
        setInitialUrl(url);
        // handle your deep link logic here
      }
    };
    getInitialUrl();
  }, []);

  // ... rest of your app
  if(initialUrl){
      return <Text>Initial URL: {initialUrl}</Text>
  }else{
      return <Text>No initial URL</Text>
  }
}
```