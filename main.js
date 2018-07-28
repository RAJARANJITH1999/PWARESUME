/*function Loadjson(file,callback){
  var xhr= new XMLHttpRequest();
  xhr.overrideMimeType("application/json")
  xhr.open("GET",file,true)
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status =="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
Loadjson("data.json",function(text)
{
  var data=JSON.parse(text);
  console.log(data);

  basics(data.details);

  career(data.career);

  education(data.education);

  TechnicalSkills(data.TechnicalSkills);

  Achievments(data.Achievments);
})
*/
function loadjson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if (response.ok) {
        resolve(response.json());
      }else {
        reject(new Error("ERROR"));
      }
    })
  })

}

var newfile = loadjson("data.json");
newfile.then(data=>{
  console.log(data);

  basics(data.details);

  career(data.career);

  education(data.education);

  TechnicalSkills(data.TechnicalSkills);

  Achievments(data.Achievments);
})
var child = document.querySelector(".CHILD1")

function basics(det){

  var image = document.createElement("img")

  image.src = det.image;
  child.appendChild(image);

  var name = document.createElement("h4");

  name.textContent =det.name;
  child.appendChild(name);

  var phone=document.createElement("h4");

  phone.textContent = det.Phoneno;
  child.appendChild(phone);

  var mail=document.createElement("a");

  mail.href="mailto:asiletirajaranjithkumar7@gmail.com";
  mail.textContent = det.email;
  child.appendChild(mail);

  var add=document.createElement("h3");

  add.textContent="--Address--";
  child.appendChild(add);

  var hr=document.createElement("hr");

  child.appendChild(hr);

  var p=document.createElement("p")

  p.textContent = det.address;
  child.appendChild(p);
}

var child2 = document.querySelector(".CHILD2")

function career(info){
  var heading=document.createElement("h2");

  heading.textContent="career Objective";
  child2.appendChild(heading);

  var hr=document.createElement("hr");

  child2.appendChild(hr);

  var c=document.createElement("h3");

  c.textContent=info.info;
  child2.appendChild(c);

  var heading2=document.createElement("h2");


}

function education(edu){

  var hd = document.createElement("h2");

  hd.textContent="Educational Qualification";
  child2.appendChild(hd);

  var hr=document.createElement("hr");
  child2.appendChild(hr);

  var table1=document.createElement("table");

  table1.border ="3";
  child2.appendChild(table1);

  tabledata="<tr><td>"+"Qualification"+"</td><td>"+"Institute"+"</td><td>"+"yearofpassing"+"</td><td>"+"percentage"+"</td></tr>";
  for (i = 0; i<edu.length; i++) {
    tabledata+="<tr><td>"+edu[i].Qualification+"</td><td>"+edu[i].Institute+"</td><td>"+edu[i].yearofpassing+"</td><td>"+edu[i].percentage+"</td></tr>";

  }
  table1.innerHTML=tabledata;
}
function TechnicalSkills(tech){

  var Skills = document.createElement("h2");

  Skills.textContent="Technical Skills";
  child2.appendChild(Skills);

  var hr=document.createElement("hr");
  child2.appendChild(hr);

  for (var i = 0; i < tech.length; i++) {

    var title = document.createElement("h3");

    title.textContent=tech[i].title;
    child2.appendChild(title);

    var eduul = document.createElement("ul");
    var eduli = document.createElement("li");

    eduli.textContent = tech[i].info;
    eduul.appendChild(eduli);
    child2.appendChild(eduul);
  }
  }
  function Achievments(ach){

    var hd = document.createElement("h2");

    hd.textContent="Achievments";
    child2.appendChild(hd);

    var hr=document.createElement("hr");
    child2.appendChild(hr);


    for (i = 0; i<ach.length; i++) {

      var eduul = document.createElement("ul");
      var eduli = document.createElement("li");
      eduli.type="square";

      eduli.textContent=ach[i].info;
      eduul.appendChild(eduli);
      child2.appendChild(eduul);

    }

  }

function openpage(){

  window.open("resume.html","_self",true)
}
