// Double check if promise automatically exists, if not then enable promise.js
if(!window.Promise){
    window.Promise = Promise;
}

// Check if user browser supports SW, if it does then register
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then(() => {
        console.log('Service worker registered');
    }).catch((err)=> {
        console.log('Service worker could not register:', err)  
    });;
};

// Defer the add app to homescreen banner to an event of our choosing
window.addEventListener('beforeinstallprompt', (e) =>{
    console.log('beforeinstallprompt fired');
    e.preventDefault();
    deferredPrompt = e;
    return false;
});

// var promise = new Promise((resolve, reject)=>{
//     setTimeout( () => {
//         resolve('This executed once timer is done')
//     }, 4000);

//     setTimeout( () => {
//         reject({code:500, message:'An error occured!'})
//     }, 3000);
// });

fetch('https://httpbin.org/ip')
    .then((response)=>{
        console.log(response);
        return response.json();
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=> {
        console.log(err)
    })

fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        message: "Does this work?"
    })
})
    .then((response)=>{
        console.log(response);
        return response.json();
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=> {
        console.log(err)
    })

// promise.then((text)=>{
//     return text;
// }).then((newText)=>{
//     console.log(newText);
// }).catch((err)=> {
//     console.log(err.code, err.message)  
// });

// promise.then((text)=>{
//     return text;
// }, (err) =>{
//     console.log(err.code, err.message)
// }).then((newText)=>{
//     console.log(newText);
// });


console.log('This is executed right after setTimeout()')