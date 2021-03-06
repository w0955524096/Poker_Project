const start=()=>{

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
            for (let i = 0; i < 20; i++) {

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





}

const end=()=>{

//app2綁定事件
    const app2 = new Vue({
        el: '#app-2',
        data: {
          message: '页面加载于 ' + new Date().toLocaleString()
        }
      })  

//demo綁定事件
    const demo = new Vue({
        el: '#demo',
        delimiters: ['${', '}'],
        data: {
          n: 0
        },
        methods: {
            prompt(){
                deco.n++;
                //alert("123");
          }
        }
      })

//deco綁定事件
    const deco = new Vue({
        el: '#deco',
        delimiters: ['${', '}'],
        data: {
          n: 0
        },
        methods: {
            click(){
                this.n=0
          }
        }
      })
     
//add-content綁定事件
    const addcontent = new Vue({
        el: '#content_add',
        data: {
        newAddText:'',
            lists:[
                {id:1,url:'https://memeprod.sgp1.digitaloceanspaces.com/user-template/5102d593d3d4cf4d336bd49d1ed1c059.png'},
                {id:2,url:'https://memeprod.sgp1.digitaloceanspaces.com/user-template/98996b8124e004cc88b6d1c3860799fc.png'},
                {id:3,url:'https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1591492459696.jpg'},
                {id:4,url:"https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1591551684094.jpg"},
                {id:5,url:"https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1591515814761.jpg"},
                {id:6,url:"https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1591543368795.jpg"},
                {id:7,url:"https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1591536907641.jpg"},
                {id:8,url:"https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1591534896801.jpg"},
                {id:9,url:"https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1591526734996.jpg"}
            
            ],
            nextTodoId: 4
        },
        methods:{
            addNewList:function(){
                this.lists.push({
                    id:this.nextTodoId++,
                    url:this.newAddText
                })
                this.newAddText=''
            }
        } 
       })

//hotel_add綁定事件
    const hotel_add = new Vue({
        el: '#hotel_add',
        data: {
        newAddText:'',
            lists:[
                {id:1,url:'https://memeprod.sgp1.digitaloceanspaces.com/user-template/5102d593d3d4cf4d336bd49d1ed1c059.png'},
                {id:2,url:'https://memeprod.sgp1.digitaloceanspaces.com/user-template/98996b8124e004cc88b6d1c3860799fc.png'},
                {id:3,url:'https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1591492459696.jpg'},
                {id:4,url:"https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1591551684094.jpg"},
                {id:5,url:"https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1591515814761.jpg"},
                {id:6,url:"https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1591543368795.jpg"},
                {id:7,url:"https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1591536907641.jpg"},
                {id:8,url:"https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1591534896801.jpg"},
                {id:9,url:"https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1591526734996.jpg"}
            
            ],
            nextTodoId: 4
        },
        methods:{
            addNewList:function(){
                this.lists.push({
                    id:this.nextTodoId++,
                    url:this.newAddText
                })
                this.newAddText=''
            }
        } 
    })

//footer-ad綁定事件
     const ad = new Vue({
        el: '#ad',
        delimiters: ['${', '}'],
        data: {
          i: 0
        },
        methods: {
            click(){
                alert("this is ad")
          }
        }
      })      

//footer-aboutus綁定事件
     const aboutus = new Vue({
        el: '#aboutus',
        delimiters: ['${', '}'],
        data: {
          i: 0
        },
        methods: {
            click(){
                alert("this is aboutus")
          }
        }
      })  



    //return   
}

end()

