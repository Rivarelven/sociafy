console.log('%cSocialfy','color:gold;background:royalblue;font-size:60px;');
var tweetbox=document.getElementById("tweetbox");
tweetbox.value="";
var socialy_user_name="profile";

let tweetcontent={
name:socialy_user_name,
userimg:profilepicture.src,
tweet_text_content:tweetbox.value

}
function tweetbox_change(){
tweetcontent.tweet_text_content=tweetbox.value;
}
let counter=0;
function ssa(){
counter++;
var emailbtn=document.getElementById('email_btn').innerHTML=`<div class="icon-border"onclick="ssa()"id="email_btn">
<svg width="20px"id="Home_btn">
<use xlink:href="./SVG/sprite.svg#icon-envelop"></use>  
</svg>
</div><span class="w3-badge w3-right w3-small w3-bluessss">${counter}</span>`;
}



function imguploader(){
var fileinput=document.getElementById("selectedFile");
fileinput.click();

function readUrl(){
var selectedFile=document.getElementById("selectedFile");
if(selectedFile.files&&selectedFile.files[0]){
var reader=new FileReader();

reader.onload=function(e){
$('#uploadedimg').attr('src',e.target.result);
}
reader.readAsDataURL(selectedFile.files[0]);
}

}

$('#selectedFile').change(function(){
readUrl(this);
})

var tweetimg=document.getElementById('uploadedimg')
var tweetimgsrc=document.getElementById('uploadedimg').src;
if(tweetimg.getAttribute('src')==""){
    tweetscontainer.insertAdjacentHTML("afterbegin",`<div class="tweet-container w3-container w3-card w3-white w3-round  "><br>
    <img src="${tweetcontent.userimg}" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:60px">
    <span class="w3-right w3-opacity">16 min</span>
    <h4>${tweetcontent.name}</h4><br>
    <hr class="w3-clear">
   
    <p>${tweetcontent.tweet_text_content}</p>
    <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i> &nbsp;Like</button> 
    <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"onclick="ssa()"><i class="fa fa-comment"></i> &nbsp;Comment</button> 
  </div>`)
}
else{
    tweetscontainer.insertAdjacentHTML('afterbegin',`<div class="tweet-container w3-container w3-card w3-white w3-round  "><br>
    <img src="${tweetcontent.userimg}" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:60px">
    <span class="w3-right w3-opacity">16 min</span>
    <h4>${tweetcontent.name}</h4><br>
    <hr class="w3-clear">
    
    <p>${tweetcontent.tweet_text_content}</p>
    <img src="${tweetimgsrc}"width="120px">
    <br>
    <br>
    <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i> &nbsp;Like</button> 
    <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"onclick="ssa()"><i class="fa fa-comment"></i> &nbsp;Comment</button> 
    </div>`)
    }
}


    






function tweetdisplay(){
    var tweetscontainer=document.getElementById("tweetscontainer");
    /*tweetscontainer.insertAdjacentHTML('afterbegin',`<div class="tweet">
    
    <img src="${tweetcontent.userimg}"style="border-radius:100px; margin-top:-20px;" width="30px"class="small-profile-picture-sidebar">
    <h6 class="tweet-title">${tweetcontent.name}</h6>
    <p class="tweet-text">${tweetcontent.tweet_text_content}</p>
    
    </div>`);
    tweetbox.value="";*/
    
    tweetscontainer.insertAdjacentHTML("afterbegin",`<div class="tweet-container w3-container w3-card w3-white w3-round  "><br>
    <img src="${tweetcontent.userimg}" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:60px">
    <span class="w3-right w3-opacity">16 min</span>
    <h4>${tweetcontent.name}</h4><br>
    <hr class="w3-clear">
   
    <p>${tweetcontent.tweet_text_content}</p>
    <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i> &nbsp;Like</button> 
    <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"onclick="ssa()"><i class="fa fa-comment"></i> &nbsp;Comment</button> 
  </div>`)
    
    
}

const emojibutton = document.querySelector('#emoji-button');
  const picker = new emojiButton();

  picker.on('emoji', emoji => {
    document.querySelector('tweetbox').value += emoji;
  });

  emojibutton.addEventListener('click', () => {
    picker.pickerVisible ? picker.hidePicker() : picker.showPicker(button);
  });