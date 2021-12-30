//simple initial interface
//doesn't provide actual comunication with the server
//but it is designed to support that later

let meterLists = [];
function saveMeter(meter){
    //delayed to provide limits of async code, that will be needed when talking with server
    setTimeout(()=>{meterLists.push(meter);},0);
}


export {saveMeter};