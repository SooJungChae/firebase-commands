# Firebase scripts

## How to run
1) npm install
2) start script file

```js
npm start [scriptFileName]

npm start addBatchData.js
```
---

## Scripts
### addBatchData

- Use this script when you need to batch lots of documents.

1) Add `.env` file to configure settings
```bash
# See: https://firebase.google.com/docs/web/learn-more#config-object

FIREBASE_API_KEY='$YOUR_API_KEY$'
FIREBASE_AUTH_DOMAIN='$YOUR_PROJECT_ID$.firebaseapp.com'
FIREBASE_DATABASE_URL='https://$YOUR_PROJECT_ID$.firebaseio.com'
FIREBASE_PROJECT_ID='$YOUR_PROJECT_ID$'
FIREBASE_STORAGE_BUCKET='$YOUR_PROJECT_ID$.appspot.com'
FIREBASE_MESSAGING_SENDER_ID='$YOUR_SENDER_ID$'
FIREBASE_APP_ID='$YOUR_APP_ID$'
```
2) Set your collection path
```js 
const path = 'products';
```

3) Replace documents to your data
```js
const documents = [
  { casNo: '1111', name: '1111', imageUrl: '', type: 'OLED' },
  { casNo: '2222', name: '2222', imageUrl: '', type: 'OLED' },
];
```