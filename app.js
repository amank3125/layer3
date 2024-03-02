let walletAddress = document.querySelector('.wAddress');
const btn = document.querySelector('.btn');
let result1 = document.querySelector('.result1');
let result2 = document.querySelector('.result2');
let result3 = document.querySelector('.result3');
let result4 = document.querySelector('.result4');
let apiUserID = `https://layer3.xyz/_next/data/bbG-Z2Zar2Bh6gk5UVczD/`
function getUserID(address){
    console.clear();
    console.log(`${apiUserID}${address}.json?`)
    if(address.value!=""){
        fetch(`${apiUserID}${address}.json?`, {
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(resp=>resp.json())
        .then(data=>console.log(data))
        .catch(error=>result1.innerHTML="Error aagya "+error)
    }
}
btn.addEventListener('click',()=>{getUserID(walletAddress.value)});