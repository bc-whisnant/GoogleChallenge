self.addEventListener('fetch', function(event) {
  //this intercepts all fetches and is pretty damn cool!

  if (event.request.url.endsWith('.jpg')) {
    event.respondWith(
      //the following is amazing and needs to be investigated more!!
      // new Response('<strong class="a-winner-is-me" style="color:red; font-size: 1.5em;">Hello</strong>', {
      //   headers: {'content-type': 'text/html'}
      //})

      //this serves a gif as a response to everything
      //added if statement above---this now only responds if the url ends with .jpg ---> this replaces all images

      fetch('/imgs/dr-evil.gif')



    );
  }
  
});

//fetch lets you make network requests and read the response