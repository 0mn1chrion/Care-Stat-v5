import https from 'https';
import fs from 'fs';

https.get('https://raw.githubusercontent.com/0mn1chrion/SVG/refs/heads/main/Car%20Statw', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('src/components/Logo.tsx', `export default function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    ${data.replace(/xmlns="http:\/\/www\.w3\.org\/2000\/svg"/g, '').replace(/clip-path/g, 'clipPath').replace(/fill-rule/g, 'fillRule').replace(/stroke-width/g, 'strokeWidth').replace(/stroke-linecap/g, 'strokeLinecap').replace(/stroke-linejoin/g, 'strokeLinejoin').replace(/stroke-miterlimit/g, 'strokeMiterlimit')}
  );
}`);
    console.log('Saved to src/components/Logo.tsx');
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
