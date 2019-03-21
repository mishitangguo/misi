import qs from 'querystring'
import axios from 'axios'
export default {
  //获取带书籍数量的父分类
  getCategories(){
    return axios.get('/api/cats/lv2/statistics')
  },
  //获取书籍详情
  getBookInfo(id){
    return axios.get('/api/book/'+id)
  },
  //获取章节
  getBookSources(bookid){
    //view=summary
    //book=bookid
    return axios.get('/api/toc/'+bookid+'?view=chapters')
  },
  //获取书源
  getChapters(id){
    return axios.get('/api/toc?view=summary&book='+id)
  },
  //获取章节详情内容
  getBookChapter(link){
    return axios.get('/content/chapter/'+link)
  },
  //获取搜索结果
  getSearchResult(word){
    let keyword = qs.stringify(word);
    return axios.get('/api/book/fuzzy-search?'+keyword)
  },
  getSearchHotwords(){
    return axios.get('/api/book/search-hotwords');
  },
}
