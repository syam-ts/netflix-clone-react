declare module 'movie-trailer' {
    function movieTrailer(title: string, options?: object): Promise<string>;
    export default movieTrailer;
  }
  