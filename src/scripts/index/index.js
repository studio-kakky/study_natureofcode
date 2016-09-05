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
  document.getElementsByClassName('mod-main__canvas')[0].src = this.href;
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

