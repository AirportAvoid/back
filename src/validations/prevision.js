const validations = {
  startPrevision: async (payload) => {
    const { airport, cloud } = payload;
    if(!airport || airport < 3) throw { status: 400, msg: 'Aeroportos não informados ou quantidade inválida!' }
    if(!cloud || cloud < 4 ) throw { status: 400, msg: 'Nuvems não informadas ou quantidade inválida!' }
  }
}
module.exports = validations;