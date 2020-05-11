const validations = require('../validations/prevision.js');
const services = require('../services/prevision.js');

const previsionController = {
  startPrevision: async (payload) => {
    await validations.startPrevision(payload);
    const mapCity = await services.mapCity();
    const positionAirports = await services.startPositionsAirports(parseInt(payload.airport));
    const positionClouds = await services.startPositionsClouds(parseInt(payload.cloud));
    console.log(positionClouds)
    return { posicao: positionClouds };
  }
}
module.exports = previsionController;