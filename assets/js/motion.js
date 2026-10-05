// サイト全体のモーション。見た目は base.css の「モーション」の項
(function(){
  var root=document.documentElement;
  if(!root.classList.contains('js-motion'))return;
  window.motionReady=true;

  function all(sel){return Array.prototype.slice.call(document.querySelectorAll(sel))}
  var targets=[];
  function mark(sel,cls){all(sel).forEach(function(el){el.classList.add(cls);targets.push(el)})}

  mark('.numbers,.steps,.t-card,.faq,.col-grid,.col-empty,.pager,.nf-links,.room-group-h,.sns-list','rd');
  mark('.col-head','rd-b');
  mark('.sec-head h2,.col-head h1,.col-index-h','rise');

  // 100g・150m を高度計のように数え上げる。読み上げ用に最終の数字を残す
  all('.num b:not(.word)').forEach(function(b){
    var node=b.firstChild;
    if(!node||node.nodeType!==3)return;
    var end=parseInt(node.nodeValue,10);
    if(!(end>0))return;
    var cnt=document.createElement('span');
    cnt.className='cnt';
    cnt.setAttribute('aria-hidden','true');
    cnt.textContent=node.nodeValue;
    var sr=document.createElement('span');
    sr.className='sr-only';
    sr.textContent=node.nodeValue;
    b.replaceChild(cnt,node);
    b.insertBefore(sr,cnt);
    var fs=parseFloat(getComputedStyle(b).fontSize);
    if(fs>0)cnt.style.minWidth=(cnt.getBoundingClientRect().width/fs)+'em';
    cnt.textContent='0';
    b.dataset.count=end;
    targets.push(b);
  });

  function count(b){
    var cnt=b.querySelector('.cnt'),end=+b.dataset.count,t0=null,dur=1300;
    function step(t){
      if(t0===null)t0=t;
      var p=Math.min((t-t0)/dur,1),e=1-Math.pow(1-p,3);
      cnt.textContent=Math.round(end*e);
      if(p<1)requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(!en.isIntersecting)return;
      var el=en.target;
      io.unobserve(el);
      el.classList.add('in');
      if(el.dataset.count)count(el);
    });
  },{rootMargin:'0px 0px -10% 0px'});
  targets.forEach(function(el){io.observe(el)});
})();
