const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const moment = require('moment');

const backupDir = path.join(__dirname, '../backups');
const date = moment().format('YYYY-MM-DD');
const backupPath = path.join(backupDir, date);

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

const command = `mongodump --uri="${process.env.MONGODB_URI}" --out="${backupPath}"`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error('Backup failed:', error);
    process.exit(1);
  }
  console.log('Backup completed successfully:', stdout);
});