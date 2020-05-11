const verticalAxis = [{
  a: {},
  b: {},
  c: {},
  d: {},
  e: {},
  f: {},
  g: {},
  h: {},
  i: {},
  j: {},
  k: {},
  l: {},
}]
const services = {
  mapCity: async () => {
    for await (let [index, value] of Object.entries(verticalAxis[0])) {
      for (let i = 1; i < 12; i++) {
        verticalAxis[0][index][i] = null;
      }
    }
    return verticalAxis;
  },
  startPositionsAirports: async(airport) => {
    let oldVerticalPosition = null;
    let oldHorizontalPosition = null;
    for (let i = 1; i <= airport; i++) {
    
     let verticalPosition = Math.floor(Math.random() * 12);
     let horizontalPosition = Math.floor(Math.random() * 12 + 1);
     if(oldHorizontalPosition == horizontalPosition) {
       while(oldHorizontalPosition == horizontalPosition){
         horizontalPosition = Math.floor(Math.random() * 12 + 1);
        }
      }
      if(oldVerticalPosition == verticalPosition) {
        while(oldVerticalPosition == verticalPosition){
          verticalPosition = Math.floor(Math.random() * 12);
        }
      }
      await _pv_switchedCloudsAndAirports({ horizontalPosition, verticalPosition, type: 'AP' });
      oldVerticalPosition = verticalPosition;
      oldHorizontalPosition = horizontalPosition;
    }
    return verticalAxis[0];
  },
  startPositionsClouds: async () => {
    let oldVerticalPosition = null;
    let oldHorizontalPosition = null;
    for (let i = 1; i <= 4; i++) {
    
     let verticalPosition = Math.floor(Math.random() * 12);
     let horizontalPosition = Math.floor(Math.random() * 12 + 1);
     if(oldHorizontalPosition == horizontalPosition) {
       while(oldHorizontalPosition == horizontalPosition){
         horizontalPosition = Math.floor(Math.random() * 12 + 1);
        }
      }
      if(oldVerticalPosition == verticalPosition) {
        while(oldVerticalPosition == verticalPosition){
          verticalPosition = Math.floor(Math.random() * 12);
        }
      }
      await _pv_switchedCloudsAndAirports({ horizontalPosition, verticalPosition, type: 'CLOUD' });
      oldVerticalPosition = verticalPosition;
      oldHorizontalPosition = horizontalPosition;
    }
    return verticalAxis[0];
  },
}
 const _pv_switchedCloudsAndAirports = async (payload) => {
    switch (payload.verticalPosition) {
      case 0:
        if (payload.type === 'CLOUD') {
          if (verticalAxis[0].a[`${payload.horizontalPosition}`] !== null) {
            verticalAxis[0].a[`${payload.horizontalPosition}`] = payload.type;
          } else {
            while(verticalAxis[0].a[`${payload.horizontalPosition}`] !== null && 
              payload.horizontalPosition <= 12) {
              payload.horizontalPosition = Math.floor(Math.random() * 12 + 1);
            }
            verticalAxis[0].a[`${payload.horizontalPosition}`] =  payload.type;
          }
        } else {
          verticalAxis[0].a[`${payload.horizontalPosition}`] = payload.type;
        }
        break;
      case 1:
        if (payload.type === 'CLOUD') {
          if (verticalAxis[0].b[`${payload.horizontalPosition}`] != null) {
            verticalAxis[0].b[`${payload.horizontalPosition}`] = payload.type;
          } else {
            while(verticalAxis[0].b[`${payload.horizontalPosition}`] !== null && 
              payload.horizontalPosition <= 12) {
              payload.horizontalPosition = Math.floor(Math.random() * 12 + 1);
            }
            verticalAxis[0].b[`${payload.horizontalPosition + 1}`] =  payload.type;
          }
        } else {
          verticalAxis[0].b[`${payload.horizontalPosition}`] = payload.type;
        }
        break;
      case 2:
        if (payload.type === 'CLOUD') {
          if (verticalAxis[0].c[`${payload.horizontalPosition}`] != null) {
            verticalAxis[0].c[`${payload.horizontalPosition}`] = payload.type;
          } else {
            while(verticalAxis[0].c[`${payload.horizontalPosition}`] !== null && 
              payload.horizontalPosition <= 12) {
              payload.horizontalPosition = Math.floor(Math.random() * 12 + 1);
            }
            verticalAxis[0].c[`${payload.horizontalPosition + 1}`] =  payload.type;
          }
        } else {
          verticalAxis[0].c[`${payload.horizontalPosition}`] = payload.type;
        }
        break;
      case 3:
        if (payload.type === 'CLOUD') {
          if (verticalAxis[0].d[`${payload.horizontalPosition}`] != null) {
            verticalAxis[0].d[`${payload.horizontalPosition}`] = payload.type;
          } else {
            while(verticalAxis[0].d[`${payload.horizontalPosition}`] !== null && 
              payload.horizontalPosition <= 12) {
              payload.horizontalPosition = Math.floor(Math.random() * 12 + 1);
            }
            verticalAxis[0].d[`${payload.horizontalPosition + 1}`] =  payload.type;
          }
        } else {
          verticalAxis[0].d[`${payload.horizontalPosition}`] = payload.type;
        }
        break;
      case 4:
        if (payload.type === 'CLOUD') {
          if (verticalAxis[0].e[`${payload.horizontalPosition}`] != null) {
            verticalAxis[0].e[`${payload.horizontalPosition}`] = payload.type;
          } else {
            while(verticalAxis[0].e[`${payload.horizontalPosition}`] !== null && 
              payload.horizontalPosition <= 12) {
              payload.horizontalPosition = Math.floor(Math.random() * 12 + 1);
            }
            verticalAxis[0].e[`${payload.horizontalPosition + 1}`] =  payload.type;
          }
        } else {
          verticalAxis[0].e[`${payload.horizontalPosition}`] = payload.type;
        }
        break;
      case 5:
        if (payload.type === 'CLOUD') {
          if (verticalAxis[0].f[`${payload.horizontalPosition}`] != null) {
            verticalAxis[0].f[`${payload.horizontalPosition}`] = payload.type;
          } else {
            while(verticalAxis[0].f[`${payload.horizontalPosition}`] !== null && 
              payload.horizontalPosition <= 12) {
              payload.horizontalPosition = Math.floor(Math.random() * 12 + 1);
            }
            verticalAxis[0].f[`${payload.horizontalPosition + 1}`] =  payload.type;
          }
        } else {
          verticalAxis[0].f[`${payload.horizontalPosition}`] = payload.type;
        }
        break;
      case 6:
        if (payload.type === 'CLOUD') {
          if (verticalAxis[0].g[`${payload.horizontalPosition}`] != null) {
            verticalAxis[0].g[`${payload.horizontalPosition}`] = payload.type;
          } else {
            while(verticalAxis[0].g[`${payload.horizontalPosition}`] !== null && 
              payload.horizontalPosition <= 12) {
              payload.horizontalPosition = Math.floor(Math.random() * 12 + 1);
            }
            verticalAxis[0].g[`${payload.horizontalPosition + 1}`] =  payload.type;
          }
        } else {
          verticalAxis[0].g[`${payload.horizontalPosition}`] = payload.type;
        }
        break;
      case 7:
        if (payload.type === 'CLOUD') {
          if (verticalAxis[0].h[`${payload.horizontalPosition}`] != null) {
            verticalAxis[0].h[`${payload.horizontalPosition}`] = payload.type;
          } else {
            while(verticalAxis[0].h[`${payload.horizontalPosition}`] !== null && 
              payload.horizontalPosition <= 12) {
              payload.horizontalPosition = Math.floor(Math.random() * 12 + 1);
            }
            verticalAxis[0].h[`${payload.horizontalPosition + 1}`] =  payload.type;
          }
        } else {
          verticalAxis[0].h[`${payload.horizontalPosition}`] = payload.type;
        }
        break;
      case 8:
        if (payload.type === 'CLOUD') {
          if (verticalAxis[0].i[`${payload.horizontalPosition}`] != null) {
            verticalAxis[0].i[`${payload.horizontalPosition}`] = payload.type;
          } else {
            while(verticalAxis[0].i[`${payload.horizontalPosition}`] !== null && 
              payload.horizontalPosition <= 12) {
              payload.horizontalPosition = Math.floor(Math.random() * 12 + 1);
            }
            verticalAxis[0].i[`${payload.horizontalPosition + 1}`] =  payload.type;
          }
        } else {
          verticalAxis[0].i[`${payload.horizontalPosition}`] = payload.type;
        }
        break;
      case 9:
        if (payload.type === 'CLOUD') {
          if (verticalAxis[0].j[`${payload.horizontalPosition}`] != null) {
            verticalAxis[0].j[`${payload.horizontalPosition}`] = payload.type;
          } else {
            while(verticalAxis[0].j[`${payload.horizontalPosition}`] !== null && 
              payload.horizontalPosition <= 12) {
              payload.horizontalPosition = Math.floor(Math.random() * 12 + 1);
            }
            verticalAxis[0].j[`${payload.horizontalPosition + 1}`] =  payload.type;
          }
        } else {
          verticalAxis[0].j[`${payload.horizontalPosition}`] = payload.type;
        }
        break;
      case 10:
        if (payload.type === 'CLOUD') {
          if (verticalAxis[0].k[`${payload.horizontalPosition}`] != null) {
            verticalAxis[0].k[`${payload.horizontalPosition}`] = payload.type;
          } else {
            while(verticalAxis[0].k[`${payload.horizontalPosition}`] !== null && 
              payload.horizontalPosition <= 12) {
              payload.horizontalPosition = Math.floor(Math.random() * 12 + 1);
            }
            verticalAxis[0].k[`${payload.horizontalPosition + 1}`] =  payload.type;
          }
        } else {
          verticalAxis[0].k[`${payload.horizontalPosition}`] = payload.type;
        }
        break;
      case 11:
        if (payload.type === 'CLOUD') {
          if (verticalAxis[0].l[`${payload.horizontalPosition}`] != null) {
            verticalAxis[0].l[`${payload.horizontalPosition}`] = payload.type;
          } else {
            while(verticalAxis[0].l[`${payload.horizontalPosition}`] !== null && 
              payload.horizontalPosition <= 12) {
              payload.horizontalPosition = Math.floor(Math.random() * 12 + 1);
            }
            verticalAxis[0].l[`${payload.horizontalPosition + 1}`] =  payload.type;
          }
        } else {
          verticalAxis[0].l[`${payload.horizontalPosition}`] = payload.type;
        }
        break;
    
      default:
        break;
    }
  }
module.exports = services;