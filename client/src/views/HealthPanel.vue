<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
                          <div class="column is-full has-text-centered">
          <span class="title">Exercise Log</span>
        </div>
        <div class="column is-full has-text-centered">
          <div class="box">
            <div class="columns is-multiline">
              <div class="column is-full">
                <figure class="image is-inline-block">
                  <img
                    class="is-rounded"
                    src="https://bulma.io/images/placeholders/128x128.png"
                  />
                </figure>
              </div>
            </div>
            <div class="column">
              <p>
                <strong>
                  {{ Session.user.firstName }}
                  {{ Session.user.lastName }}
                  </strong>
              </p>
            </div>

            <div class="column">
              <div>
                <strong>Height : </strong>
                {{ Session.user.healthProfile.Height }} feet
              </div>
            </div>
                        <div class="column">
              <p>
                <strong>Current Weight: </strong>
                {{ Session.user.healthProfile.Weight }} lb
              </p>
            </div>
            <div class="column">
              <p>
                <strong>Target Weight: </strong>
                {{ Session.user.healthProfile.TargetWeight }} lb
              </p>
            </div>
            <div class="column">
              <p><strong>Age: </strong> {{ Session.user.healthProfile.Age }}</p>
            </div>
            <div class="column">
              <p><strong>Sex: </strong> {{ Session.user.healthProfile.Sex }}</p>
            </div>
          </div>
        </div>

        <div class="column is-full has-text-centered">
          <span class="title">Tracker</span>
        </div>
        <div class="column is-full">
          <Table />
        </div>
        <div class="column is-full">
          <chart />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Session from "../services/session";
import chart from "../components/Charts.vue";
import Table from "../components/Calorie-table.vue";

export default {
  components: {
    chart,
    Table
  },
  data: () => {
    return {
      Session
    };
  },
};
</script>

<style>
</style>