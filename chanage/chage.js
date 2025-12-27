// 直接执行脚本
() => {
  const { execSync } = require('child_process')
  execSync('git add .')
  execSync('git commit -m "chage"')
  execSync('git push')
}