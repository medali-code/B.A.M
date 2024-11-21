var selectedClass = "" , selectedId="";
  $(".filter-button-group").on("click",function(){
    $(".collection .card-shop").hide();
    filter=$(this).attr('data-filter');
    $(".collection .card-shop").filter("."+filter).show();
    });
/*selectedId= $(this).attr("id");
$(".filter-button-group").removeClass('text-light active-btn');
$(".filter-button-group").addClass('text-dark');
/*button clique
$("#"+selectedId).removeClass('text-dark'); 
$("#"+selectedId).addClass('text-light active-btn'); */
/*filtres*/
var id="";
$(".radio-price").on("change",function(){
    $(".collection .col").hide();
    id=$(this).attr('id');
    $(".collection .col").filter("."+id).show();

});

/*checkbox*/
$(".checkbox-type").on("change",function() {
    $(".collection .col").hide();

    /*if($(this).is(":checked")){
      id = $(this).attr('id');
      $(".collection .col").filter("."+id).show();
    }else{
      $(".collection .col").show()
    }*/

    if($(this).is(":checked")){
      $(this).attr("checked","checked");
    }else{
      $(this).removeAttr("checked");
    }
    var i = 0;
    var value="";
   $(".checkbox-type:checked").each(function(){
      //id = $(this).attr('id');
      value = $(this).val();
      $(".collection .col").filter("."+value).show();
      i++;
   });
   if(i==0){
        $(".collection .col").show();
   }
});


/************************ */

var data = [
  {id: 1, nom: "t-shirt1", prix:150, img:"./IMAGES/madame1.jpg" , categorie:"t-shirt"},
  {id: 2, nom: "t-shirt2", prix:230 , img:"./IMAGES/madame2.jpg", categorie:"jacket"},
  {id: 3, nom: "t-shirt3", prix:50 , img:"./IMAGES/madame3.jpg", categorie:"t-shirt"},
  {id: 4, nom: "t-shirt4", prix:100 , img:"./IMAGES/madame4.jpg", categorie:"jacket"},
  {id: 5, nom: "t-shirt5", prix:80 , img:"./IMAGES/madame5.jpg", categorie:"t-shirt"},
  {id: 6, nom: "t-shirt6", prix:60 , img:"./IMAGES/madame6.jpg", categorie:"t-shirt"},
  {id: 7, nom: "t-shirt7", prix:150 , img:"./IMAGES/madame6.jpg", categorie:"jacket"},

];

/*********** card dynamique */
var card="";

$.each(data, function (i,women){

  card += `<div class="card-shop col-3 ${women.categorie}">
            <div class="card h-100 ">
                <img src="${women.img}" class="card-img-top"
                    alt="Hollywood Sign on The Hill" />
                <div class="card-body">
                    <h5 class="card-title">${women.nom}</h5>
                    <p class="card-text">
                      <div class="d-flex flex-row">
                            <div class="raiting">
                                <i class="fa-solid fa-star active"></i>
                                <i class="fa-solid fa-star active"></i>
                                <i class="fa-solid fa-star active"></i>
                                <i class="fa-solid fa-star active"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="colors d-flex mt-3" >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                      </div>
                      <div class="row d-flex mt-4">
                            <div class="col-md-8">
                                <button id="${women.id}" onClick="addPanier(this);" type="button" class="btn btn-shop btn-panier active-btn"><i class="fa-solid fa-cart-plus"></i><span class="m-2"></span>Panier</button>
                            </div>
                            <div class="col-md-4 p-2">
                                <h3 class="price">$ ${women.prix}</h3>
                            </div>
                      </div>
                    </p>
                </div>
            </div>
          </div>`;
});

$("#collection").html(card);  