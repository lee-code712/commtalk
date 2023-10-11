"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[18],{7018:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var s=a(6252),o=a(3577),A=a(9963),i=a(6652),r=a(4192),g=a(4268),d=a(7821);const l=e=>((0,s.dD)("data-v-30145c31"),e=e(),(0,s.Cn)(),e),c={class:"list-view"},n={class:"full-container"},p={class:"sub-top-wrap"},h={class:"board-name"},w={class:"search-wrap"},u={class:"list-wrap"},C=["onClick"],m=["href"],B={class:"list-title-wrap"},I={class:"boardname-title-wrap"},b={key:0,class:"board-name"},v={class:"title"},f=["src","onClick"],Q={class:"list-content"},k={class:"list-detail-info"},Y={class:"comment-like-wrap"},G={class:"comment-box"},P=l((()=>(0,s._)("img",{src:r,style:{width:"12px",height:"12px"}},null,-1))),D={class:"like-box"},R=l((()=>(0,s._)("img",{src:g,style:{width:"14px",height:"14px"}},null,-1))),N={class:"view-box"},E=l((()=>(0,s._)("img",{src:d,style:{width:"14px",height:"14px"}},null,-1))),y={class:"writer-date-wrap"},U={class:"writer"},S={class:"date"},K={class:"paging-wrap"},Z={class:"paging-inner"},j=["disabled"],O={class:"paging-num-wrap"},V=["onClick"],x=["disabled"],H={class:"btn-wrap"},M=l((()=>(0,s._)("button",{class:"write-btn"},"글쓰기",-1)));function T(e,t,a,r,g,d){const l=(0,s.up)("HeaderLayout"),T=(0,s.up)("SubHeader"),F=(0,s.up)("router-link"),q=(0,s.up)("FooterLayout");return(0,s.wg)(),(0,s.iD)("div",c,[(0,s.Wm)(l),(0,s.Wm)(T),(0,s._)("div",n,[(0,s._)("div",p,[(0,s._)("strong",h,(0,o.zw)(g.boardName),1),(0,s._)("div",w,[(0,s.wy)((0,s._)("input",{type:"search","onUpdate:modelValue":t[0]||(t[0]=t=>e.keyword=t),placeholder:"내용을 입력해주세요."},null,512),[[A.nr,e.keyword]]),(0,s._)("img",{src:i,onClick:t[1]||(t[1]=(...e)=>d.fetchPosts&&d.fetchPosts(...e))})])]),(0,s._)("div",u,[(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(g.boards,(e=>((0,s.wg)(),(0,s.iD)("li",{class:"list",key:e.postId,onClick:t=>d.updateViews(e.postId)},[(0,s._)("a",{href:"/detail?postId="+e.postId},[(0,s._)("div",B,[(0,s._)("div",I,[g.isAllList?((0,s.wg)(),(0,s.iD)("div",b,(0,o.zw)(e.board.boardName),1)):(0,s.kq)("",!0),(0,s._)("div",v,(0,o.zw)(e.title),1)]),(0,s._)("img",{src:e.scraped?g.scrapImgActive:g.scrapImg,onClick:t=>d.changeImg(e,e.postId)},null,8,f)]),(0,s._)("div",Q,(0,o.zw)(e.content),1),(0,s._)("div",k,[(0,s._)("div",Y,[(0,s._)("div",G,[P,(0,s.Uk)(" 댓글 "+(0,o.zw)(e.commentCnt),1)]),(0,s._)("div",D,[R,(0,s.Uk)(" 공감 "+(0,o.zw)(e.likes),1)]),(0,s._)("div",N,[E,(0,s.Uk)(" 조회수 "+(0,o.zw)(e.views),1)])]),(0,s._)("div",y,[(0,s._)("div",U,(0,o.zw)(e.author.nickname),1),(0,s._)("div",S,(0,o.zw)(e.createdAt),1)])])],8,m)],8,C)))),128))])]),(0,s._)("div",K,[(0,s._)("div",Z,[(0,s._)("div",{class:"prev-btn",onClick:t[2]||(t[2]=e=>d.loadPage("previous")),disabled:0===g.pageNumber},"이전",8,j),(0,s._)("div",O,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(g.totalPages,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e-1,class:(0,o.C_)({on:e-1===g.pageNumber}),onClick:t=>d.gotoPage(e-1)},(0,o.zw)(e),11,V)))),128))]),(0,s._)("div",{class:"next-btn",onClick:t[3]||(t[3]=e=>d.loadPage("next")),disabled:g.pageNumber===g.totalPages-1},"다음",8,x)])]),(0,s._)("div",H,[(0,s.Wm)(F,{to:"/edit?boardId="+g.boardId,class:"router-link-class"},{default:(0,s.w5)((()=>[M])),_:1},8,["to"])])]),(0,s.Wm)(q)])}var F=a(6154),q=a(9937),X=a(2915),z=a(4014),J={name:"ListView",components:{HeaderLayout:q.Z,SubHeader:X.Z,FooterLayout:z.Z},data(){return{headers:[],link:"",boards:[],boardName:"",scrapImg:a(9090),scrapImgActive:a(3561),pageNumber:0,totalPages:"",isAllList:!1,boardId:this.$route.query.boardId}},created(){this.setupHeaders(),this.fetchData(),this.getBoardName()},methods:{setupHeaders(){const e=localStorage.getItem("token");this.link="http://"+window.location.host,this.headers={Authorization:`Bearer ${e}`,"Content-Type":"application/json"}},changeImg(e,t){event.preventDefault(),console.log(e),e.scraped=!e.scraped;const a={refId:t,actionType:"scrap"};F.Z.post("/api/post/changeEngagementAction",a,{headers:this.headers}).then((e=>{console.log(e.data.status),this.$forceUpdate()})).catch((e=>{console.error(e)}))},getBoardName(){const e=this.$route.query.boardId;F.Z.get(`/api/post/getBoard/${e}`,{headers:this.headers}).then((e=>{this.boardName=e.data.boardName})).catch((e=>{console.error(e)}))},updateViews(e){F.Z.post("/api/post/updateViews",{postId:e},{headers:this.headers}).then((e=>{console.log("views: "+e.data)})).catch((e=>{console.error(e)}))},fetchData(){const e=this.$route.query.boardId,t=this.$route.query.commonKeyword;let a="";const s={page:this.pageNumber,size:10};t&&(a=`/api/common/getPosts/${t}`,this.boardName="전체",this.isAllList=!0),e&&(a=`/api/post/getPostsByBoard/${e}`),F.Z.get(a,{params:s,headers:this.headers}).then((e=>{this.boards=e.data.posts,this.totalPages=e.data.totalPages})).catch((e=>{console.error(e)}))},fetchPosts(){if(!this.keyword)return;const e=this.$route.query.boardId;F.Z.get(`/api/post/getPosts/${e}/${this.keyword}`,{headers:this.headers}).then((e=>{this.boards=e.data.posts,this.totalPages=e.data.totalPages})).catch((e=>{console.error(e)}))},loadPage(e){"previous"===e&&this.pageNumber>0?this.pageNumber--:"next"===e&&this.pageNumber<this.totalPages-1&&this.pageNumber++,this.fetchData()},gotoPage(e){e>=0&&e<=this.totalPages-1&&(this.pageNumber=e,this.fetchData())}}},L=a(3744);const W=(0,L.Z)(J,[["render",T],["__scopeId","data-v-30145c31"]]);var _=W},9090:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVUSURBVHgB7Z1bUhtHFIbPaRRbvJEVhKzAeAUWK4j8ZkilIm8gkh5TBiMKKD8KvAFwpYLyZrIClB2QFZisIMpToNB0p49UncSaW49uZxqdr4oqNNMjif/ry8wUNQdhThx1f6ohrG0hwgsA3DKIGwBmAx4FOACjbxHgVhvzO4Du77e/68McQJiBTvd84wtVbRrA1uMJ2w9jZaCB/tDAYae9cwtTMpUACr6C6weApgUC2biYVkRhAcfdyxYodbBqPT4PGhFG68O37W8vihxXSMDx6S9d6fU5GDzda71q+zb3EjCecqofbesaCB6Ym6G+3+60Xw/yWirwoKKeXkv4RcCtyprtsB7kChhNO/YNQSiGgdo4u2wyp6CT7s8No9Q5eIMDA+YMNPQjuyjNcnpWJmgKXoPqFihdV6C+sQvupvfB2rT32runabtTBbzr9ja1gmufD6MzABv66/32Th9WgJNur2HnjgM/EWZg14Ov09aD1CkoAtPxC9+cRfru+aqET7xp71w86Orz0WjPBcfXTGl7kzZS748UfIIcrKDD/eZOB1aYo7Nex4Z4kNduqO++TBoFiSOAej/kQPZXPXyCMvAZCWvwJPH6KVEAKnwBGdCcH+n7DggjIr1Oo+A2q43NtJm0PSaA7mrmzf1G032P/IuMVaHTfjnQ9iQkuxVuHHV7tcmtCSNA1SAD6v1v7SIEwmeMT0Iws1MimNj1lIo3UtkXXVr/CkIiRkfZa4EytdimeCP8CrLf5QqEFFQ/a68B9Sx2REK7TcgggrsbEBKp5C3ECbfwEwRk3+eXxTedH3NvvaCPAGGZiABmRAAzIoAZEcCMCGBGBDAjApgRAcyIAGZEADMigBkRwIwIYEYEMCMCmBEBzIgAZkQAMyKAGRHAjAhgRgQwIwKYEQHMiABmRAAzIoAZEcCMCGBGBDAjApgRAcyIAGZEADMigBkRwIwIYKYCgTJ6aCw8qdPvD6D6oT6dK8gRcHLWO6io6p/0ODX6qSj4RNsgQIITQEEbOwAmt9O2ECUEJSAtfEeIEoIRkBe+IzQJQQjwDd9BbY/f9wo8bpOP0gsoGv6/GGiEIKHUAqYO3xGAhNIKmDl8R8kllFLA3MJ3lFhC6QQUDP+DTfeDV8uSSiiVgJPT3nmR8PeaO4295m4jZAmlETAKH6Hh2XwUvnsRsoRSCJglfEeoEtgFzCN8R4gSWAXMM3xHaBLYBCwifEdIElgELDJ8RygSli5gGeE7QpCwVAHLDN9RdglLE8ARvqPMEpYigDN8R1klLFxAGcJ3lFHCQgWUKXwHSfArPwVLkbAwAWUM37Hf3G1RCS6vxguWsBABRcKn3rjM8B3j8lP8EuYuoFj4VAhul60+cRkkFBbQ6fY20/YVD5+/ENw8JbzLyCaNpBImf2QdUMHkgmQhhu8oKuHk/eVH+t/UyV35FQhNrP5OXICGPmSBpnVsw3YjgQq/2dfXoYbvKCLBGKxTkWv62+m1lbE5qh2s8PucI2OdO1bM86h7WUeFXtWgi1LW8P+Pb3HOaaBqe5NF8GIjIIL1fl5FuGkIIXyi0HRUgLQKhDEBVBfRqprrFwglfMciJFD9zaTtqRW17Wp/TXXRYdYPDrjm8LymI0S8evPDq5dJ+1JPQ4dR1R6AM1XNCzl8Yj4jwdw8RH+nVlpNFUBT0VA/3fa+eTX5sY+k2vYsEqjnD/X9dlb1QQQPihSxt7cWfgONncdWY54usoYKrmxgz/La0oJLc75P2V8vAY7xKSrUDeDWf18EB2Z0fqv7oNXVYwt+klFRZqXrVHcZgSrPUu1NOmvUf9ngbQZ4USSDfwAF8c2AwpQJAAAAAABJRU5ErkJggg=="},3561:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPwSURBVHgB7Z1BTttAFIbfOC2iXVSxuAA9Adyg6S60G25AOAGpqtBlw5KgquEEwAmgq0TqgvQG5QTNAYrCrlVFZzoOngpiO7YTO28m/J9kCBMHj//PbybOIiOoIOofRjUhaYME1fSfm3qrhtsycKO3YbApJa/I8wb9Q39ABSBoDmrNUfX5Cu0poiYtT9hZGQpFA+nRgZYxpBmZSUAQ/LMV+kh3wT96tIjTWUXkFvB2f7Qjibr0+K74NIZ6JGj3O/5ZnhflErC1P/pMuOrT6PY6/rusO2cSMB5yntJ5OMGCdC5+/aHdQde/SdvxCWVAj/cn+leNQFa29QUbDNGv03b00nYIh51tAvnQo0WYXcpuU6i3fjaEqJwQmBlFlUa/8yJxYk4UoG+s1vXbq0v9cJ3APNzo+eBl0nyQOASJv7JNCL8IzD1TLLEVEF79PwgUhq4CP64KYisgvPpBgaw+lbH3T/FDkOe9IlAoQnh7ce0RAcGnmoSxvwyq9ffjbB8QrQApawRKQVTk5mRbRIAulQ0CpaCUqE22RStAYfgpCyFE5OKOChAQUCKRj/C9LDuBwsgkACwQCGAGApiBAGYggBkIYAYCmIEAZiCAGQhgBgKYgQBmIIAZCGAGApiBAGYggBkIYAYCmIEAZiCAGQhgBgKYgQBmIIAZCGAGApiBAGYggBkIYAYCmIEAZiCAGQhgBgKYgQBmIIAZCGAGApiBAGYggBkIYAYCmIEAZiCAGQhgBgKYgQBmnBagiM6IZK4FE2wj09fX20gQfr/jN4LHW/vX+qe3Qw7iZAXcDz+g11lruFoJzgmYDN/gqgSnBCSFb3BRgjMC0sI3uCbBCQFZwze4JMF6AXnDN7giwWoBs4ZvcEGCtQLmDd9guwQrBRQVvsFmCdYJKDp8g60SrBJQVvgGGyVYI6Ds8A22SbBCwKLCN9gkgV3AosM3jCUoeUzMxAlIXYK1KJSiA47wDb2jtWbQB1ocGRZyU+PF60tnHP6R3yZmgj4sSoI+zvfJtpgKkN+o/I5YEb5hURKEJ68m2yIClPQuqERsC9+wCAm30judbIsI6H/yB3oYGlAJ2Bq+oUwJ+v8Ovh75WYagoAqK74Tt4RtKk+DRbnxzXCd0FRTZCVfCNxQtYXz+h/4w7rmpS5pvta67lLAKaK6DOxT+feqtUVuI5MWYMyHouHfoN5OennojNu/7ZJfDD5i3EoLXTgs/YGoFGN60RptK0DllXOY2mHBIzyPjCX0JCFcYv6QSzj+TgP8dCdbDrciGoPGCz+sPDkr6Bu7uwGfLEvwkaecvhPyibr2LPOefS8B9as1RdTVcG/G3vsWOWy99mSnq/P8Bm4yBUFLTjbAAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=18.28665bb5.js.map