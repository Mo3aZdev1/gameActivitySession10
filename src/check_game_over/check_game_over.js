// export function checkGameOver() {
//     return new Promise((resolve) => {
//       console.log("Initializing game...");
//       setTimeout(() => {
//         console.log("Game initialized successfully!");
//         resolve();
//       }, 1000);
//     });
//   }

// initializeGame().then(() => console.log("Test complete: initializeGame"));

export function checkGameOver() {
    return new Promise((resolve, reject) => {
        const conditions = false;
        if (conditions) {
            setTimeout(resolve, 2000)
        }
        else {
            setTimeout(reject, 2000, "Game over!")
        }
    });
  }

checkGameOver()
    .then(() => console.log("Continue playing"))
    .catch((error) => console.log(error));