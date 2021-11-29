<template>

          <form  @submit.prevent="changeInfo()">


            <div class="field">
              <p class="control">
                <input
                  class="input"
                  type="pic_url"
                  v-model="user.pic"
                  placeholder="First name"
                />
              </p>
            </div>
                        <div class="field">
              <p class="control">
                <input
                  class="input"
                  type="firstName"
                  v-model="user.firstName"
                  placeholder="First name"
                />
              </p>
            </div>

            <div class="field">
              <p class="control">
                <input
                  class="input"
                  type="lastName"
                  v-model="user.lastName"
                  placeholder="Last name"
                />
              </p>
            </div>
                        <div class="field">
              <p class="control">
                <input
                  class="input"
                  type="email"
                  v-model="user.emails"
                  placeholder="Email "
                />
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input
                  class="input"
                  type="text"
                  v-model="user.country"
                  placeholder="From which country?"
                />
                <span class="icon is-small is-left"
                  ><i class="fas fa-lock"></i
                ></span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input
                  class="input"
                  type="text"
                  v-model="user.healthProfile.Height"
                  placeholder="Height(feets)?"
                />
                <span class="icon is-small is-left"
                  ><i class="fas fa-lock"></i
                ></span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input
                  class="input"
                  type="text"
                  v-model="user.healthProfile.Weight"
                  placeholder="Weight(lbs)?"
                />
                <span class="icon is-small is-left"
                  ><i class="fas fa-lock"></i
                ></span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input
                  class="input"
                  type="text"
                  v-model="user.healthProfile.TargetWeight"
                  placeholder="Target Weight(lbs)?"
                />
                <span class="icon is-small is-left"
                  ><i class="fas fa-lock"></i
                ></span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input
                  class="input"
                  type="text"
                  v-model="user.healthProfile.Age"
                  placeholder="Age?"
                />
                <span class="icon is-small is-left"
                  ><i class="fas fa-lock"></i
                ></span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input
                  class="input"
                  type="text"
                  v-model="user.healthProfile.Sex"
                  placeholder="Male or Female?"
                />
                <span class="icon is-small is-left"
                  ><i class="fas fa-lock"></i
                ></span>
              </p>
            </div>
          
            <div class="column is-full has-text-centered">
              <button type="submit" class="button is-black is-centered">
                Update
              </button>
            </div>
          </form>
</template>

<script>
import { Update } from "../services/users";
import Session from "../services/session";
import { GetByHandle } from "../services/users"
export default {
  data() {
    return {
    Session,
     user: {
        firstName: Session.user.firstName,
        lastName: Session.user.lastName,
        pic: Session.user.pic,
       country: Session.user.country,
        emails: Session.user.emails,
        healthProfile: Session.user.healthProfile,
    }
  }
  },
  methods: {
    async changeInfo() {
      console.log(Session.user._id);
      const response = await Update(this.Session.user._id, this.user);
      console.log({ response });
      this.Session.user = await GetByHandle(Session.user.handle);
      this.$emit('InfoChange',this.Session.user)

    }
  },
};
</script>
