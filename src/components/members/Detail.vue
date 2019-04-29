<template>
    <div class="wrap">
      <section class="member">
        <div class="member__title">会员</div>
        <div class="search"> 
          <label>帐号ID</label>
          <input type="text">
          <button>查找</button>
        </div>
      </section>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as Model from '@/models/interfaces/member.ts'

export default Vue.extend({
  name: 'Detail',
  props: {
    msg: String,
  },
  computed: {
    // ...mapGetters({
    //   products: 'allProducts'
    // })
    members(): Model.IMemberResponse[] {
      return this.$store.getters.memberInfo
    },
  },
  mounted() {
      this.$store.dispatch('getMember');
      console.log(this.$route.params.uuid);
  },
});
</script>
