function serverToApp(meter) {
  return {
    id: meter.id,
    postCode: meter.address.postcode,
    streetNum: meter.address.housenum,
    energy: meter.gasReading
  };
}

function appToServer(meter) {
  return {
    id: meter.id,
    address: {
      postcode: meter.postCode,
      housenum: meter.streetNum
    },
    gasReading: meter.energy
  };
}

export { serverToApp, appToServer };
