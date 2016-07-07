var NOF = {};
NOF.current = "";
NOF.request;
NOF.canvas;

NOF.toggleChapter = function(e) {
  e.target.parentNode.classList.toggle('mod-chapters__item--on')
};

NOF.ChapterBtns = function(){
  var chapterHeaders = document.getElementsByClassName('mod-chapters__item__h');
  _.each(chapterHeaders,function(chapterHeader){
    chapterHeader.addEventListener('click',NOF.toggleChapter)
  });
}

NOF.OnClickArticleBtn = function(e) {
  e.preventDefault();

  if(NOF.request) NOF.request.abort();

  NOF.request = new XMLHttpRequest();
  NOF.request.open('GET', this.href, true);
  NOF.request.onreadystatechange = function(){
    if(NOF.request.readyState === 4 && NOF.request.status === 200) {
      if(!NOF.canvas) NOF.canvas = document.getElementsByClassName('mod-main__canvas')[0];
      var idoc =  NOF.canvas.contentWindow.document;
      idoc.open();
      idoc.write(NOF.request.responseText);
      idoc.close();
    }
  }
  NOF.request.send();
}

NOF.ArticleBtns = function(){
  var articles = document.getElementsByClassName('mod-articles__item');
  _.each(articles,function(article){
    article.getElementsByTagName('a')[0].addEventListener('click',NOF.OnClickArticleBtn)
  });
}

document.addEventListener('DOMContentLoaded',function(e){
  NOF.ChapterBtns();
  NOF.ArticleBtns();
})

