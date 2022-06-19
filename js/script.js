// Task 1


// loadJson('no-such-user.json')
//     .catch(alert);


// async function loadJson(url) {
//     let response = await fetch(url);
//     if (response.status == 200) {
//         let result = await response.json();
//         return result;
//     }

//     throw new Error(response.status);
// }

// loadJson('no-such-user.json')
//     .catch(alert);

// Task 2

async function loadJson(url) {
    let response = await fetch(url);
    let result = await response.json();
    console.log(result);
}

loadJson('https://jsonplaceholder.typicode.com/todos/1')