<template>
  <section class="section">
    <div class="columns is-multiline">
      <div class="column is-full has-text-centered">
        <div class="box">
          <div class="columns is-multiline">
            <div class="column is-full">
              <figure class="image is-inline-block">
                <img class="is-rounded" :src="Session.user.pic" />
              </figure>
            </div>
          </div>
          <div class="column">
            <p>
              <strong
                >{{ Session.user.firstName }}
                {{ Session.user.lastName }}</strong
              >
            </p>
          </div>

          <div class="column">
            <p><strong>Username : </strong> {{ Session.user.handle }}</p>
          </div>
          <div class="column" v-if="Session.user.isAdmin">
            <p><strong>Role : </strong> Admin</p>
          </div>
          <div class="column" v-else>
            <p><strong>Role : </strong> User</p>
          </div>
          <div class="column">
            <p><strong>Email: </strong> {{ Session.user.emails }}</p>
          </div>
          <div class="column">
            <p><strong>Country: </strong>{{ Session.user.country }}</p>
          </div>
        </div>
      </div>

      <div class="column has-text-centered">
        <div class="box">
          <div class="column is-full">
            <span class="subtitle has-text-weight-bold"> Following</span>
          </div>
          <div class="columns is-multiline">
          <following
            v-for="(f, i) in followingList"
            :key="i"
            :following="f"
            @unfollow="unfollow(f, i)"
          />
          
          </div>
                    <n-empty
            description="Go find some friends" 
            v-if="followingList.length < 1"
          >
            <template #icon>
              <n-icon>
                <UserFriends />
              </n-icon>
            </template>
          </n-empty>
        </div>
      </div>

      <div class="column is-full has-text-centered">
        <div class="box">
          <div class="column is-full">
            <span class="subtitle has-text-weight-bold"> Follower</span>
          </div>
          <div class="columns is-multiline">
          <follower
            v-for="(f, i) in followeeList"
            :key="i"
            :follower="f"
            @approve="approve(f, i)"
          />
          </div>
                    <n-empty
            description="Sad, you don't have any follower"
            v-if="followeeList.length < 1"
          >
            <template #icon>
              <n-icon>
                <UserFriends />
              </n-icon>
            </template>
          </n-empty>
        </div>
      </div>
      <div class="column is-full">
        <div class="box">
          <div class="columns is-multiline">
            <div class="column is-full has-text-centered">
              <span class="subtitle has-text-weight-bold"
                >Manage Your Posts</span
              >
            </div>
          </div>
          <div class="columns is-multiline">
            <div
              class="post column is-one-third"
              v-for="(p, i) in userPosts"
              :key="p.src"
            >
              <post :post="p" @remove="remove(p, i)" />
            </div>
          </div>

          <n-empty
            description="You don't have any posts"
            v-if="userPosts.length < 1"
          >
          </n-empty>
          <div class="column has-text-centered">
          <n-button
            type="primary"
            size="large"
            @click="PostActive = !PostActive"
          >
            New Post
          </n-button>
          </div>
          <div class="modal" v-bind:class="{ 'is-active': PostActive }">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">Create a new post</p>
                <button
                  class="modal-close is-large"
                  aria-label="close"
                  @click="PostActive = !PostActive"
                ></button>
              </header>
              <div class="modal-card-body">
                <post-edit :new-post="newPost" @add="add()" />
                <span class="subtitle has-text-weight-bold"> Preview</span>
                <post :post="newPost" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-full has-text-centered">
        <div class="box">
          <div class="columns is-multiline">
            <div class="column is-full">
              <span class="subtitle has-text-weight-bold">
                Manage Your Account</span
              >
            </div>
            <div class="column is-full">
              <button
                class="has-text-weight-bold button is-danger"
                @click="InfoActive = !InfoActive"
              >
                Change Your Info
              </button>
              <div class="modal" v-bind:class="{ 'is-active': InfoActive }">
                <div class="modal-background"></div>
                <div class="modal-content">
                  <div class="modal-card-body">
                    <info-edit @InfoChange="updatePosts" />
                  </div>
                </div>
                <button
                  class="modal-close is-large"
                  aria-label="close"
                  @click="InfoActive = !InfoActive"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { NotificationProgrammatic } from "@oruga-ui/oruga-next/dist/esm/notification";
import { NEmpty, NButton, NIcon } from "naive-ui";
import { UserFriends } from "@vicons/fa";
import Session from "../services/session";
import Post from "../components/Post.vue";
import following from "../components/Following.vue";
import follower from "../components/Follower.vue"
import InfoEdit from "../components/Info-edit.vue";
import PostEdit from "../components/Post-edit.vue";
import { Add, GetWall, Delete } from "../services/posts";
import { Unfollow,Approve} from "../services/users";

const newPost = () => ({
  user: Session.user,
  user_handle: Session.user.handle,
});
export default {
  components: {
    NEmpty,
    NButton,
    Post,
    PostEdit,
    InfoEdit,
    following,
    follower,
    UserFriends,
    NIcon
  },
  data: () => ({
    userPosts: [],
    followingList: [],
    followeeList:[],
    newPost: newPost(),
    Session,
    PostActive: false,
    InfoActive: false,
  }),
  async mounted() {
    this.userPosts = await GetWall(Session.user.handle);
    this.followingList = Session.user.following??[];
    this.followeeList = Session.user.followee??[];
  },
  methods: {
    async add() {
      console.log("Adding new post at " + new Date());
      const response = await Add(this.newPost);
      console.log({ response });
      if (response) {
        this.userPosts.unshift(response);
        this.newPost = newPost();
      }
    },
    async updatePosts(user) {
      this.userPosts = await GetWall(user.handle);
    },
    async remove(post, i) {
      console.log(post.user_handle + "" + Session.user.isAdmin);
      if (
        post.user_handle === Session.user.handle ||
        Session.user.isAdmin === true
      ) {
        const response = await Delete(post._id);
        if (response.deleted) {
          this.userPosts.splice(i, 1);
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
    async unfollow(following, i) {
      const response = await Unfollow(Session.user.handle, following.handle);
      if (response.success) {
        this.followingList.splice(i, 1);
        NotificationProgrammatic.open({
          duration: 5000,
          message: "Unfollow Successfully " + following.handle,
          variant: "success",
          type: "success",
          closable: true,
        });
      }
    },
    async approve(follower,i)
    {
      const response = await Approve(follower.handle,Session.user.handle,true)
      console.log(Session.user.followee[i])
      Session.user.followee[i].isApproved = true;
      if(response.success)
      {
        NotificationProgrammatic.open({
          duration: 5000,
          message: "Approve Successfully",
          variant: "success",
          type: "success",
          closable: true,
        });
      }
      
      
    }
  },
};
</script>

<style></style>
