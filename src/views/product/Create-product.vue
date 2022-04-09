<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>TAMBAH PRODUCT</h4>
                        <hr>

                        <form @submit.prevent="store">
                            <div class="form-group">
                                <label for="name" class="font-weight-bold">NAME</label>
                                <input type="text" class="form-control" v-model="post.name" placeholder="Masukkan Nama Produk">
                                <!-- validation -->
                                <div v-if="validation.name" class="mt-2 alert alert-danger">
                                    {{ validation.name[0] }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="desc" class="font-weight-bold">DESCRIPTION</label>
                                <textarea class="form-control" rows="4" v-model="post.desc" placeholder="Masukkan Konten Post"></textarea>
                                <!-- validation -->
                                <div v-if="validation.desc" class="mt-2 alert alert-danger">
                                    {{ validation.desc[0] }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="price" class="font-weight-bold">PRICE</label>
                                <input type="text" class="form-control" v-model="post.price" placeholder="Masukkan Harga">
                                <!-- validation -->
                                <div v-if="validation.price" class="mt-2 alert alert-danger">
                                    {{ validation.price[0] }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="qty" class="font-weight-bold">QUANTITY</label>
                                <input type="text" class="form-control" v-model="post.qty" placeholder="Masukkan Kuantiti">
                                <!-- validation -->
                                <div v-if="validation.qty" class="mt-2 alert alert-danger">
                                    {{ validation.qty[0] }}
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">SIMPAN</button>
                        </form>                        

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

export default {

    setup() {

        //state posts
        const post = reactive({
            name: '',
            desc: '',
            price: '',
            qty: ''
        })

        //state validation
        const validation = ref([])

        //vue router
        const router = useRouter()

        //method store
        function store() {

            let name   = post.name
            let desc = post.desc
            let price = post.price
            let qty = post.qty

            axios.post('http://localhost:8182/api/product', {
                name: name,
                desc: desc,
                price: price,
                qty: qty
            }).then(() => {

                //redirect ke post index
                router.push({
                    name: 'product.index'
                })

            }).catch(error => {
                //assign state validation with error 
                validation.value = error.response.data
            })

        }

        //return
        return {
            post,
            validation,
            router,
            store
        }

    }

}
</script>

<style>
    body{
        background: lightgray;
    }
</style>