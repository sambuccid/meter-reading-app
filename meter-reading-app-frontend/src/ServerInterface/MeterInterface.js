//simple initial interface
//doesn't provide actual comunication with the server
//but it is designed to support that later

let lastId = 0;

let meterList = [];
function saveMeter(meter){
    let id = meter.id;
    if(id == null){
        lastId++;
        id=lastId;
    }

    //delayed to provide limits of async code, that will be needed when talking with server
    setTimeout(()=>{meterList.push({...meter, id: id});},0);
}

function allMeters(callback){
    console.log("loading meters",meterList);
    setTimeout(()=>{callback([...meterList]);},0);
}


export {saveMeter, allMeters};