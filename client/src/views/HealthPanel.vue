<template>
      <section class="section">
        <div class="container">
            <div class="columns is-multiline">
                <div class="column is-full has-text-centered">
                    <div class="box">
                        <div class="columns is-multiline">
                            <div class="column is-full">

                                <figure class="image is-inline-block">
                                    <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                                </figure>
                            </div>
                        </div>
                        <div class="column">
                            <p><strong>Welcome,</strong> Username</p>
                            <a aria-label="report">
                                <span class="icon is-small">
                      <i class="fas fa-pencil-alt" aria-hidden="true"></i>
                    </span>
                            </a>

                        </div>

                        <div class="column">
                            <div><strong>Height : </strong> 5'11 feet
                            </div>
                        </div>
                        <div class="column">
                            <p><strong>Weight: </strong> 200 lb</p>
                        </div>
                        <div class="column">
                            <p><strong>Age: </strong> 18</p>
                        </div>
                        <div class="column">
                            <p><strong>Sex: </strong> Male</p>
                        </div>

                    </div>
                </div>

                <div class="column is-full has-text-centered">
                    <span class="title">Exercise Log</span>
                </div>
                <div class="column is-full">
                    <div class="card has-text-centered">
                        <table class="table is-inline-block">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Working time</th>
                                    <th>Working type</th>
                                    <th>calorie burned</th>
                                    <th>calorie cosumed</th>
                                    <th>weight(lb)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>01/01/2021</th>
                                    <td>45:00</td>
                                    <td>Running</td>
                                    <td>400 cal</td>
                                    <td>2000 cal</td>
                                    <td>140 lb</td>
                                    <td><button class="button is-small is-black">edit </button></td>
                                </tr>
                                <tr>
                                    <th>01/01/2021</th>
                                    <td>45:00</td>
                                    <td>Running</td>
                                    <td>400 cal</td>
                                    <td>2000 cal</td>
                                    <td>140 lb</td>
                                    <td><button class="button is-small is-black">edit </button></td>
                                </tr>
                                <tr>
                                    <th>01/01/2021</th>
                                    <td>45:00</td>
                                    <td>Running</td>
                                    <td>400 cal</td>
                                    <td>2000 cal</td>
                                    <td>140 lb</td>
                                    <td><button class="button is-small is-black">edit </button></td>
                                </tr>
                                <tr>
                                    <th>01/01/2021</th>
                                    <td>45:00</td>
                                    <td>Running</td>
                                    <td>400 cal</td>
                                    <td>2000 cal</td>
                                    <td>140 lb</td>
                                    <td><button class="button is-small is-black">edit </button></td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="column is-full">
                            <button class="button is-black">Add New Log </button>
                        </div>
                    </div>
                </div>

                <div class="column is-full has-text-centered">
                    <span class="title">Weight Tracker</span>
                </div>
                <div class="column is-full">
                    <chart />
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import chart from '../components/Charts.vue'
export default {
    name:'HealthPanel',

    components:
    {
        chart
    }
}
</script>

<style>

</style>