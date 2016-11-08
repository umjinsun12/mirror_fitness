angular.module('starter.services', [])

.factory('view_Videos', function() {
var view_videos= [];
return {
  setYoutube: function(input_videos) {
      for (var i = 0; i < input_videos.length; i++) {
        view_videos[i] = input_videos[i];
      }
      return null;
  },
  getStreet: function(){
    var street=[];
    var Scnt = 0;
    for (var i = 0 ; i < view_videos.length; i++){
      if(view_videos[i].sid == parseInt(0))
        street[Scnt++] = view_videos[i];
    }
    return street;
  },
  getChest: function(){
    var back=[];
    var Bcnt=0;
    for (var i = 0 ; i < view_videos.length; i++){
      if(view_videos[i].sid == parseInt(1))
        back[Bcnt++] = view_videos[i];
    }
    return back;
  },
  getBack: function(){
    var chest=[];
    var Ccnt=0;
    for (var i = 0 ; i < view_videos.length; i++){
      if(view_videos[i].sid == parseInt(2))
        chest[Ccnt++] = view_videos[i];
    }
    return chest;
  }
};
})
