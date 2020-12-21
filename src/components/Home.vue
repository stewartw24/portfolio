<template>
  <div class="hello">
    <div class="menu">
        <div class="menu-item">
          <div class="menu-text">
            Resume
          </div>
        </div>
      <div class="menu-item">
        <div class="menu-text">
          Projects
        </div>
        </div>
      <div class="menu-item menu-center">
        <div class="menu-text">
          William Stewart
        </div>
      </div>
        <div class="menu-item">
          <div class="menu-text">
          Snippets
          </div>
        </div>
        <div class="menu-item">
          <div class="menu-text">
          About
          </div>
        </div>
    </div>

    <div class="name">
      <div class="letter">
        <img src="../assets/img/W.png" class="letter-image" alt="W">
      </div>
      <div class="letter">
        <img src="../assets/img/I.png" class="letter-image" alt="I">
      </div>
      <div class="letter">
        <img src="../assets/img/L.png" class="letter-image" alt="L">
      </div>
      <div class="letter">
        <img src="../assets/img/L.png" class="letter-image" alt="L">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.name {
  border: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  width: 100vw;
  height: 100vh;
}

.letter {
  margin: .8%;
  filter: drop-shadow(0px 0px 7px rgba(150, 150, 150, .7));
}

.letter-image {
  max-width: 100%;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
}

.menu-item {
  flex: 1;
  text-align: center;
}

.menu-text {
  font-size: 20px;
  color: #818181;
  padding: 10px;
  border: 2px solid #080808;
  cursor: pointer;
  width: fit-content;
  margin-right: auto;
  margin-left: auto;
}

.menu-text:hover {
  border-bottom: 2px solid #c278ff;
}

.menu-center {
  font-size: 36px;
  color: #eaeaea;
}
</style>
