var wrapper = document.querySelector(".service");
// var service = [1, 2, 3, 4];
var service = [{
    title: "Construction",
icon: '../assets/ic-construction.svg'},
{title: "Project Development",
icon: 'assets/ic-plan.svg'},
{title:  "Interior Design",
icon: 'assets/ic-pan.svg'},
{title:  "Repairs",
icon: 'assets/ic-painting.svg'}
]
service.forEach(function(item, idx){
var block = document.createElement("div");
 block.textContent = item.title;
block.classList.add("card");
block.setAttribute("src", item.icon)
if (idx == 2) {
    block.classList.add("serviceItem3");
}else{block.classList.add("serviceItem");

    }


wrapper.append(block);
});

