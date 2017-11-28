# get-stack

GET | `https://get-stack.now.sh/?url=https://www.zeit.co&recursive=true`

```json
{
  "url": "https://www.zeit.co",
  "options": {
    "debug": false,
    "delay": 500,
    "maxDepth": 3,
    "maxUrls": 10,
    "maxWait": 3000,
    "recursive": true,
    "userAgent": "Wappalyzer"
  },
  "data": [
    {
      "name": "Next.js",
      "confidence": "100",
      "version": "",
      "icon": "zeit.svg",
      "website": "https://zeit.co/next",
      "categories": [
        {
          "18": "Web Frameworks"
        },
        {
          "22": "Web Servers"
        }
      ]
    },
    {
      "name": "Nginx",
      "confidence": "100",
      "version": "",
      "icon": "Nginx.svg",
      "website": "http://nginx.org/en",
      "categories": [
        {
          "22": "Web Servers"
        }
      ]
    },
    {
      "name": "React",
      "confidence": "100",
      "version": "",
      "icon": "React.png",
      "website": "http://facebook.github.io/react",
      "categories": [
        {
          "12": "JavaScript Frameworks"
        }
      ]
    },
    {
      "name": "webpack",
      "confidence": "100",
      "version": "",
      "icon": "webpack.svg",
      "website": "http://webpack.github.io",
      "categories": [
        {
          "44": "Build CI Systems"
        }
      ]
    },
    {
      "name": "Node.js",
      "confidence": "0",
      "version": "",
      "icon": "node.js.png",
      "website": "http://nodejs.org",
      "categories": [
        {
          "27": "Programming Languages"
        }
      ]
    }
  ]
}
```
