<template>
  <div class="container">
    <section class="section">
      <div class="container">
        <div class="column is-full has-text-centered">
          <h1 class="title">Register</h1>
        </div>
        <div class="column is-one-third is-offset-one-third">
          <form class="box" @submit.prevent="register()">
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
                  type="username"
                  v-model="user.handle"
                  placeholder="Username"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input
                  class="input"
                  type="password"
                  v-model="user.password"
                  placeholder="Password"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input
                  class="input"
                  type="password"
                  v-model="cpassword"
                  placeholder="Confirm Password"
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
            <div class="field">
              <div class="label">
                Want to be an admin?
              </div>
              <div class="select">
                <select v-model="user.isAdmin">
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
            </div>
            <div class="column is-full has-text-centered">
              <button type="submit" class="button is-black is-centered">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Session from "../services/session";
export default {
  name: "SignUp",
  data: () => {
    return {
      Session,
      cpassword: "",
      user: {
        firstName: "",
        lastName: "",
        handle: "",
        pic: "https://bulma.io/images/placeholders/128x128.png",
        password: "",
        isAdmin: false,
        country: "",
        emails: [""],
        following: [],
        healthProfile: {
          Height: "",
          Weight: "",
          TargetWeight: "",
          Age: "",
          Sex: "",
        },
        calories: [
          {
            date: "00/00/0000",
            exerciseTime: "20",
            exerciseType: "Example Data",
            calorieBurned: "100",
            weight: "100",
          },
          {
            date: "01/00/0000",
            exerciseTime: "20",
            exerciseType: "Example Data",
            calorieBurned: "200",
            weight: "99",
          }
        ],
      }
    };
  },
  methods: {
    register() {
      if (this.user.password !== this.cpassword) {
        alert("Password does not match");
      } else {
        this.Session.Register(this.user);
        this.user.calories[0].weight = this.user.healthProfile.Weight;
      }
    },
  },
};
</script>

<style>
</style>