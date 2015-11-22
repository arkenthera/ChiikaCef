'use strict';var ApiList=[{name:"ChiikaVerifyUser",index:0,argCount:1},{name:"ChiikaGetAnimelistRequest",index:1,argCount:0},{name:"ChiikaGetAnimelist",index:2,argCount:0}],ApiFuncCaller=function(){this.callApi=function(a,b,c,d,e){"undefined"===typeof ApiList[a]?console.log("Trying to call a API function that doesnt exist."):(console.log("Trying to execute"+ApiList[a].name+"... with arguments: "),console.log(d),"function"===typeof window[ApiList[a].name]?(console.log("Executing call..."+a),window[ApiList[a].name](b,
c,d)):console.log("You can't call this function outside of Chiika."))}},apiFunctions;apiFunctions=new ApiFuncCaller;
var AnimeModel=function(){this.getId=function(){return 0};this.getTitle=function(){return""};this.getEnglish=function(){return""};this.getEpisodeCount=function(){return""};this.getType=function(){return""};this.getStatus=function(){return""};this.getStartDate=function(){return""};this.getEndDate=function(){return""};this.getSynopsis=function(){return""};this.getTags=function(){};this.getPremiered=function(){return""};this.getProducers=function(){return""};this.getDuration=function(){return 0};this.getScore=
function(){return 0};this.getRanked=function(){return 0};this.getPopularity=function(){return 0}},UserAnimeList=function(){var a;this.getUserAnimeList=function(){return a};this.setUserAnimeList=function(b){a=b}},User=function(){var a={watching:0,completed:0,onHold:0,dropped:0,planToWatch:0,daysSpent:0},b={reading:0,read:0,onHold:0,dropped:0,planToRead:0,daysSpent:0};this.getUserAnimeInfo=function(){return a};this.getUserMangaInfo=function(){return b}},Settings=function(){var a={startMinimized:!1,
startWithWin:!1,rememberPos:!1,rememberSize:!1};this.getLibraryPath=function(){return""};this.getSyncInterval=function(){return 150};this.getWindowSettings=function(){return a};this.getGlobalColor=function(){}},Chiika=function(){var a=this;a.getInitialized=function(){return!1};a.getSettings=function(){};a.getUserSettings=function(b){a.callApi("getUserSettings",b)};a.setUserSettings=function(b,c){a.callApi("setUserSettings",b,c)};a.getAnimeList=function(a,c){apiFunctions.callApi(1,a,c,"",!0)};a.callApi=
function(a,c,d,e){apiFunctions.callApi(a,d,e,c,!1)}},chiika;function handleAnimelistCallback(a){console.log(a)}function handleAnimelistError(a){console.log(a)}chiika=new Chiika;window.ChiikaGetAnimelist(handleAnimelistCallback,handleAnimelistError,"");
