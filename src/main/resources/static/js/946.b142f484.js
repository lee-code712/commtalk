"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[946],{6946:function(e,a,t){t.r(a),t.d(a,{default:function(){return R}});var s=t(6252),o=t(3577),i=t(9963),r=t(6652),d=t(4192),l=t(4268),n=t(7821);const c=e=>((0,s.dD)("data-v-5ceb7dbe"),e=e(),(0,s.Cn)(),e),p={class:"list-view"},h={class:"full-container"},g={class:"sub-top-wrap"},m={class:"board-name"},u={class:"search-wrap"},b={class:"list-wrap"},w=["onClick"],k=["href"],v={class:"list-title-wrap"},_={class:"boardname-title-wrap"},f={key:0,class:"board-name"},N={class:"title"},y=["src","onClick"],P={class:"list-content"},I={class:"list-detail-info"},C={class:"comment-like-wrap"},z={class:"comment-box"},x=c((()=>(0,s._)("img",{src:d,style:{width:"12px",height:"12px"}},null,-1))),D={class:"like-box"},Z=c((()=>(0,s._)("img",{src:l,style:{width:"14px",height:"14px"}},null,-1))),$={class:"view-box"},H=c((()=>(0,s._)("img",{src:n,style:{width:"14px",height:"14px"}},null,-1))),L={class:"writer-date-wrap"},A={class:"writer"},B={class:"date"},q={class:"paging-wrap"},S={class:"paging-inner"},V=["disabled"],U={class:"paging-num-wrap"},W=["onClick"],K=["disabled"],F={class:"btn-wrap"},T=c((()=>(0,s._)("button",{class:"write-btn"},"글쓰기",-1)));function Y(e,a,d,l,n,c){const Y=(0,s.up)("HeaderLayout"),j=(0,s.up)("SubHeader"),E=(0,s.up)("router-link"),G=(0,s.up)("FooterLayout");return(0,s.wg)(),(0,s.iD)("div",p,[(0,s.Wm)(Y),(0,s.Wm)(j),(0,s._)("div",h,[(0,s._)("div",g,[(0,s._)("strong",m,(0,o.zw)(n.boardName),1),(0,s._)("div",u,[(0,s.wy)((0,s._)("input",{type:"search","onUpdate:modelValue":a[0]||(a[0]=a=>e.keyword=a),placeholder:"내용을 입력해주세요."},null,512),[[i.nr,e.keyword]]),(0,s._)("img",{src:r,onClick:a[1]||(a[1]=(...e)=>c.fetchPosts&&c.fetchPosts(...e))})])]),(0,s._)("div",b,[(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.boards,(e=>((0,s.wg)(),(0,s.iD)("li",{class:"list",key:e.postId,onClick:a=>c.updateViews(e.postId)},[(0,s._)("a",{href:"/detail?postId="+e.postId},[(0,s._)("div",v,[(0,s._)("div",_,[n.isAllList?((0,s.wg)(),(0,s.iD)("div",f,(0,o.zw)(e.board.boardName),1)):(0,s.kq)("",!0),(0,s._)("div",N,(0,o.zw)(e.title),1)]),(0,s._)("img",{src:t(260)(`./${e.imgName}.png`),onClick:a=>c.changeImg(e,e.postId)},null,8,y)]),(0,s._)("div",P,(0,o.zw)(e.content),1),(0,s._)("div",I,[(0,s._)("div",C,[(0,s._)("div",z,[x,(0,s.Uk)(" 댓글 "+(0,o.zw)(e.commentCnt),1)]),(0,s._)("div",D,[Z,(0,s.Uk)(" 공감 "+(0,o.zw)(e.likes),1)]),(0,s._)("div",$,[H,(0,s.Uk)(" 조회수 "+(0,o.zw)(e.views),1)])]),(0,s._)("div",L,[(0,s._)("div",A,(0,o.zw)(e.author.nickname),1),(0,s._)("div",B,(0,o.zw)(e.createdAt),1)])])],8,k)],8,w)))),128))])]),(0,s._)("div",q,[(0,s._)("div",S,[(0,s._)("div",{class:"prev-btn",onClick:a[2]||(a[2]=e=>c.loadPage("previous")),disabled:1===n.pageNumber},"이전",8,V),(0,s._)("div",U,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.totalPages,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e,class:(0,o.C_)({on:e===n.pageNumber}),onClick:a=>c.gotoPage(e)},(0,o.zw)(e),11,W)))),128))]),(0,s._)("div",{class:"next-btn",onClick:a[3]||(a[3]=e=>c.loadPage("next")),disabled:n.pageNumber===n.totalPages},"다음",8,K)])]),(0,s._)("div",F,[(0,s.Wm)(E,{to:"/edit?boardId="+e.boardId,class:"router-link-class"},{default:(0,s.w5)((()=>[T])),_:1},8,["to"])])]),(0,s.Wm)(G)])}var j=t(6154),E=t(9937),G=t(3610),J=t(4014),M={name:"ListView",components:{HeaderLayout:E.Z,SubHeader:G.Z,FooterLayout:J.Z},data(){return{boards:[],boardName:"",pageNumber:1,pageSize:10,totalPages:"",isAllList:!1}},created(){this.setupHeaders(),this.fetchData(),this.getBoardName()},methods:{setupHeaders(){const e=localStorage.getItem("token");this.link="http://"+window.location.host,this.headers={Authorization:`Bearer ${e}`,"Content-Type":"application/json"}},changeImg(e,a){event.preventDefault();const t={refId:a,actionType:"scrap"};j.Z.post("/api/post/changeEngagementAction",t,{headers:this.headers}).then((e=>{console.log(e.data.status)})).catch((e=>{console.error(e)})),!1===e.scraped?(e.imgName="fi-sr-bookmark",e.scraped=!0):(e.imgName="fi-rr-bookmark",e.scraped=!1)},loadPage(e){"previous"===e&&this.pageNumber>1?this.pageNumber--:"next"===e&&this.pageNumber<this.totalPages&&this.pageNumber++,this.fetchData()},gotoPage(e){e>=1&&e<=this.totalPages&&(this.pageNumber=e,this.fetchData())},fetchData(){const e=this.$route.query.boardId,a=this.$route.query.commonKeyword,t={page:this.pageNumber,size:this.pageSize};var s="";a&&(console.log(a),s="/api/common/getPosts/"+a,this.boardName="전체",this.isAllList=!0),e&&(s="/api/post/getPostsByBoard/"+e),j.Z.get(s,t,{headers:this.headers}).then((e=>{console.log("@@@@"),console.log(e.data.posts),this.boards=e.data.posts.map((e=>(!1===e.scraped?e.imgName="fi-rr-bookmark":e.imgName="fi-sr-bookmark",e))),this.totalPages=e.data.totalPages})).catch((e=>{console.error(e)}))},getBoardName(){const e=this.$route.query.boardId;j.Z.get(`/api/post/getBoard/${e}`,{headers:this.headers}).then((e=>{this.boardName=e.data.boardName})).catch((e=>{console.error(e)}))},updateViews(e){console.log("####@222"),j.Z.post("/api/post/updateViews",{postId:e},{headers:this.headers}).then((e=>{console.log("views: "+e.data)})).catch((e=>{console.error(e)}))},fetchPosts(){if(!this.keyword)return;const e=this.$route.query.boardId;console.log(e),j.Z.get(`/api/post/getPosts/${e}/${this.keyword}`,{headers:this.headers}).then((e=>{console.log(e.data),this.boards=e.data.posts.map((e=>(!1===e.scraped?e.imgName="fi-rr-bookmark":e.imgName="fi-sr-bookmark",e))),this.totalPages=e.data.totalPages})).catch((e=>{console.error(e)}))}}},O=t(3744);const Q=(0,O.Z)(M,[["render",Y],["__scopeId","data-v-5ceb7dbe"]]);var R=Q}}]);
//# sourceMappingURL=946.b142f484.js.map