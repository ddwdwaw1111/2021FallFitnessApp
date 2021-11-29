<template>
  <div class="section">
    <h1 class="title has-text-centered">Share With Your Friend</h1>

    <div class="columns is-multiline">
      <div class="column " v-if="posts.length < 1">
        <n-empty
          description="You don't have any posts and friends"
        >
          <template #icon>
            <n-icon>
              <SadTear/>
            </n-icon>
          </template>
        </n-empty>
      </div>
              <div class="column is-half" v-for="(d, i) in posts" :key="d.src">
          <post :post="d" @remove="remove(d, i)" />
        </div>
    </div>
  </div>
</template>

<script>
import { NotificationProgrammatic } from "@oruga-ui/oruga-next/dist/esm/notification";
import { SadTear } from '@vicons/fa'
import { NEmpty, NIcon } from "naive-ui";
import Post from "../components/Post.vue";
import session from "../services/session";
import { Delete,GetFeed } from "../services/posts";
export default {
  components: {
    Post,
    NEmpty,
    SadTear,
    NIcon
  },
  data: () => ({
    posts: [],
    user: {},
  }),
  async mounted() {
    this.posts = await GetFeed(session.user.handle);
    await console.log("我是Friend" + this.posts.length)
  },
  methods: {
    async remove(post, i) {
      console.log( post.user_handle +"" + session.user.isAdmin);
      if(post.user_handle === session.user.handle || session.user.isAdmin === true)
      {
        const response = await Delete(post._id);
        if (response.deleted) {
        this.posts.splice(i, 1);
        NotificationProgrammatic.open({
                duration: 5000,
                message: 'Delete Successfully',
                variant: 'success',
                type: 'success',
                closable: true,
    
            })
      }
      }else
      {
        console.log('delete fail')
        // session.messages.push({text:'You are not the owner of this post or not an admin', type:"danger"})
             NotificationProgrammatic.open({
                duration: 5000,
                message: 'You are not the owner of this post or not an admin',
                variant: 'danger',
                type: 'danger',
                closable: true,
    
            })
        
      }
    },
  },
};
</script>

<style>

</style>