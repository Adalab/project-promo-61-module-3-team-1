const Preview = () => {

    return (
         <section class="preview">
        <div class="projectImage"></div>
        <article class="card">
          <h2 class="card__projectTitle"><span class="card__projectTitle--text">Personal project card</span></h2>

          <div class="card__author">
            <div class="card__authorPhoto"></div>
            <p class="card__job">
              Full stack Developer
            </p>
            <h3 class="card__name">Emmelie Bjôrklund</h3>
          </div>
      
          <div class="card__project">            
            <h3 class="card__name">Elegant Workspace</h3>
            <p class="card__slogan">Diseños Exclusivos</p>
            <h3 class="card__descriptionTitle">Product description</h3>
            <p class="card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione</p>

            <div class="card__technicalInfo">
              <p class="card__technologies">React JS - HTML - CSS</p>
          
              <a class="icon icon__www" href="#" title="Haz click para ver el proyecto online">
                Web link
              </a>
              <a class="icon icon__github" href="#" title="Haz click para ver el código del proyecto">
                GitHub link
              </a>
            </div>
          </div>
        </article>
      </section>
    )

}

export default Preview;