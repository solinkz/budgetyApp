<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="add-figure mt-md-n5 mt-4 shadow-lg">
                    <form @submit.prevent="addRecord"  class="form-row">
                        <div class="col-md-2 mb-3">
                            <select name="type" id="type" class="custom-select" v-model="type">
                                <option value="">select type</option>
                                <option value="income">income</option>
                                <option value="expense">expense</option>
                            </select>
                        </div>
                        <div class="col-md-6 mb-3">
                            <input v-model="description" type="text" class="form-control" name="description" id="description" placeholder="what is the money for">
                        </div>
                        <div class="col-md-2 mb-3">
                            <input v-model="amount" type="number" name="value" id="value" class="form-control" placeholder="how much">
                        </div>
                        <div class="col-md-2 mb-3">
                            <button type="submit" class="btn btn-secondary">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../main'
export default {
  name: 'add-Figure',
  data () {
    return {
      type: '',
      description: '',
      amount: null
    }
  },
  methods: {
    addRecord () {
      if (this.type !== '' && this.description !== '' && this.amount !== null) {
        eventBus.$emit('addRecord', {
          type: this.type,
          description: this.description,
          amount: this.amount
        })
      }
      this.reset()
    },
    reset () {
      this.type = ''
      this.description = ''
      this.amount = null
    }
  }
}

</script>

<style scoped>
    .add-figure{
        padding: 3rem;
    }
</style>
