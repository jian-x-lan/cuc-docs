const fs = require('fs')
const path = require('path')

//定义不生成顶部导航栏的文件夹名称
const ignoreNavArr = ['about'];

function readFileSync (readurl, parent) {
  let obj = []
  let files = fs.readdirSync(readurl)
  files.forEach(function (filename) {
    let fullpath = path.join(readurl, filename)
    let stats = fs.statSync(fullpath)
    if (stats.isFile()) {
      let fileTrueName = filename.split('.')[0]
      if (fileTrueName && fileTrueName !== 'README') {
        obj.push(
          {
            "title": fileTrueName,
            "path": `${parent}/${fileTrueName}`
          }
        )
      }
    } else if (stats.isDirectory()) {
      if (filename !== 'images') {
        let s = {}
        obj.push(
          s[`${parent}/${filename}`] =
          {
            title: `${filename}`,
            collapsable: true,
            children: readFileSync(fullpath, `${parent}/${filename}`)
          }
        )
      }

    }
  }
  );

  return obj
}

function slider (readurl, parent) {
  let sideBar = {}
  let navArr = []
  let files = fs.readdirSync(readurl)
  files.forEach(function (filename) {
    let fullpath = path.join(readurl, filename)
    let stats = fs.statSync(fullpath)
    if (stats.isDirectory()) {
      if (ignoreNavArr.indexOf(filename) == -1) {
        navArr.push({ text: filename, link: `${parent}/${filename}/` }, )
      }
      sideBar[`${parent}/${filename}/`] = [{
        title: `${filename}`,
        collapsable: false,
        children: readFileSync(fullpath, `${parent}/${filename}`)
      }]
    }
  });
  return {
    sideBar, navArr
  }
}

const themeConfigData = slider(path.resolve(__dirname, './docs'), '/docs')

console.log(JSON.stringify(themeConfigData))

module.exports = themeConfigData
