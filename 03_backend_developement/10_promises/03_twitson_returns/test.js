let i=17;

function Testi() {
  return new Promise((resolve,reject) => {
    if (i<=10) {
      resolve(i)
    } else {
      reject(i)
    }
  });
}

Testi(i)
.then(console.log)
.catch(err => console.log("error :" + err))
