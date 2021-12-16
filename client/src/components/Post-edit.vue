<template>
  <form class="card" @submit.prevent="$emit('add')">
    <div class="card-content">
      <div class="content">
        <div class="field">
          <label class="label">Picture</label>
          <div class="control">
            <input
              class="input"
              type="url"
              placeholder="Input a URL to a picture"
              v-model="post.src"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Alt</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Some alternate text for this picture"
              v-model="post.alt"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Caption</label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Some text to explain this picture"
              v-model="post.caption"
            ></textarea>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="radio">
              <input
                type="radio"
                name="question"
                v-model="post.isPublic"
                :value="true"
              />
              Public
            </label>
            <label class="radio">
              <input
                type="radio"
                name="question"
                v-model="post.isPublic"
                :value="false"
              />
              Private
            </label>
          </div>
        </div>

        <div class="field">
          <label class="label">Tag a friend</label>
          <div class="control">
          <p class="content"><b>Selected:</b> {{ selected }}</p>
      <o-autocomplete
        v-model="name"
        placeholder="e.g. Anne"
        :keep-first="keepFirst"
        :open-on-focus="openOnFocus"
        :data="filteredDataObj"
        field="firstName"
        @select="option => selected = option"
      >
      </o-autocomplete>
          </div>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <button class="button is-link card-footer-item" type="submit">
        Submit
      </button>
      <button class="button is-link is-light card-footer-item" type="reset">
        Cancel
      </button>
    </footer>
  </form>
</template>

<script>
import { GetAll } from "../services/users";
export default {
  props: {
    newPost: Object,
  },
  data() {
    return {
    data: [],
    keepFirst: false,
    openOnFocus: false,
    name: '',
    selected: null,
    post: this.newPost,
    };
  },
  watch: {
    newPost() {
      this.post = this.newPost;
    },
  },
  async mounted() {
    this.data = await GetAll();
    console.log(this.data)
  },
    computed: {
      filteredDataObj() {
        return this.data.filter(option => {
          return (
            option.firstName
              .toString()
              .toLowerCase()
              .indexOf(this.name.toLowerCase()) >= 0
          )
        })
      }
    }
};
</script>

<style>
</style>