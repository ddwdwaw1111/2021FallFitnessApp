<template>
  <div class="section">
    <h1 class="title has-text-centered">Find More Friends</h1>

    <div class="columns is-multiline">
      <div class="column" v-if="posts.length < 1">
        <n-empty description="You don't have any posts and friends">
          <template #icon>
            <n-icon>
              <SadTear />
            </n-icon>
          </template>
        </n-empty>
      </div>
      <div class="column is-half" v-for="(u, i) in posts" :key="u.src">
        <post :post="u" @follow="follow(u)" @remove="remove(u, i)" />
      </div>
    </div>
  </div>
</template>

<script>
import { NotificationProgrammatic } from "@oruga-ui/oruga-next/dist/esm/notification";
import { SadTear } from "@vicons/fa";
import { NEmpty, NIcon } from "naive-ui";
import Post from "../components/Post.vue";
import session from "../services/session";
import { Delete, GetAll } from "../services/posts";
import { Follow } from "../services/users";
export default {
  components: {
    Post,
    NEmpty,
    SadTear,
    NIcon,
  },
  data: () => ({
    posts: [],
    user: {},
  }),
  async mounted() {
    console.log(session.user.handle);
    this.posts = await GetAll();

  },
  methods: {
    async remove(post, i) {
      console.log(post.user_handle + "" + session.user.isAdmin);
      if (
        post.user_handle === session.user.handle ||
        session.user.isAdmin === "true"
      ) {
        const response = await Delete(post._id);
        if (response.deleted) {
          this.posts.splice(i, 1);
          NotificationProgrammatic.open({
            duration: 5000,
            message: "Delete Successfully",
            variant: "success",
            type: "success",
            closable: true,
          });
        }
      } else {
        console.log("delete fail");
        // session.messages.push({text:'You are not the owner of this post or not an admin', type:"danger"})
        NotificationProgrammatic.open({
          duration: 5000,
          message: "You are not the owner of this post or not an admin",
          variant: "danger",
          type: "danger",
          closable: true,
        });
      }
    },
    async follow(followee) {
      if (followee.user_handle === session.user.handle) {
        NotificationProgrammatic.open({
            duration: 5000,
            message: "You can't follow Yourself",
            variant: "danger",
            type: "danger",
            closable: true,
          });
      } else {
        const response = await Follow(session.user.handle, followee.user_handle);
        console.log(response)
        NotificationProgrammatic.open({
            duration: 5000,
            message: "Waiting For " +followee.user_handle+"'s Approve",
            variant: "warn",
            type: "warn",
            closable: true,
          });
      }
    },
  },
};
</script>

<style>
.card {
  margin-bottom: 10px;
}
</style>