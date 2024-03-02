let _address = document.querySelector('.wAddress');
const btn = document.querySelector('.btn');
let result1 = document.querySelector('.result1');
let result2 = document.querySelector('.result2');
let result3 = document.querySelector('.result3');
let result4 = document.querySelector('.result4');
let apiUserID = `https://layer3.xyz/_next/data/bbG-Z2Zar2Bh6gk5UVczD/`;
let userData;

function isValidAddress(address) {
    const regex = /^0x[a-fA-F0-9]{40}$/;
    return regex.test(address);
}


function getUserID(address){
    console.clear();
    console.log(address)
    if(address!=''){
        fetch(`${apiUserID}${address}.json?`)
        .then(resp=>resp.json())
        .then(data=>{
            userData=data;
            result1.innerHTML=`User ID : ${data.pageProps.trpcState.json.queries[0].state.data.id}`;
            console.log(data);
        })
        .catch(error=>result1.innerHTML="Error aagya "+error)
    }else{
        alert('address cannot be empty')
    }
}
btn.addEventListener('click',()=>{if(isValidAddress(_address.value)){getUserID(_address.value)}else(alert('Invalid ERC20 Address!'))});