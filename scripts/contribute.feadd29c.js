(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{uWRn:function(e,i,s){"use strict";s.r(i);var t,o,n=s("qIEf"),r=s.n(n),a=s("TiKg"),c=(t=u(regeneratorRuntime.mark(function e(i,s){var t,o,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=void 0,e.prev=1,e.next=4,r.a.get(i);case 4:if((t=e.sent).length>0)for(o=Math.min(t.length,10),n=0;n<o;n++)h("#"+s+"-group",t[n]);else p("#"+s+"-group");e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),p("#"+s+"-group");case 11:r()("#"+s+"-spinner").hide();case 12:case"end":return e.stop()}},e,this,[[1,8]])})),function(e,i){return t.apply(this,arguments)});function u(e){return function(){var i=e.apply(this,arguments);return new Promise(function(e,s){return function t(o,n){try{var r=i[o](n),a=r.value}catch(e){return void s(e)}if(!r.done)return Promise.resolve(a).then(function(e){t("next",e)},function(e){t("throw",e)});e(a)}("next")})}}function h(e,i){var s=r()(e),t=r()("<div>",{class:"github-item"}),o=r()("<div>",{class:"github-item-icon"});o.append(r()("<i>",{class:"far fa-check-circle","aria-hidden":!0}));var n=r()("<a>",{class:"common-title-text github-item-title",href:i.html_url,target:"_blank"});n.text(i.title);var c=r()("<div>",{class:"right-container"}),u=r()("<div>",{class:"github-item-description"}),h=a(i.created_at).format("DD MMM, YYYY");u.text("#"+i.number+" opened on "+h),c.append(n),c.append(u),t.append(o),t.append(c),s.append(t)}function p(e){r()(e).append("<p>To be uploaded</p>")}(o=u(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("https://api.github.com/repos/CodeChain-io/codechain/issues?labels=good+first+issue","CodeChain");case 2:return e.next=4,c("https://api.github.com/repos/CodeChain-io/codechain-sdk-js/issues?labels=good+first+issue","CodeChain-sdk-js");case 4:return e.next=6,c("https://api.github.com/repos/CodeChain-io/codechain-proxy/issues?labels=good+first+issue","CodeChain-proxy");case 6:return e.next=8,c("https://api.github.com/repos/CodeChain-io/codechain-explorer/issues?labels=good+first+issue","CodeChain-explorer");case 8:return e.next=10,c("https://api.github.com/repos/CodeChain-io/codechain-faucet/issues?labels=good+first+issue","CodeChain-faucet");case 10:return e.next=12,c("https://api.github.com/repos/CodeChain-io/codechain-helicopter/issues?labels=good+first+issue","CodeChain-helicopter");case 12:return e.next=14,c("https://api.github.com/repos/CodeChain-io/codechain-keystore/issues?labels=good+first+issue","CodeChain-keystore");case 14:return e.next=16,c("https://api.github.com/repos/CodeChain-io/codechain-keystore-server/issues?labels=good+first+issue","CodeChain-keystore-server");case 16:return e.next=18,c("https://api.github.com/repos/CodeChain-io/codechain-keystore-cli/issues?labels=good+first+issue","CodeChain-keystore-cli");case 18:return e.next=20,c("https://api.github.com/repos/CodeChain-io/codechain-cuckoo-cuda-miner/issues?labels=good+first+issue","CodeChain-cuckoo-cuda-miner");case 20:return e.next=22,c("https://api.github.com/repos/CodeChain-io/codechain-cuckoo-miner/issues?labels=good+first+issue","CodeChain-cuckoo-miner");case 22:return e.next=24,c("https://api.github.com/repos/CodeChain-io/codechain-blake-miner/issues?labels=good+first+issue","CodeChain-blake-miner");case 24:return e.next=26,c("https://api.github.com/repos/CodeChain-io/codechain-miner/issues?labels=good+first+issue","CodeChain-miner");case 26:return e.next=28,c("https://api.github.com/repos/CodeChain-io/rust-cuckoo/issues?labels=good+first+issue","Rust-cuckoo");case 28:case"end":return e.stop()}},e,this)})),function(){return o.apply(this,arguments)})()}},[["uWRn",0,1]]]);