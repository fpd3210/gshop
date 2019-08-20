/*
直接更新state的多个方法的对象
 */

import Vue from'vue'

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAN_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },

  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },

  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },

  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  },
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },
  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },
  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },
  [INCREMENT_FOOD_COUNT](state, {food}) {
    if(!food.count){ //如果没有值添加属性
      //food.count = 1   //没有数据绑定
      Vue.set(food,'count',1)  //让新增的属性也有数据绑定
      state.shopCart.push(food)
    }else {
      food.count++
    }
  },[DECREMENT_FOOD_COUNT](state, {food}) {
    console.log('mutations')
    if (food.count){ //只有有值才去减
      food.count--
      if(food.count===0){
        state.shopCart.splice(state.shopCart.indexOf(food,1))
      }
    }
  },[CLEAN_CART](state) {
    //清除food中的count
    state.shopCart.forEach(food=>{
      food.count = 0
    })
    //清除shopCart
    state.shopCart = []
  },

  [RECEIVE_SEARCH_SHOPS](state, {searchShops}) {
    state.searchShops = searchShops
  },
}
