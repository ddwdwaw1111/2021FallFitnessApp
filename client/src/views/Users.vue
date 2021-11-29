<template>
    <div class="about">
        <h1 class="title">Users Manage Page</h1>

        <table class="table is-striped is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Handle</th>
                    <th>Profile Pic</th>
                    <th>isAdmin</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(u,i) in list" :key="u.handle" > 
                    <th>{{ u.firstName }}</th>
                    <th>{{ u.lastName }}</th>
                    <td>{{ u.handle }}</td>
                    <td>
                        <img :src="u.pic" width="50" :alt="u.handle" />
                    </td>
                    <td>{{ u.isAdmin }}</td>
                    <td>
                        <p class="buttons">
                            <button class="button" @click='changeRole(u,i)'>
                                <span class="icon is-small">
                                    <i class="fas fa-edit" ></i>
                                </span>
                            </button>
                            <button class="button" @click='deleteUser(u,i)'>
                                <span class="icon is-small">
                                    <i class="fas fa-trash"></i>
                                </span>
                            </button>
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {  GetAll,Update, Delete } from "../services/users"
export default {
    data() {
        return {
            list: [],
            user:{isAdmin: false}
        }
    },
    async mounted(){
        this.list = await GetAll();
    },
    methods: {
        async changeRole(u,i)
        {
            this.list[i].isAdmin = !this.list[i].isAdmin
            this.user.isAdmin = this.list[i].isAdmin
            console.log(this.user.isAdmin)
            const response = await Update(u._id, this.user);
            console.log(response)
        },
        async deleteUser(u,i)
        {
            const response = await Delete(u._id);
            if(response.deleted)
            {
            this.list.splice(i,1)
            console.log(response)
            }

        }
    },
}
</script>