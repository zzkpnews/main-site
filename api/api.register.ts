// 在这里填写API地址
export const web_api_url = {
  NavColumnList: 'http://127.0.0.7:8080/api/nav-columns.php',
  FriendsList: 'http://127.0.0.7:8080/ext-data/friends.json',
  HomeList: 'http://127.0.0.7:8080/api/home-list.php',
  ColumnList: 'http://127.0.0.7:8080/api/column-list.php',
  HomeCarousel: 'http://127.0.0.7:8080/ext-data/home-carousel.json',
  HotList: 'http://127.0.0.7:8080/ext-data/hot-list.json',
  ArticleItemMeta: 'http://127.0.0.7:8080/api/article-item-meta.php',
  VideoItemMeta: 'http://127.0.0.7:8080/api/video-item-meta.php',
  WebsiteInfo: 'http://127.0.0.7:8080/ext-data/website-info.json',
  PictureBlockInfo: 'http://127.0.0.7:8080/api/picture-block-get.php',
  HeadLine:"http://127.0.0.7:8080/ext-data/headline.json",
  ArticleContent:(id:string)=>`http://127.0.0.7:8080/docs/articles/${id}.html`,
};
