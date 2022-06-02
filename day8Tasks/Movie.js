class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  result=[];
  getPG(movies) {
    for(i=0;i<movies.length;i++){
        if (movies[i].rating == "PG"){
            result.push(movies[i]);
    }
    return result;
  }
}
