//simple initial interface
//doesn't provide actual comunication with the server
//but it is designed to support that later

import * as ObjConverter from "./MeterObjectConverter";

let lastId = 0;

let meterList = [];

function saveMeter(meter) {
  let id = meter.id;
  if (id == null) {
    lastId++;
    id = lastId;
  }

  //delayed to provide limits of async code, that will be needed when talking with server
  setTimeout(() => {
    meterList.push({ ...ObjConverter.appToServer(meter), id: id });
  }, 100);

  fetch("/meter/new", {
    method: "POST",
    body: ObjConverter.appToServer(meter)
  });
}

function allMeters() {
  console.log(meterList);
  const convertedMeterList = meterList.map((meter) =>
    ObjConverter.serverToApp(meter)
  );
  return new Promise(function executor(resolve) {
    setTimeout(() => resolve(convertedMeterList), 100);
  });
}

export { saveMeter, allMeters };
