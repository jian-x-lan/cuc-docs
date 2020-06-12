const fs = require('fs')
const path = require('path')

function readFileSync (readurl, parent) {
  let temp = []
  let files = fs.readdirSync(readurl)
  files.forEach(function (filename) {
    let fullpath = path.join(readurl, filename)
    let stats = fs.statSync(fullpath)
    if (stats.isFile() && filename !== 'README.md') {
      let fileTrueName = filename.substr(0, filename.length - 3)
      temp.push(
        {
          "title": fileTrueName,
          "path": `${parent}/${fileTrueName}`
        }
      )
    } else if (stats.isDirectory()) {
      let s = {}
      temp.push(
        s[`${parent}/${filename}`] =
        {
          title: `${filename}`,
          collapsable: false,
          // path: `${parent}/${filename}`,
          children: readFileSync(fullpath, `${parent}/${filename}`)
        }
      )
    }
  }
  );

  return temp
}

function slider (readurl, parent) {
  let temp = {}
  let files = fs.readdirSync(readurl)
  files.forEach(function (filename) {
    let fullpath = path.join(readurl, filename)
    let stats = fs.statSync(fullpath)
    if (stats.isDirectory()) {
      temp[`${parent}/${filename}/`] = [{
        title: `${filename}`,
        collapsable: false,
        children: readFileSync(fullpath, `${parent}/${filename}`)
      }]
    }
  });
  return temp
}

const sidebarData = slider(path.resolve(__dirname, './docs'), '/docs')

console.log(JSON.stringify(sidebarData) )

module.exports = {
  sidebarData
}
