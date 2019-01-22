new Vue({
    el: '#desafio',
    data: {
        nome: 'Jéterson Miranda Gomes',
        idade: 26,
        img: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        aleatorio() {
            return Math.random(0, 1)
        }
    }
})