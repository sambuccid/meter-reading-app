import * as ObjConverter from "./MeterObjectConverter";

//TODO this will be removed once the app will be served by spring boot itself
const URL_ENDPOINT = "http://localhost:8080";

function saveMeter(meter) {
  return fetch(URL_ENDPOINT + "/meters", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(ObjConverter.appToServer(meter))
  });
}

async function allMeters(){
  const resp = await fetch(URL_ENDPOINT + "/meters");
  const metersResp = await resp.json();
  console.log(metersResp);
  const meters = metersResp.map((meterResp) => ObjConverter.serverToApp(meterResp));
  return meters;
}

export { saveMeter, allMeters };
