var car = {
    type : "Fiat",
    model : "500",
    color : "white",

    start: function(jalan){
        console.log("ini methode start " +jalan)
    },
    drive: function(){
        console.log("ini methode drive")
    },
    brake: function(){
        console.log("ini methode brake")
    },
    stop: function(){
        console.log("ini methode stop")
    }
};

module.exports = {car}