class SlideShow
{
  constructor(domNode)
  {
      this.domNode = domNode;
      this.slideNum = 0;
      this.slides = domNode.querySelectorAll("img, video");
      this.next=this.next.bind(this);
      this.prev=this.prev.bind(this);
      this.bind();
  }

  bind()
  {
    const prevButt = this.domNode.querySelector(".prev");
    const nextButt = this.domNode.querySelector(".next");
    if(prevButt != null)
    {
      prevButt.addEventListener("click", this.prev);
    }
    if(nextButt != null)
    {
      nextButt.addEventListener("click", this.next);
    }
  }

  showSlide()
  {
    for(let i = 0; i < this.slides.length; i++)
    {
      this.slides[i].style.display = "none";
    }
    this.slides[this.slideNum].style.display = "block";
  }

  next()
  {
    if(this.slideNum < this.slides.length - 1)
    {
        this.slideNum++;
        this.showSlide();
    }
  }

  prev()
  {
    if(this.slideNum > 0)
    {
      this.slideNum--;
      this.showSlide();
    }
  }

}

(function(){
  const slideshows = document.querySelectorAll(".slideshow");
  slideshows.forEach(function(slideshow)
  {
    new SlideShow(slideshow);
  })
})()
