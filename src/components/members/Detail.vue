<template>
    <div class="wrap">
      Member Detail
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex'
import * as Model from '@/models/interfaces/member.ts'

export default Vue.extend({
  name: 'Detail',
  props: {
    msg: String,
  },
  computed: {
     ...mapState('Member', ['memberInfos'])
  },
  mounted() {
      this.$store.dispatch('Member/getMember');
      console.log(this.$route.params.uuid);
  },
});
</script>
