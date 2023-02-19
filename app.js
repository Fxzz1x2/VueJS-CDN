const app = Vue.createApp({
    data(){
        return{
            firstName: "John",
            lastName: "Doex",
            email: "Email.nigger",
            picture: "https://randomuser.me/api/portraits/men/10.jpg",
            gender: "male"

        }
    },
    methods:{
        async getUser() {
            const res = await fetch("https://randomuser.me/api/ ")


            const { results } = await res.json()

            console.log(results)
            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email= results[0].email,
            this.picture= results[0].picture.large,
            this.gender= results[0].gender
        },
    },
})

app.mount("#app")