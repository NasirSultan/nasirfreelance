
# What Are Streams in Node.js?

Streams let your program handle data little by little instead of all at once. This helps your program use less memory and work faster, especially with big files.


## Types of Streams

 **Readable streams**: Used to read data (like reading a file).
 **Writable streams**: Used to write data (like saving to a file).

---

## Why Use Streams?

If you read a big file all at once, it can use a lot of memory and slow down your app. Streams read or write small pieces of data at a time, so your app stays fast and uses less memory.

---

## Example: Readable Stream API

This API reads a file and sends its content bit by bit to whoever asks.

```js
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

const filePath = path.join(__dirname, 'file.txt');

app.get('/read-file', (req, res) => {
  if (!fs.existsSync(filePath)) {
    return res.status(404).send('File not found.');
  }

  const readableStream = fs.createReadStream(filePath, 'utf8');

  res.setHeader('Content-Type', 'text/plain');

  readableStream.pipe(res);

  readableStream.on('error', () => {
    res.status(500).send('Error reading file.');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

---

## Example: Writable Stream API

This API takes text from the user and saves it to a file bit by bit.

```js
app.use('/write-file', express.text());

app.post('/write-file', (req, res) => {
  const writableStream = fs.createWriteStream(filePath);

  writableStream.write(req.body);
  writableStream.end();

  writableStream.on('finish', () => {
    res.json({ message: 'File saved successfully.' });
  });

  writableStream.on('error', () => {
    res.status(500).json({ error: 'Failed to save file.' });
  });
});
```

---

## How to Test with Postman

To **write** to file:

  Send a POST request to `http://localhost:3000/write-file`
  Set header `Content-Type to text/plain`
  Put any text you want in the body and send.

**read** from file:

  Send a GET request to `http://localhost:3000/read-file`
  You will get the file content back in small chunks.


---

**Written by Nasir**
A Full Stack Developer sharing simple and useful Node.js tips

