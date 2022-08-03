const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err)
    return null
  }

  const first = result

  readFile('./content/second.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err)
      return null
    }

    const second = result
    writeFile('./content/result-async.txt', `Here is the content: ${ first }, ${ second }`, { flag: 'a' }, ( err, result ) => {
      if ( err ) {
        console.log(err)
      }
    })
  })
})