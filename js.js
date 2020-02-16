$(function () {

//宣告
    let all_card,card_color,card,people,color;
    //存52張牌
    all_card = [];
    //預設人數
    people = 4;
    //花色
    card_color = ["♣", "♠", "♥", "♦"];
    //要放進row中col
    card = "";
    //不同人的顏色
    color = ["light", "warning", "primary", "dark", "danger", "success"]

    class Method{

        //建構子
        constructor() {

        }
        //發牌(第一次)
        fun_click(){
            //清空
            $(".open").find(".col-1").remove();
            $(".open").find(".sp").remove();

            //發牌取得人數
            if(parseInt($(".get_people").val())>0&&parseInt($(".get_people").val())<53)
                people = parseInt($(".get_people").val());

            //Random陣列
            this.shuffle(all_card)

            //生成牌並將數字放入在append進row
            for (let i = 0; i < 52; i++) {

                card = "<div class=\"col-1" +
                    "\">\n" +
                    "<div class=\"alert alert-" + "" +
                    color[Math.floor(i/Math.ceil(52/people))] +
                    "\" role=\"alert\">\n" +
                    all_card[(i)] +
                    "            </div>\n" +
                    "        </div>";

                if((i+1)%Math.ceil(52/people)==0)
                    card+="<div class='sp col-" +
                        (12) +
                        "'></div>"



                //將產出的牌append進去
                $(".open").append(card);

            }

        }
        //陣列Random
        shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        //製作按照順序的一副牌
        made_card() {
            for (let i = 0; i < 52; i++) {
                all_card.push(card_color[Math.floor(i / 13)] +"<div>"+ (i % 13 + 1)+"</div>"+card_color[Math.floor(i / 13)])
            }
        }

    }

//Initial
    let Method1=new Method();

//Main call

    //做牌
    Method1.made_card();

    //發牌
    $(".fun").click(function () {
        Method1.fun_click()
    });





});