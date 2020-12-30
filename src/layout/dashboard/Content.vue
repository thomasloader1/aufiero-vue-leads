<template>
  <div class="content">
    <div class="container-fluid">
      <!--<p>{{ storeTitle }}</p>
      <p>{{ storeUser }}</p> -->
      <transition name="fade" mode="out-in">
        <!-- your content here -->
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  mounted() {
    //this.GET_USER(3);
  },
  computed: {
    ...mapGetters({
      storeTitle: "title",
      storeUser: "user"
    })
  },
  methods: {
    ...mapActions(["GET_USER"])
  }
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
  .fade-leave-to
  /* .fade-leave-active in <2.1.8 */

 {
  opacity: 0;
}
</style>
