<template>
  <div class="column is-full" >
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="post.src" :alt="post.alt" /> 
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="post.user.pic" alt="Placeholder image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">
              {{ post.user.firstName }} {{ post.user.lastName }}
            </p>
            <p class="subtitle is-6">
              <time :datetime="post.time">{{ prettyDate }}</time>
            </p>
          </div>
        </div>

        <div class="content">
          {{ post.caption }}
        </div>
      </div>

      <footer class="card-footer">
        <n-button  circle size="large" color="#32a8a6" dashed class="card-footer-item"  @click="$emit('follow')">Follow</n-button>
        <n-button  circle size="large" color="#ff7086" class="card-footer-item" v-if="liked" @click="liked=!liked"> <template #icon>
      <n-icon>
        <heart />
      </n-icon>
    </template>Unlike</n-button>
    <n-button  circle size="large" color="#ff7086" dashed class="card-footer-item" v-else @click="liked=!liked">Like</n-button>
        <n-button  circle size="large" color="#ff0000" dashed class="card-footer-item" @click="$emit('remove')">Delete</n-button>
      </footer>
    </div>
  </div>
</template>

<script>
import {NButton, NIcon} from "naive-ui"
import {Heart} from "@vicons/ionicons5"
export default {
  props: {
    post: Object,
  },
  data() {
    return {
      postOwner:this.post.user,
      liked:false
    }
  },
  components:
  {
    NButton,
    Heart,
    NIcon
  },
  computed: {
    prettyDate() {
      var postTime = new Date(this.post.time).toString()
      console.log(postTime);
      var index = postTime.indexOf("G")
      if(~index) {
        postTime = postTime.substr(0, index);
        }
      if(postTime === "Invalid Date"){
        postTime = "1000 Years ago"
      }
      return postTime
    },

  },
  methods: {
    hide(){
      this.hidden = !this.hidden;
      alert("This post is hidden for this session")
    }
  },
  
};
</script>

<style>

</style>