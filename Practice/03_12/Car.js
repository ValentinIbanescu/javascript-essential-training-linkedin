const Car = class {
  constructor(
    // Define params (values)
    name,
    brand,
    numOfSeats,
    color,
    enginePower,
    engineStatus,
    chargingStatus,
    medBoxColor,
    medBoxDressings,
    medBoxExpired,
    medBoxPlasters
  ) {
    // Define properties (keys)
    this.name = name;
    this.brand = brand;
    this.numOfSeats = numOfSeats;
    this.color = color;
    this.enginePower = enginePower;
    this.engineStatus = engineStatus;
    this.chargingStatus = chargingStatus;
    this.medBox = {
      color: medBoxColor,
      dressings: medBoxDressings,
      expired: medBoxExpired,
      plasters: medBoxPlasters,
    };
  }
  // Define methods
  startEngine(newStatus) {
    this.engineStatus = newStatus;
  }
  rechargeBattery(charged) {
    this.chargingStatus = `${
      parseFloat(this.chargingStatus) + parseFloat(charged)
    }%`;
  }
};

export default Car;
