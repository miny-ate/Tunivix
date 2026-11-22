// Tunivix Industries — shared site behaviour

// Footer year
document.querySelectorAll('[data-year]').forEach(function(el){
  el.textContent = new Date().getFullYear();
});

// Mobile nav toggle
(function(){
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if(!toggle || !links) return;
  toggle.addEventListener('click', function(){
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Contact form: builds a mailto: draft (works on static hosting with no backend).
// To use a real form backend instead (e.g. Formspree), set the <form> action to
// your endpoint and remove this handler + the "action" override below.
(function(){
  var form = document.getElementById('inquiryForm');
  if(!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var name = form.querySelector('#f-name').value.trim();
    var email = form.querySelector('#f-email').value.trim();
    var service = form.querySelector('#f-service').value;
    var message = form.querySelector('#f-message').value.trim();

    var subject = 'Supply enquiry' + (service ? ' — ' + service : '');
    var bodyLines = [
      'Name: ' + name,
      'Email: ' + email,
      'Enquiry type: ' + (service || 'Not specified'),
      '',
      message
    ];
    var mailto = 'mailto:operations@tunivix.com'
      + '?subject=' + encodeURIComponent(subject)
      + '&body=' + encodeURIComponent(bodyLines.join('\n'));

    window.location.href = mailto;
  });
})();
