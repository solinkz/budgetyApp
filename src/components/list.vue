<template>
    <div class="list">
        <h4 class="list-title mb-5">{{title}}</h4>

        <div v-for="item in list" :key="item.id">
            <div class="list-item">
            <span class="description">{{item.description}}</span>
            <div class="value-action"
                    :class="{'text-success': type == 'income', 'text-danger': type == 'expense'}"
            >
                    <span class="amount d-inlin-block">
                        <template v-if="type === 'income'">+</template>
                        <template v-else>-</template>
                        {{item.amount}}</span>
                    <span @click="deleteRecord(item.id)" class="action">&times;</span>
            </div>
            </div>
        </div>

    </div>
</template>

<script>
import { eventBus } from '../main'
export default {
  name: 'list',
  props: ['type', 'title', 'list'],
  methods: {
    deleteRecord (id) {
      eventBus.$emit('deleteRecord', {
        id: id
      })
    }
  }
}
</script>
