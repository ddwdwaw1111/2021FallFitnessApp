<template>
  <div class="column is-one-third">
    <div class="box">
      <div class="columns is-multiline">
        <div class="column is-full">
          <figure class="image is-inline-block">
            <img class="is-rounded" :src="info.pic" />
          </figure>
        </div>
      </div>
      <div class="column">
        <p>
          <strong>{{info.firstName}} {{info.firstName}}</strong>
        </p>
      </div>
      <div class="column">
        <p><strong>Username : </strong> {{follower.handle}}</p>
      </div> 
     <div v-if="!follower_isApprove" class="column">
        <p><strong>Email : </strong> {{info.emails}}</p>
      </div> 
      <div class="column">
        <button v-if="!follower_isApprove" class="button is-info" @click="approve">Approve</button>
        <button v-else class="button is-primary"> Approved </button>
      </div>
    </div>
  </div>
</template>

<script>
import {GetByHandle} from '../services/users'
export default {
  props: {
    follower: Object,
  },
  data() {
    return {
      follower_handle: this.follower.handle,
      follower_isApprove:this.follower.isApproved,
      info:[]
    }
  },
  async mounted() {
      this.info = await GetByHandle(this.follower.handle)

  },
  methods: {
      approve()
      {
        this.follower_isApprove = true
        this.$emit('approve')
      }
  },
};
</script>

<style>
</style>