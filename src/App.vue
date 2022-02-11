<template>
  <div class="container-fluid">
    <header class="row">
      <h1>INR Currency Converter</h1>
    </header>
    <div class="row justify-content-evenly">
      <div class="col">
        <table class="table table-striped text-center">
          <thead>
            <tr>
              <th v-for="country in destCountries" :key="country.code">
                {{ country.code }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td v-for="country in destCountries" :key="country.code">
                {{
                  rates[country.code]
                    ? `${
                        Math.round(rates[country.code].rate * 10000) / 10000
                      } ${country.symbol}`
                    : "-"
                }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row justify-content-evenly">
      <div
        class="col-md-4 px-4 py-4"
        v-for="country in destCountries"
        :key="country.code"
      >
        <div class="card text-center">
          <div class="card-body">
            <h5 class="card-title">{{ country.name }}</h5>
            <div class="card-text">
              <div class="row justify-content-center">
                <div class="col">
                  <div class="input-group">
                    <input
                      type="text"
                      class="text-center form-control"
                      v-model="country.amount"
                    />
                    <span class="input-group-text">{{
                      countries[0].symbol
                    }}</span>
                  </div>
                </div>
                <div class="col">
                  <p class="mt-2 text-start" v-if="rates[country.code]">
                    =
                    {{
                      Math.round(
                        rates[country.code].rate * country.amount * 10000
                      ) / 10000
                    }}
                    {{ country.symbol }}
                  </p>
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
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  data() {
    return {
      base: "INR",
      countries: [
        { code: "INR", name: "Indian Rupees", symbol: "₹", amount: 1 },
        { code: "USD", name: "US Dollars", symbol: "$", amount: 1 },
        { code: "EUR", name: "Euro", symbol: "€", amount: 1 },
        { code: "GBP", name: "British Pound", symbol: "£", amount: 1 },
        { code: "AUD", name: "Australian Dollar", symbol: "$", amount: 1 },
        { code: "SGD", name: "Singapore Dollar", symbol: "$", amount: 1 },
      ],
    };
  },
  mounted() {
    this.setupPolling();
  },
  computed: {
    ...mapState(["rates"]),
    destCountries() {
      return this.countries.filter((country) => country.code !== this.base);
    },
  },

  methods: {
    ...mapActions(["setupPolling"]),
  },
};
</script>

<style lang="scss">
header {
  text-align: center;
  background: black;
  color: wheat;
}

@media (min-width: 768px) {
  header {
    font-size: 4rem;
    margin-bottom: 50px;
  }
}
</style>
