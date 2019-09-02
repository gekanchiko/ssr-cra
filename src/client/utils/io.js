import http from 'http';
import fs from 'fs';
import { spawn } from 'child_process';

class IO {

  downloadFile = (url, dest, cb) => {
    const file = fs.createWriteStream(dest);
    http.get(url, function(response) {
      response.pipe(file);
      file.on('finish', function() {
        file.close(cb);  // close() is async, call cb after close completes.
      });
    }).on('error', function(err) { // Handle errors
      fs.unlink(dest); // Delete the file async. (But we don't check the result)
      if (cb) cb(err.message);
    });
  };

  readFile = (dest, cb) => {
    fs.readFile(dest, (err, data) => {
      if (err) console.log(err);
      cb(data.toString());
    });
  };

  runScript = (dest, cb) => {
    const ls = spawn('node', [dest]);

    ls.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    ls.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    ls.on('close', (code) => {
      console.log(global);
      console.log(`child process exited with code ${code}`);
      cb && cb();
    });
  };

  downloadAndRun = (url, dest, callback) => {
    this.downloadFile(url, dest, () => {
        this.runScript(dest, callback);
        // setTimeout(() => {
        //   console.log('Removing...');
        //   fs.unlink(publicPath, (err) => {
        //     if (err) throw err;
        //     console.log(`File ${publicPath} was deleted`);
        //   });
        // }, 10000)
      }
    );
  };

  downloadAndRead = (url, dest) => {
    return new Promise(resolve => {
      this.downloadFile(url, dest, () => {
        this.readFile(dest, resolve);
      })
    });
  };

}

const io = new IO();

export default io;