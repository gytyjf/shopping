import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-type'

export default {
    addCar(context, payload) {
    return new Promise( (resolve,reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);
      if(oldProduct) {
        // oldProduct.count++
        context.commit(ADD_COUNTER, oldProduct);
        resolve('再次添加')
      } else {
        payload.count = 1;
        // context.state.cartList.push(payload)
        context.commit(ADD_TO_CART, payload);
        resolve('添加成功')
      }
    })
    }
  }