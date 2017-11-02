<template>
  <swiper class="swiper-contain" :options="swiperOpts">
    <swiper-slide v-for="(item, index) in item.list" :key="index">
      <div class="goodsImg" @click="toDetail(item)">
        <img :src="item.goods_main_photo" class="photo">
      </div>
      <div class="good-info">
        <div class="price">
          <span class="goods-price-val">￥{{item.activity_price}}</span>
          <span class="activity-price-val">￥{{item.goods_price}}</span>
        </div>
        <div class="name">{{item.goods_name}}</div>
        <div class="btn">
          <img :src="btnIconArray[pageType][0]" class="share" @click="goodShare(item)" v-if="isShowShare">
          <img :src="btnIconArray[pageType][1]" class="cart" @click="toGoodsCart(item)">
        </div>
      </div>
    </swiper-slide>
    <swiper-slide  class="look-more">
      <div @click="toClassify(item.config1,item.config2)">查看更多</div>
    </swiper-slide>
  </swiper>
</template>
<script>
require("swiper/dist/css/swiper.css");
import VueAwesomeSwiper from "vue-awesome-swiper";
import Vue from "vue";
Vue.use(VueAwesomeSwiper);

export default {
  name: "awesome-swiper",
  data() {
    return {
      swiperOpts: {
        initialSlide: 0,
        freeMode: true,
        slidesPerView: "auto",
        spaceBetween: 5
      },
      btnIconArray: {
        jjsh: [
          require('./../assets/h5_jiaju_button_fenxiang_3.png'),
          require('./../assets/h5_jiaju_button_gouwuche_4.png')
        ],
        myet: [
          require('./../assets/h5_muying_button_fenxiang_3.png'),
          require('./../assets/h5_muying_button_fenxiang_4.png')
        ],
        mzgh: [
          require('./../assets/h5_meizhuang_button_fenxiang_3.png'),
          require('./../assets/h5_meizhuang_button_gouwuche_4.png')
        ],
        spsx: [
          require('./../assets/h5_shipin_button_fenxiang_3.png'),
          require('./../assets/h5_shipin_button_gouwuche_4.png')
        ],
        xbps: [
          require('./../assets/h5_xiangbao_button_fenxiang_3.png'),
          require('./../assets/h5_xiangbao_button_gouwuche_4.png')
        ],
        yybj: [
          require('./../assets/h5_yingyang_button_fenxiang_3.png'),
          require('./../assets/h5_yingyang_button_gouwuche_4.png')
        ]
      }
    };
  },
  props: {
    isShowShare: Boolean,
    item: Object,
    pageType: String
  },
  methods: {
    toDetail(item) {
      this.js2app.toDetail({ type: "0", id: item.id });
    },
    //分享商品
    goodShare(item) {
      var shareData = {
        goodID: item.id, //商品id
        goodPhoto: item.goods_main_photo, //商品图片url
        type: "7", //分享和app交互类型 7
        isOnSale: "1", //是否是特卖商品
        goodPrice: item.goods_price, //商品价格
        goodCurrentPrice: item.activity_price, //特卖价格
        goodName: item.goods_name, //商品名称
        goodProfit: item.good_profit
      };
      console.log("shareData", shareData);
      this.js2app.toDetail(shareData);
    },
    //加入购物车
    toGoodsCart(item) {
      console.log("id", item.id);
      var wei_url =
        "/micro/index.html#/detail?shop_id=" +
        this.shop_id +
        "&goods_id=" +
        this.goods_id;
      if (this.isShowCart) {
        var params = {
          type: 5,
          shop_id: this.shop_id,
          goods_id: item.id,
          count: 1,
          gsp: item.goods_gsp_id,
          price: item.activity_price,
          wei_url: wei_url,
          area_id: 4521986
        };
      } else {
        var params = {
          type: 0,
          id: item.id
        };
      }
      console.log("params", params);
      this.js2app.toDetail(params);
    },
    toClassify(cog1, cog2) {
      console.log(cog2.id, cog1.id);
      if (cog1.id == -1) {
        this.js2app.toDetail({ type: 0, id: cog2.id });
      } else {
        this.js2app.toDetail({
          type: 4,
          id: cog1.id,
          subtype: cog2.id,
          name: cog2.title
        });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.swiper-contain {
  padding: 0 12px;
}
.swiper-slide {
  width: 143px;
  height: 248px;
  padding: 2px;
  background-size: 100% 100%;
}
.box-item {
  width: 143px;
  height: 248px;
  float: left;
  margin-left: 6px;
  padding: 2px;
  background-size: 100% 100%;
}
.photo {
  width: 140px;
  height: 140px;
}
.price {
  width: 140px;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.goods-price-val {
  font-size: 15px;
  color: #fff600;
}
.activity-price-val {
  font-size: 10px;
  color: #fffefe;
  text-decoration: line-through;
}
.name {
  width: 140px;
  height: 37px;
  line-height: 37px;
  padding: 0 12px;
  font-size: 12px;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.btn {
  text-align: center;
}
.share {
  width: 46px;
  margin-left: 7px;
}
.cart {
  width: 79px;
}
.look-more {
  width: 97px;
  float: left;
  margin-left: 4px;
  background: #a655ff;
  color: #fff;
  font-size: 12px;
  text-align: center;
  line-height: 247px;
  div {
    width: 100%;
    height: 100%;
  }
}
</style>

