<section class="profile">

<h2>
Your Profile
</h2>

<div id="profileCard">

<div id="bannerPreview"></div>

<img id="pfpPreview" src="">

<h3 id="namePreview">
Username
</h3>

<p id="bioPreview">
No bio yet.
</p>

</div>


<div class="editor">

<h3>
Edit Profile
</h3>


<label>
Profile Picture:
</label>

<input 
type="file"
id="pfpUpload"
accept="image/*"
>


<label>
Banner:
</label>

<input 
type="file"
id="bannerUpload"
accept="image/*"
>


<label>
Display Name:
</label>

<input 
id="displayName"
placeholder="Name"
>


<label>
Bio:
</label>

<textarea
id="bioInput"
placeholder="About me..."
></textarea>


<button onclick="saveProfile()">
Save Profile
</button>


</div>

</section>
let profile = JSON.parse(

localStorage.getItem("profile")

) || {

name:"",

bio:"",

pfp:"",

banner:""

};



const pfpPreview =
document.getElementById("pfpPreview");


const bannerPreview =
document.getElementById("bannerPreview");


const namePreview =
document.getElementById("namePreview");


const bioPreview =
document.getElementById("bioPreview");



function loadProfile(){

namePreview.innerHTML =
profile.name || "Username";


bioPreview.innerHTML =
profile.bio || "No bio yet.";



if(profile.pfp){

pfpPreview.src =
profile.pfp;

}



if(profile.banner){

bannerPreview.style.backgroundImage =
`url(${profile.banner})`;

}

}



document.getElementById("pfpUpload").onchange =
function(e){

const reader =
new FileReader();


reader.onload=function(){

profile.pfp =
reader.result;

loadProfile();

}


reader.readAsDataURL(
e.target.files[0]
);

};




document.getElementById("bannerUpload").onchange =
function(e){

const reader =
new FileReader();


reader.onload=function(){

profile.banner =
reader.result;

loadProfile();

}


reader.readAsDataURL(
e.target.files[0]
);

};




function saveProfile(){

profile.name =
document.getElementById("displayName").value;


profile.bio =
document.getElementById("bioInput").value;



localStorage.setItem(

"profile",

JSON.stringify(profile)

);


loadProfile();

alert("Profile saved!");

}



loadProfile();
