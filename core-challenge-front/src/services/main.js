class NewsService {
  SERVICE_API = '0805a179f60b4e019e87d08b68659128';

  getNotices = () => {
    return new Promise(async (acept, reject) => {
      try{
        let response = await fetch(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-15&sortBy=publishedAt&apiKey=${this.SERVICE_API}`,
          { method: 'GET'});
        let data = await response.json();
        acept(data);
      }catch (e) {
        reject(e);
      }
    });
  }
}

export default new NewsService();