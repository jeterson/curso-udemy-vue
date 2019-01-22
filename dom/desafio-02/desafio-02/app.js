new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta() {
            alert('fdp')
        },
        keydon(e) {
            this.valor = event.target.value
        }
    }
})