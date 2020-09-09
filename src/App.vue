<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light container py-4 bg-white">
      <a class="navbar-brand" href="/">BUDGETY</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
  </nav>
  <!-- hero section -->
    <hero :total="totalBalance"
          :income="income"
          :expense="expense"
    />
    <!-- add figure / money section -->
    <add-figure />
    <!-- tablular result -->
    <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-5 mb-4">
            <list type="income" title="Income" :list="incomeList"/>
          </div>
          <div class="col-md-5 mb-4">
            <list type="expense" title="Expense" :list="expenseList"/>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import hero from './components/hero'
import addFigure from './components/addFigure'
import list from './components/list'
import { eventBus } from './main'

export default {
  name: 'App',
  components: {
    hero,
    addFigure,
    list
  },
  data () {
    return {
      records: [
        {
          id: '1',
          description: 'Food',
          amount: 600,
          type: 'expense'
        },
        {
          id: '2',
          description: 'Design',
          amount: 2000,
          type: 'income'
        },
        {
          id: '3',
          description: 'salary',
          amount: 1500,
          type: 'income'
        }
      ]
    }
  },
  computed: {
    totalBalance () {
      const newIncome = this.getNewAmount('income')
      const newExpense = this.getNewAmount('expense')
      return newIncome - newExpense
    },
    income () {
      return this.getNewAmount('income')
    },
    expense () {
      return this.getNewAmount('expense')
    },
    lastItemId () {
      const lastItem = this.records.length !== 0 ? this.records[this.records.length - 1] : []
      return parseInt(lastItem.id) || 0
    },
    // income list
    incomeList () {
      return this.records.filter(record => record.type === 'income')
    },
    // expense list
    expenseList () {
      return this.records.filter(record => record.type === 'expense')
    }
  },
  methods: {
    getNewAmount (type) {
      let newValue = 0
      this.records.forEach(record => {
        if (record.type === type) {
          newValue += record.amount
        }
      })
      return newValue
    },
    addRecord (item) {
      item.id = this.lastItemId + 1
      this.records.push(
        {
          id: item.id,
          description: item.description,
          amount: parseInt(item.amount),
          type: item.type
        }
      )
    },
    deleteRecord (id) {
      this.records = this.records.filter(record => {
        return record.id !== id
      })
    }
  },
  created () {
    eventBus.$on('addRecord', (data) => {
      this.addRecord(data)
    })
    eventBus.$on('deleteRecord', (data) => {
      this.deleteRecord(data.id)
    })
  }
}
</script>
