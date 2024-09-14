'use server';

const fs = require('fs');
const path = require('path');



export  async function Test() {
    // Your code here

    const publicDir = path.join(process.cwd(), 'public');
    const filePath = path.join(publicDir, 'test.txt');
    const content = 'This is a test file';

    try {
        fs.writeFileSync(filePath, content);
        console.log('File created successfully');
    } catch (error) {
        console.error('Error creating file:', error);
    }

    return content;
}