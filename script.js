// Треба реалізувати свій розпорядок дня.
//     Колбеками, промісами та асинк авейт.
//
//     В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
//     Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
//
//     Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
//     Якщо ж все ок, то ви маєте прожити свій звичайний день.
//     Кожна подія має бути з рандомною (не по зростанню) затримкою.



// let money = 0;
//
// function clearHouse(isJobDone, f, cb) {
//     let cache = 0;
//   setTimeout(() => {
//     if (isJobDone) {
//       cache = 100;
//       f = 1000;
//       cb(null, cache);
//     } else {
//       cb('ERRROOOOR', null)
//     }
//   }, 1000)
// }
//
// function buyJeans(money, cb) {
//   setTimeout(() => {
//     if (money > 200) {
//       console.log('Good jeans bro')
//       money = money - 200
//       cb(null, money)
//     } else {
//       console.log('Nema groshey');
//       cb('NEMA', null)
//     }
//   }, 1000)
// }
//
// let mm = 0;
// clearHouse(true, mm,(err, money) => {
//   if (err) {
//     document.write('House is not clear')
//   } else {
//     document.write('Job done boss')
//       console.log(mm);
//       buyJeans(money, (e, resta) => {
//       if (e) {
//         document.write('Nema dinig')
//       } else {
//         document.write('УРАААА')
//       }
//     })
//   }
// });


// let probability = 0.2
//
// function random() {
//     return Math.random() > probability
// }
//
// function myDay(isTrue, cb) {
//     setTimeout(()=>{
//         if(isTrue){
//             cb(null, 1);
//         } else {
//             cb(1, null)
//         }
//     }, 500)
// }
//
// function takeShower(isTrue, cb) {
//     setTimeout(()=>{
//         if(isTrue){
//             cb(null, 1);
//         } else {
//             cb(1, null)
//         }
//     }, 500)
// }
//
// function takeBreakfast(isTrue, cb) {
//     setTimeout(()=>{
//         if(isTrue){
//             cb(null, 1);
//         } else {
//             cb(1, null)
//         }
//     }, 500)
// }
//
// function goToWork(isTrue, cb) {
//     setTimeout(()=>{
//         if(isTrue){
//             cb(null, 1);
//         } else {
//             cb(1, null)
//         }
//     }, 500)
// }
//
// function timeOutWork(isTrue, cb) {
//     setTimeout(()=>{
//         if(isTrue){
//             cb(null, 1);
//         } else {
//             cb(1, null)
//         }
//     }, 500)
// }
//
// function continuedWork(isTrue, cb) {
//     setTimeout(()=>{
//         if(isTrue){
//             cb(null, 1);
//         } else {
//             cb(1, null)
//         }
//     }, 500)
// }
//
// function rideToHome(isTrue, cb) {
//     setTimeout(()=>{
//         if(isTrue){
//             cb(null, 1);
//         } else {
//             cb(1, null)
//         }
//     }, 500)
// }
//
// function freeTime(isTrue, cb) {
//     setTimeout(()=>{
//         if(isTrue){
//             cb(null, 1);
//         } else {
//             cb(1, null)
//         }
//     }, 500)
// }
//
// myDay(random(), (error, data)=>{
//     if(error){
//         document.write("Bad morning")
//     } else {
//         document.write("Good morning")
//          takeShower(random(), (error, data) => {
//              if(error){
//                  document.write(`</br>`)
//                  document.write("dont have water")
//              } else {
//                  document.write(`</br>`)
//                  document.write("So hot water. uuuuhhhh")
//                  takeBreakfast(random(), (error, data)=>{
//                      if(error){
//                          document.write(`</br>`)
//                          document.write("Dont have foods")
//                      } else {
//                          document.write(`</br>`)
//                          document.write("Bon Apetty")
//                          goToWork(random(), (error, data)=>{
//                              if(error){
//                                  document.write(`</br>`)
//                                  document.write("No transport")
//                              } else {
//                                  document.write(`</br>`)
//                                  document.write("Job, sweet Job")
//                                  timeOutWork(random(), (error, data)=>{
//                                      if(error){
//                                          document.write(`</br>`)
//                                          document.write("Not coffee")
//                                      } else {
//                                          document.write(`</br>`)
//                                          document.write("My favorite, Arabicca")
//                                          continuedWork(random(), (error, data)=>{
//                                              if(error){
//                                                  document.write(`</br>`)
//                                                  document.write("Boss feels so bed")
//                                              } else {
//                                                  document.write(`</br>`)
//                                                  document.write("When I come to home")
//                                                  freeTime(random(), (error, data)=>{
//                                                      if(error){
//                                                          document.write(`</br>`)
//                                                          document.write("My beers is finish")
//                                                      } else {
//                                                          document.write(`</br>`)
//                                                          document.write("Hello friends, would you like beer?")
//                                                      }
//                                                  })
//                                              }
//                                          })
//
//                                      }
//                                  })
//                              }
//                          })
//                  }
//              })
//          }
//         })
//     }
// })












// let probability = 0.4
//
// function random() {
//     return Math.random() > probability
// }
//
// function myDay(isTrue) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(isTrue){
//                 resolve(1);
//             } else {
//                 reject("Bad morning");
//             }
//         }, 500)
//     })
// }
//
// function takeShower(isTrue) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(isTrue){
//                 resolve(1);
//             } else {
//                 reject("Dont have water");
//             }
//         }, 500)
//     })
// }
//
// function takeBreakfast(isTrue) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(isTrue){
//                 resolve(1);
//             } else {
//                 reject("Dont have foods");
//             }
//         }, 500)
//     })
// }
//
// function goToWork(isTrue) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(isTrue){
//                 resolve(1);
//             } else {
//                 reject("No transport");
//             }
//         }, 500)
//     })
// }
//
// function timeOutWork(isTrue) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(isTrue){
//                 resolve(1);
//             } else {
//                 reject("Not coffee");
//             }
//         }, 500)
//     })
// }
//
// function continuedWork(isTrue) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(isTrue){
//                 resolve(1);
//             } else {
//                 reject("Boss feels so bed");
//             }
//         }, 500)
//     })
// }
//

// function rideToHome(isTrue) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(isTrue){
//                 resolve(1);
//             } else {
//                 reject("I must work. Tomorrow presentation!");
//             }
//         }, 500)
//     })
// }

//
// function freeTime(isTrue) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isTrue) {
//                 resolve(1);
//             } else {
//                 reject("My beers is finish");
//             }
//         }, 500)
//     })
// }
//
// myDay(random())
//     .then(value => {
//         document.write("Good morning");
//         return takeShower(random())
//         })
//     .then(value => {
//         document.write(`<br>`);
//         document.write("so hot water");
//         return takeBreakfast(random())
//     })
//     .then(value => {
//         document.write(`<br>`);
//         document.write("Bon Apetty");
//         return goToWork(random())
//     })
//     .then(value => {
//         document.write(`<br>`);
//         document.write("Job, sweet Job");
//         return timeOutWork(random())
//     })
//     .then(value => {
//         document.write(`<br>`);
//         document.write("My favorite, Arabicca");
//         return continuedWork(random())
//     })
//     .then(value => {
//         document.write(`<br>`);
//         document.write("When I come to home");
//         return rideToHome(random())
//     })
//     .then(value => {
//         document.write(`<br>`);
//         document.write("Hello friends, would you like beer?");
//         return freeTime(random())
//     })
//
// .catch(reason => {
//     document.write(`<br>`)
//     document.write(reason)
// })









let probability = 0.4

function random() {
    return Math.random() > probability
}

async function myDay(isTrue) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(isTrue){
                resolve(1);
            } else {
                reject("Bad morning");
            }
        }, 500)
    })
}

function takeShower(isTrue) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(isTrue){
                resolve(1);
            } else {
                reject("Dont have water");
            }
        }, 500)
    })
}

function takeBreakfast(isTrue) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(isTrue){
                resolve(1);
            } else {
                reject("Dont have foods");
            }
        }, 500)
    })
}

function goToWork(isTrue) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(isTrue){
                resolve(1);
            } else {
                reject("No transport");
            }
        }, 500)
    })
}

function timeOutWork(isTrue) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(isTrue){
                resolve(1);
            } else {
                reject("Not coffee");
            }
        }, 500)
    })
}

function continuedWork(isTrue) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(isTrue){
                resolve(1);
            } else {
                reject("Boss feels so bed");
            }
        }, 500)
    })
}

function rideToHome(isTrue) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(isTrue){
                resolve(1);
            } else {
                reject("I must work. Tomorrow presentation!");
            }
        }, 500)
    })
}

function freeTime(isTrue) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isTrue) {
                resolve(1);
            } else {
                reject("My beers is finish");
            }
        }, 500)
    })
}


async function monday() {
    try {
    await myDay(random())
        document.write("Good moing");
        await takeShower(random())

        document.write(`<br>`);
        document.write("so hot water");
        await takeBreakfast(random())

        document.write(`<br>`);
        document.write("Bon Apetty");
        await goToWork(random())

        document.write(`<br>`);
        document.write("Job, sweet Job");
        await timeOutWork(random())

        document.write(`<br>`);
        document.write("My favorite, Arabicca");
        await continuedWork(random())

        document.write(`<br>`);
        document.write("When I come to home");
        await rideToHome(random())

        document.write(`<br>`);
        document.write("Hello friends, would you like beer?");
        await freeTime(random())
    }

    catch(e) {
        document.write(`<br>`)
        document.write(e)
    }}

    monday()










