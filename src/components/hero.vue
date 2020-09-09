<template>
      <div class="hero">
        <div class="container">
          <div class="row justify-content-center w-md-100">
            <div class="col-md-8">
                <h1 class="text-center display-4">
                    {{total}}
                </h1>
                <p class="text-center">Currently available in september</p>

                <div class="hero-analysis mt-5">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="card border-success mb-3">
                          <div class="card-body py-2 px-3 d-flex justify-content-between align-items-center">
                              <h6>Income:</h6>
                              <p class="lead mb-0">+{{income}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="card border-danger mb-3">
                          <div class="card-body py-2 px-3 d-flex justify-content-between align-items-center">
                            <h6>Expenses: </h6>
                              <p class="lead mb-0">-{{expense}}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    total: Number,
    income: Number,
    expense: Number
  }
}
</script>
