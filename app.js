var arr = [{ cell: 0, isClicked: false, icon: "" },
    { cell: 1, isClicked: false, icon: "" },
    { cell: 2, isClicked: false, icon: "" },
    { cell: 3, isClicked: false, icon: "" },
    { cell: 4, isClicked: false, icon: "" },
    { cell: 5, isClicked: false, icon: "" },
    { cell: 6, isClicked: false, icon: "" },
    { cell: 7, isClicked: false, icon: "" },
    { cell: 8, isClicked: false, icon: "" }
]


var winOrLoseCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]




var app = new Vue({
    el: '#table',
    data: {
        arr: arr,
        winMessage: ""


    },

    methods: {

        click: function(x) {
            if (this.arr[x].isClicked === false) {
                this.arr[x].icon = "O";
                this.arr[x].isClicked = true;
                this.isWin();
                if (this.winMessage === "") {
                    this.opponentMove();
                }

            }
        },

        opponentMove: function() {
            var notClickedArr = [];
            arr.forEach(function(item) {
                if (item.isClicked === false) { notClickedArr.push(item.cell); }

            });
            var opponentCell = notClickedArr[Math.floor(Math.random() * notClickedArr.length)];
            this.arr[opponentCell].icon = "X";
            this.arr[opponentCell].isClicked = "true";
            this.isLose();





        },


        isWin: function() {
            console.log("xxx");

            for (var i = 0; i < winOrLoseCondition.length; i++) {

                var winRow = winOrLoseCondition[i];

                if (this.arr[winRow[0]].icon === "O" && this.arr[winRow[1]].icon === "O" && this.arr[winRow[2]].icon === "O") {

                    console.log("win");

                    this.click = function() {};

                    this.winMessage = "You win!!";

                }

            }
        },

        isLose: function() {
            console.log("xxx");

            for (var i = 0; i < winOrLoseCondition.length; i++) {

                var winRow = winOrLoseCondition[i];

                if (this.arr[winRow[0]].icon === "X" && this.arr[winRow[1]].icon === "X" && this.arr[winRow[2]].icon === "X") {

                    console.log("lose");

                    this.click = function() {};

                    this.winMessage = "You Lose!!";

                }

            }
        }
    }


    // computed: {

    //     win: function() {
    //         console.log("xxx");

    //         for (var i = 0; i <= winOrLoseCondition.length; i++) {

    //             var winRow = winOrLoseCondition[i];

    //             if (this.arr[winRow[0]].icon === "O" && this.arr[winRow[1]].icon === "O" && this.arr[winRow[2]].icon === "O") {

    //                 console.log("win");

    //                 this.click = function() {};

    //             }

    //         }
    //     }

    // }
})

app.opponentMove();