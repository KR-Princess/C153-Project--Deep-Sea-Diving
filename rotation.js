AFRAME.registerComponent("rotatee", {
    schema:{
        speed_of_rotation:{type: 'number', default:0}
    },
    init: function(){
        window.addEventListener("keydown", (e)=>{
            if (e.key=== "ArrowRight"){
                if (this.data.speed_of_rotation < 0.1){
                    this.data.speed_of_rotation += 0.01
                }
            }
            if (e.key=== "ArrowLeft"){
                if (this.data.speed_of_rotation > -0.1){
                    this.data.speed_of_rotation -= 0.01
                }
            }
        })
    },
    tick: function(){
        var map_rotation= this.el.getAttribute("rotation")
        map_rotation.y+= this.data.speed_of_rotation
        this.el.setAttribute("rotation", {
            x: map_rotation.x,
            y: map_rotation.y,
            z: map_rotation.z
        })
    }
})

AFRAME.registerComponent("planerotatee", {
    schema:{
        speed_of_rotation:{type: 'number', default: 0},
        ascent:{type: 'number', default: 0}
    },
    init: function(){
        window.addEventListener("keydown", (e)=>{
            this.data.speed_of_rotation= this.el.getAttribute("rotation")
            var sor= this.data.speed_of_rotation
            if (e.key=== "ArrowRight"){
                if (sor.x < 10){
                    sor.x += 0.5
                    this.el.setAttribute("rotation", sor)
                }
            }
            if (e.key=== "ArrowLeft"){
                if (sor.x > -10){
                    sor.x -= 0.5
                    this.el.setAttribute("rotation", sor)
                }
            }
            if (e.key=== "ArrowUp"){
                if (sor.z < 20){
                    sor.z += 0.5
                    this.el.setAttribute("rotation", sor)
                }
            }
            if (e.key=== "ArrowDown"){
                if (sor.z > -20){
                    sor.z -= 0.5
                    this.el.setAttribute("rotation", sor)
                }
            }
        })
    }
})