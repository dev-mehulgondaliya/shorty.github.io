$(document).ready(function() {
  let linkInput = document.getElementById('linkinput');
  let showshortLink = document.getElementById('showshortlink');
  let shortBtn = $('#shortbtn');
  let copyBtn = $('#copybtn');

  // handle theam btn click
  $('#theam-1').change(function() {
    $('body').removeClass('theam-2').addClass('theam-1');
  });

  $('#theam-2').change(function() {
    $('body').removeClass('theam-1').addClass('theam-2');
  });

  // short link api function
  async function shorter(){
    let shortApi = await fetch(`https://api.shrtco.de/v2/shorten?url=${linkInput.value}`);
    let response = await shortApi.json();
    showshortLink.value = response.result.short_link2;
  }

  // handle shortbtn click
  shortBtn.on('click',function(e){
    shorter();
  });

  // handle copy btn click
  copyBtn.on('click',function(){
    showshortLink.select();
    window.navigator.clipboard.writeText(showshortLink.value);
  })




});