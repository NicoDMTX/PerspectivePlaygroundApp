const vm = Vue.createApp({
    data() {
      return {
       perspective: 100,
       xRotation: 0,
       yRotation: 0,
       zRotation: 0,
       selectedColor: ""
    }
},
    computed: {
        box() {
            return {
                transform: `
                    perspective(${this.perspective}px)  
                    rotateX(${this.xRotation}deg)
                    rotateY(${this.yRotation}deg)
                    rotateZ(${this.zRotation}deg)
                `
            }
        }
    },
    methods: {
        reset() {
            this.perspective = 100,
            this.xRotation = 0
            this.yRotation = 0
            this.zRotation = 0
        },

        async copy() {
            let text = `transform:${this.box.transform}`
            await navigator.clipboard.writeText(text)

            alert('CSS copied to clipboard !')
        }
    }
}).mount('#app')
  