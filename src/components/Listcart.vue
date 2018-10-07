<template>
  <div class="shade">
    <div class="cart">
        <img src="../../static/images/home/item-items (6).jpg" alt="">
        <p>￥309</p>
        <p>库存：有库存</p>
        <p>商品编号：8880410-100</p>
        <div>尺寸3</div>
        <ul class="size">
          <li>54</li>
          <li>541</li>
          <li>54</li>
          <li>514</li>
          <li>54</li>
          <li>514</li>
          <li>154</li>
          <li>54</li>
    

        </ul>
        <div class="amout">数量</div>
        <div class="button">
          <button>一</button>
          <input type="text" placeholder="1">
          <button>+</button>
        </div>
      <button class="determine">确定</button>
    </div>  
    <button class="close"> X </button>
  </div>
</template>

<script>
export default {
  namr: "listcart"
};
</script>

<style lang='less' scoped>
.shade {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  color:rgba(59, 57, 57, 0.74);
}
.cart {
  width: 100%;
  height: 70%;
  background: white;
  margin-top: 50%;
  position: absolute;
  top: 10%;
  padding: 0 15px;
  img {
    width: 65px;
    height: 65px;
    background: white;
    position: relative;
    top: -15px;
    float: left;
    margin-right: 20px;
  }
  div {
    margin-top: 5px;
    height: 40px;
    font-size: 20px;
  }
  p {
    font-size: 16px;
    line-height: 20px;
  }
  .amout {
    float: left;
  }
  .button{
    float: right;
    input{
      width: 50px;
      text-align: center;
    }
  }
  .size {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 15px;
    min-height: 100px;
    border-bottom: 1px solid rgba(59, 57, 57, 0.74);
    li {
      width: 45px;
      height: 30px;
      line-height: 30px;
      font-size: 16px;
      margin-left: 15px;
      margin-bottom: 5px;
      text-align: center;
      border: 1px solid black;
    }
  }
   .determine {
    position: absolute;
    left: 0;
    bottom: 54px;
    width: 100%;
    height: 50px;
    border: none;
    text-align: center;
    background: rgba(230, 0, 45);
  }
  
}
.close{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    top: 283px;
    right: 5px;
    border: none;
    text-align: center;
  }

</style>
