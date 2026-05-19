import https from 'https';

https.get('https://raw.githubusercontent.com/0mn1chrion/SVG/refs/heads/main/Car%20Statw', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Content-Type:', res.headers['content-type']);
    console.log('Data:', data.substring(0, 500));
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
