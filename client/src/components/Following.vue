<template>
  <div class="column is-one-third">
    <div class="box">
      <div class="columns is-multiline">
        <div class="column is-full">
          <figure class="image is-inline-block  is-128x128">
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
        <p><strong>Username : </strong> {{following.handle}}</p>
      </div>
      <div class="column">
        <p><strong>Email: </strong> {{info.emails}}</p>
      </div>
      <div class="column">
        <button v-if="following_isApprove" class="button is-black" @click="$emit('unfollow')">Unfollow</button>
        <button v-else class="button is-black" @click="$emit('unfollow')">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import {GetByHandle} from '../services/users'
export default {
  props: {
    following: Object,
  },
  data() {
    return {
      following_handle: this.following.handle,
      following_isApprove: this.following.isApproved,
      info:[]
    }
  },
  async mounted() {
     console.log(this.following_isApprove)
      this.info = await GetByHandle(this.following_handle)
      console.log(this.info)
  },
  methods: {
      
  },
};
</script>

<style>
</style>