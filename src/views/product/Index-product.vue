<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>DATA PRODUK</h4>
                        <hr>
                        <router-link :to="{name: 'product.create'}" class="btn btn-md btn-success">TAMBAH Produk</router-link>
                        <table class="table table-striped table-bordered mt-4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">NAME</th>
                                    <th scope="col">DESCRIPTION</th>
                                    <th scope="col">PRICE</th>
                                    <th scope="col">QTY</th>
                                    <th scope="col">OPTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(data, index) in datas" :key="index">
                                    <td>{{ data.name }}</td>
                                    <td>{{ data.desc }}</td>
                                    <td>{{ data.price }}</td>
                                    <td>{{ data.qty }}</td>
                                    <td class="text-center">
                                        <router-link :to="{name: 'product.edit', params:{id: data.id }}" class="btn btn-sm btn-primary mr-1">EDIT</router-link>
                                        <button class="btn btn-sm btn-danger ml-1">DELETE</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'

export default {

    setup() {

        //reactive state
        let datas = ref([])

        //mounted
        onMounted(() => {

            //get API from Laravel Backend
            axios.get('http://localhost:8182/api/product')
            .then(response => {
              
              //assign state datas with response data
              datas.value = response.data.data
                console.log(response.data.data)
            }).catch(error => {
                console.log(error.response.data)
            })

        })

        //return
        return {
            datas
        }

    }

}
</script>

<style>
    body{
        background: lightgray;
    }
</style>